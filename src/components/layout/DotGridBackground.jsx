import { useEffect, useRef } from 'react';
import { drawDotGrid } from '../../utils/dotGrid';
import './DotGridBackground.css';

const EASE_POSITION = 0.14;
const EASE_INTENSITY = 0.08;

function readColors() {
  const styles = getComputedStyle(document.documentElement);
  const isDark = styles.colorScheme.includes('dark');
  return {
    accent: styles.getPropertyValue('--color-accent').trim(),
    base: styles.getPropertyValue('--color-text').trim(),
    baseAlpha: isDark ? 0.1 : 0.13,
  };
}

/**
 * Faint dot grid fixed behind the whole page; the dots scroll with the content.
 * Dots near the mouse light up in the accent color. On touch devices a soft
 * glow drifts slowly across the screen instead. Only animates while something
 * is changing, pauses in background tabs, and is static for reduced motion.
 */
export default function DotGridBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const darkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    let width = 0;
    let height = 0;
    let frame = 0;
    let colors = readColors();
    const state = { x: 0, y: 0, tx: 0, ty: 0, intensity: 0, target: 0 };

    const ambient = () => !finePointer.matches && !reduceMotion.matches;

    const render = () =>
      drawDotGrid(ctx, {
        width,
        height,
        x: state.x,
        y: state.y,
        intensity: state.intensity,
        colors,
        scrollY: window.scrollY,
      });

    const tick = (time) => {
      frame = 0;
      if (ambient()) {
        // Slow Lissajous path for devices without a mouse.
        state.tx = width * (0.6 + 0.3 * Math.sin(time * 0.00021));
        state.ty = height * (0.5 + 0.35 * Math.sin(time * 0.00029 + 1));
        state.target = 0.65;
      }

      if (reduceMotion.matches) {
        state.x = state.tx;
        state.y = state.ty;
        state.intensity = 0;
      } else {
        state.x += (state.tx - state.x) * EASE_POSITION;
        state.y += (state.ty - state.y) * EASE_POSITION;
        state.intensity += (state.target - state.intensity) * EASE_INTENSITY;
      }
      render();

      const settled =
        Math.abs(state.target - state.intensity) < 0.003 &&
        Math.abs(state.tx - state.x) < 0.5 &&
        Math.abs(state.ty - state.y) < 0.5;

      if (!document.hidden && !reduceMotion.matches && (ambient() || !settled)) {
        frame = requestAnimationFrame(tick);
      }
    };

    // Request one frame; tick() keeps going only while something is moving.
    const schedule = () => {
      if (!frame && !document.hidden) frame = requestAnimationFrame(tick);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      render();
    };

    const onPointerMove = (e) => {
      if (ambient() || e.pointerType === 'touch') return;
      if (state.intensity < 0.02) {
        state.x = e.clientX; // appear under the cursor instead of sliding in
        state.y = e.clientY;
      }
      state.tx = e.clientX;
      state.ty = e.clientY;
      state.target = 1;
      schedule();
    };

    const onPointerLeave = () => {
      state.target = 0;
      schedule();
    };

    const onThemeChange = () => {
      colors = readColors();
      schedule();
    };

    const themeObserver = new MutationObserver(onThemeChange);
    themeObserver.observe(document.documentElement, { attributeFilter: ['data-theme'] });

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('visibilitychange', schedule);
    darkScheme.addEventListener('change', onThemeChange);
    finePointer.addEventListener('change', schedule);
    reduceMotion.addEventListener('change', schedule);

    resize();
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      themeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('pointermove', onPointerMove);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', schedule);
      darkScheme.removeEventListener('change', onThemeChange);
      finePointer.removeEventListener('change', schedule);
      reduceMotion.removeEventListener('change', schedule);
    };
  }, []);

  return <canvas ref={canvasRef} className="dot-grid-bg" aria-hidden="true" />;
}
