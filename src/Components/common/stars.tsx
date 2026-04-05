import { useEffect, useRef } from "react";

type Props = {
  num:number;
}

const StarCanvas = ({num}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    
    const parent = canvas.parentElement!; 
    canvas.width  = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

    const stars = Array.from({ length: num }, () => ({
        // center point the star orbits around
        cx:     Math.random() * canvas.width,
        cy:     Math.random() * canvas.height,
        // orbit size
        radius: Math.random() * 20 + 5,
        // starting angle and how fast it spins
        angle:  Math.random() * Math.PI * 2,
        speed:  (Math.random() * 0.005 + 0.005) * (Math.random() > 0.5 ? 2 : -1),
        r:      Math.random() * 1.2 + 0.3,
        alpha:  Math.random() * 0.5 + 0.1,
    }));

    let frame: number;

    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const s of stars) {
            // increment angle each frame — this is what makes it circular
            s.angle += s.speed;

            // calculate x/y from the angle
            const x = s.cx + Math.cos(s.angle) * s.radius;
            const y = s.cy + Math.sin(s.angle) * s.radius;

            ctx.beginPath();
            ctx.arc(x, y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(242, 235, 224, 1)`;
            ctx.fill();
        }

        frame = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frame);
  }, []);

  return <canvas ref={canvasRef} className="stars-canvas" />;
};

export default StarCanvas;