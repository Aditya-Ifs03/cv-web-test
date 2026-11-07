import { useEffect, useRef } from 'react';
import { drawDotGrid } from '../../utils/dotGrid';

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
 * Faint dot grid behind the hero. Dots near the mouse light up in the accent
 * color. On touch devices a soft glow drifts slowly across the grid instead.
 * Pauses off-screen / in background tabs; static for reduced-motion users.
 */
export default function HeroBackground() {
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
    let inView = true;
    let colors = readColors();
    const state = { x: 0, y: 0, tx: 0, ty: 0, intensity: 0, target: 0 };

    const ambient = () => !finePointer.matches;
    const animated = () => !reduceMotion.matches;

    const render = () =>
      drawDotGrid(ctx, { width, height, x: state.x, y: state.y, intensity: state.intensity, colors });

    const tick = (time) => {
      if (ambient()) {
        // Slow Lissajous path for devices without a mouse.
        state.tx = width * (0.62 + 0.25 * Math.sin(time * 0.00021));
        state.ty = height * (0.45 + 0.3 * Math.sin(time * 0.00029 + 1));
        state.target = 0.65;
      }

      state.x += (state.tx - state.x) * EASE_POSITION;
      state.y += (state.ty - state.y) * EASE_POSITION;
      state.intensity += (state.target - state.intensity) * EASE_INTENSITY;
      render();

      const settled =
        Math.abs(state.target - state.intensity) < 0.003 &&
        Math.abs(state.tx - state.x) < 0.5 &&
        Math.abs(state.ty - state.y) < 0.5;

      frame =
        inView && !document.hidden && (ambient() || !settled) ? requestAnimationFrame(tick) : 0;
    };

    const start = () => {
      if (!frame && inView && !document.hidden && animated()) frame = requestAnimationFrame(tick);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      render();
    };

    const onPointerMove = (e) => {
      if (ambient() || e.pointerType === 'touch') return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;

      if (inside && state.intensity < 0.02) {
        state.x = x; // appear under the cursor instead of sliding in
        state.y = y;
      }
      state.tx = x;
      state.ty = y;
      state.target = inside ? 1 : 0;
      start();
    };

    const onPointerLeave = () => {
      state.target = 0;
      start();
    };

    const onThemeChange = () => {
      colors = readColors();
      render();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const viewObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      start();
    });
    viewObserver.observe(canvas);

    const themeObserver = new MutationObserver(onThemeChange);
    themeObserver.observe(document.documentElement, { attributeFilter: ['data-theme'] });

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('visibilitychange', start);
    darkScheme.addEventListener('change', onThemeChange);
    finePointer.addEventListener('change', start);
    reduceMotion.addEventListener('change', start);

    resize();
    start();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      viewObserver.disconnect();
      themeObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', start);
      darkScheme.removeEventListener('change', onThemeChange);
      finePointer.removeEventListener('change', start);
      reduceMotion.removeEventListener('change', start);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__bg" aria-hidden="true" />;
}
