// Pure drawing logic for the interactive dot grid behind the page.

export const GRID = {
  gap: 28, // distance between dots (px)
  radius: 220, // how far the glow reaches from the pointer (px)
  push: 6, // how far lit dots move away from the pointer (px)
  baseSize: 1.5, // size of an idle dot (px)
  maxSize: 4.5, // size of a fully lit dot (px)
};

export function drawDotGrid(ctx, { width, height, x, y, intensity, colors, scrollY = 0 }) {
  const { gap, radius, push, baseSize, maxSize } = GRID;
  ctx.clearRect(0, 0, width, height);

  // Center the grid horizontally; shift it vertically with the page scroll
  // so the dots move together with the content.
  const startX = ((width % gap) + gap) / 2;
  const startY = gap / 2 - (scrollY % gap);
  const lit = [];

  // Pass 1: idle dots, one fill color for all of them.
  ctx.fillStyle = colors.base;
  ctx.globalAlpha = colors.baseAlpha;
  for (let gx = startX; gx < width; gx += gap) {
    for (let gy = startY; gy < height; gy += gap) {
      const dx = gx - x;
      const dy = gy - y;
      const dist = Math.hypot(dx, dy);
      const t = intensity > 0 ? Math.max(0, 1 - dist / radius) * intensity : 0;
      const e = t * t; // ease-in so the glow falls off softly

      if (e > 0.01) {
        lit.push(gx, gy, dx / (dist || 1), dy / (dist || 1), e);
      } else {
        ctx.fillRect(gx - baseSize / 2, gy - baseSize / 2, baseSize, baseSize);
      }
    }
  }

  // Pass 2: dots near the pointer, in the accent color.
  ctx.fillStyle = colors.accent;
  for (let i = 0; i < lit.length; i += 5) {
    const gx = lit[i];
    const gy = lit[i + 1];
    const e = lit[i + 4];
    const size = baseSize + (maxSize - baseSize) * e;
    ctx.globalAlpha = 0.2 + 0.8 * e;
    ctx.fillRect(gx + lit[i + 2] * push * e - size / 2, gy + lit[i + 3] * push * e - size / 2, size, size);
  }

  ctx.globalAlpha = 1;
}
