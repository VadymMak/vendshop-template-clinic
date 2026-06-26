'use client';

import { useEffect, useRef } from 'react';
import styles from './Background3D.module.css';

export function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let animId: number;
    let t = 0;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      const W = canvas!.width;
      const H = canvas!.height;

      ctx.clearRect(0, 0, W, H);

      const horizon = H * 0.45;
      const vp = { x: W / 2, y: horizon };
      const cols = 16;
      const rows = 14;
      const speed = 0.3;
      const offset = (t * speed) % (H / rows);

      // Вертикальные линии (сходятся к горизонту)
      for (let i = 0; i <= cols; i++) {
        const x = (i / cols) * W;
        const alpha = 0.06 + 0.04 * Math.abs(Math.sin(i * 0.4 + t * 0.01));
        ctx.strokeStyle = `rgba(14,165,233,${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(x, H);
        ctx.lineTo(vp.x, vp.y);
        ctx.stroke();
      }

      // Горизонтальные линии (уходят в перспективу)
      for (let j = 0; j <= rows; j++) {
        const progress = Math.pow(j / rows + offset / H, 1.4);
        const y = horizon + (H - horizon) * progress;
        if (y < horizon || y > H + 10) continue;
        const spread = (y - horizon) / (H - horizon);
        const x0 = vp.x - spread * W * 0.52;
        const x1 = vp.x + spread * W * 0.52;
        const alpha = 0.04 + 0.08 * spread;
        ctx.strokeStyle = `rgba(14,165,233,${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(x0, y);
        ctx.lineTo(x1, y);
        ctx.stroke();
      }

      // Точки выше горизонта
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, W, horizon);
      ctx.clip();
      for (let s = 0; s < 60; s++) {
        const sx = (s * 173 + t * 0.02) % W;
        const sy = (s * 97) % horizon;
        const alpha = 0.06 + 0.08 * Math.abs(Math.sin(s + t * 0.03));
        ctx.fillStyle = `rgba(14,165,233,${alpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, 0.8, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Свечение у горизонта
      const glow = ctx.createRadialGradient(vp.x, vp.y, 0, vp.x, vp.y, H * 0.3);
      glow.addColorStop(0, 'rgba(186,230,253,0.12)');
      glow.addColorStop(1, 'rgba(186,230,253,0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, W, H);

      t += 0.4;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
