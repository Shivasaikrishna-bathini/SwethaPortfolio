import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      angle: number;
      distance: number;
      speed: number;
      opacity: number;
    }> = [];

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < 800; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * Math.max(canvas.width, canvas.height) * 0.8;
      stars.push({
        x: 0,
        y: 0,
        radius: Math.random() * 1.5 + 0.3,
        angle,
        distance,
        speed: (1 - distance / (Math.max(canvas.width, canvas.height) * 0.8)) * 0.0005 + 0.0001,
        opacity: Math.random() * 0.8 + 0.2
      });
    }

    let rotation = 0;

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(10, 10, 30, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rotation += 0.0005;

      stars.forEach((star) => {
        star.angle += star.speed;

        const spiralFactor = star.distance * 0.003;
        const x = centerX + Math.cos(star.angle + rotation + spiralFactor) * star.distance;
        const y = centerY + Math.sin(star.angle + rotation + spiralFactor) * star.distance;

        star.x = x;
        star.y = y;

        const hue = (star.angle * 57.3 + rotation * 100) % 360;
        ctx.fillStyle = `hsla(${hue}, 80%, 70%, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < 5; i++) {
        const armAngle = (i * Math.PI * 2) / 5 + rotation * 2;
        ctx.strokeStyle = `hsla(${(i * 72 + rotation * 50) % 360}, 80%, 60%, 0.15)`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        for (let r = 0; r < Math.max(canvas.width, canvas.height) * 0.8; r += 5) {
          const spiralAngle = armAngle + r * 0.005;
          const x = centerX + Math.cos(spiralAngle) * r;
          const y = centerY + Math.sin(spiralAngle) * r;
          
          if (r === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'linear-gradient(to bottom, #0a0a1e, #1a0a2e, #2d1b4e)' }}
    />
  );
}
