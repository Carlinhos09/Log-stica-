import { useRef, useEffect } from 'react';

const accents = [
  '#FF6200', // 0 cover
  '#FF6200', // 1 intro
  '#FF6200', // 2 response
  '#888888', // 3 paradigm
  '#FF6200', // 4 push
  '#EF4444', // 5 bullwhip
  '#22C55E', // 6 pull
  '#F59E0B', // 7 pull challenges
  '#3B82F6', // 8 decoupling
  '#888888', // 9 comparison
  '#FF6200', // 10 hybrid
  '#888888', // 11 strategy
  '#FF6200', // 12 cases
  '#FF6200', // 13 conclusion
];

// Blueprint grid background - industrial, precise, like a factory floor plan
export default function Scene3D({ currentSlide = 0 }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = window.innerWidth;
    let H = window.innerHeight;
    let t = 0;

    canvas.width = W;
    canvas.height = H;

    const accent = accents[currentSlide] || '#FF6200';

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const gridSize = 48;
      const offsetX = (t * 0.3) % gridSize;
      const offsetY = (t * 0.15) % gridSize;

      // Draw grid lines - blueprint style
      ctx.strokeStyle = `rgba(30, 30, 30, 0.9)`;
      ctx.lineWidth = 0.5;
      ctx.setLineDash([]);

      // Vertical lines
      for (let x = -offsetX; x < W + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = -offsetY; y < H + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      // Accent cross markers at intersections (sparse)
      const accentHex = accent;
      const r = parseInt(accentHex.slice(1, 3), 16);
      const g = parseInt(accentHex.slice(3, 5), 16);
      const b = parseInt(accentHex.slice(5, 7), 16);

      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.18)`;
      ctx.lineWidth = 0.8;

      for (let x = -offsetX; x < W + gridSize; x += gridSize * 4) {
        for (let y = -offsetY; y < H + gridSize; y += gridSize * 4) {
          const sz = 6;
          ctx.beginPath();
          ctx.moveTo(x - sz, y);
          ctx.lineTo(x + sz, y);
          ctx.moveTo(x, y - sz);
          ctx.lineTo(x, y + sz);
          ctx.stroke();
        }
      }

      // Large decorative circle on right side (like a gear/radar)
      const cx = W * 0.85;
      const cy = H * 0.5;
      const maxR = Math.min(W, H) * 0.35;

      for (let i = 1; i <= 4; i++) {
        const radius = (maxR / 4) * i;
        const alpha = 0.025 - i * 0.004;
        if (alpha <= 0) continue;
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.lineWidth = i === 1 ? 1 : 0.5;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Rotating tick marks on outer ring
      const tickCount = 36;
      const outerR = maxR;
      const innerR = maxR - 10;
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.08)`;
      ctx.lineWidth = 1;
      for (let i = 0; i < tickCount; i++) {
        const angle = (i / tickCount) * Math.PI * 2 + t * 0.005;
        const x1 = cx + Math.cos(angle) * outerR;
        const y1 = cy + Math.sin(angle) * outerR;
        const x2 = cx + Math.cos(angle) * innerR;
        const y2 = cy + Math.sin(angle) * innerR;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Corner bracket decorations
      const bSize = 28;
      const bPad = 24;
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.2)`;
      ctx.lineWidth = 1.5;

      // Top-right corner
      ctx.beginPath();
      ctx.moveTo(W - bPad - bSize, bPad);
      ctx.lineTo(W - bPad, bPad);
      ctx.lineTo(W - bPad, bPad + bSize);
      ctx.stroke();

      // Bottom-left corner
      ctx.beginPath();
      ctx.moveTo(bPad + bSize, H - bPad);
      ctx.lineTo(bPad, H - bPad);
      ctx.lineTo(bPad, H - bPad - bSize);
      ctx.stroke();

      t += 1;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [currentSlide]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 1,
      }}
    />
  );
}
