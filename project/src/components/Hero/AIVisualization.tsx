import React, { useEffect, useRef } from 'react';

export default function AIVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      pulseSpeed: number;
      pulseSize: number;
      baseSize: number;
      angle: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseSize = Math.random() * 3 + 2; // Larger base size
        this.size = this.baseSize;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.color = `rgba(56, 189, 248, ${Math.random() * 0.5 + 0.3})`; // More opacity
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseSize = Math.random() * 1 + 0.5;
        this.angle = Math.random() * Math.PI * 2;
      }

      update() {
        // Orbital movement
        this.angle += 0.01;
        this.x += Math.cos(this.angle) * 0.5 + this.speedX;
        this.y += Math.sin(this.angle) * 0.5 + this.speedY;

        // Pulsing size
        this.size = this.baseSize + Math.sin(Date.now() * this.pulseSpeed) * this.pulseSize;

        // Boundary checking
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Create more particles
    const particles: Particle[] = [];
    for (let i = 0; i < 200; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    function animate() {
      // Clear canvas with slight fade effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections with higher opacity and more connections
      particles.forEach(p1 => {
        particles.forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) { // Increased connection distance
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - distance / 100)})`; // Higher base opacity
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
}