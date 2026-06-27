"use client";
import React, { useEffect, useRef } from "react";

export default function HologramCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      // Center relative mouse position normalized from -1 to 1
      mouseRef.current.targetX = ((e.clientX - rect.left) / width) * 2 - 1;
      mouseRef.current.targetY = ((e.clientY - rect.top) / height) * 2 - 1;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // 3D particles system configuration
    const particleCount = 100;
    const particles = [];
    const focalLength = 300;
    
    // Orbital tech labels
    const techLabels = [
      "THUSANI",
      "SOFTWARE ENGINEER",
      "DEEP LEARNING",
      "REACT / NEXT.JS",
      "PYTHON",
      "PYTORCH",
      "NODE.JS",
      "TypeScript",
      "AI & ML",
      "REST APIs"
    ];

    class Particle {
      constructor(index) {
        this.index = index;
        // Place in a 3D sphere shell
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const radius = 120 + Math.random() * 30;

        this.x = radius * Math.sin(phi) * Math.cos(theta);
        this.y = radius * Math.sin(phi) * Math.sin(theta);
        this.z = radius * Math.cos(phi);

        // Assign some particles as major tech labels
        this.isLabel = index < techLabels.length;
        this.label = this.isLabel ? techLabels[index] : "";
        this.color = this.isLabel 
          ? "rgba(59, 130, 246, 0.9)" // Brighter blue for text
          : "rgba(155, 176, 218, 0.4)"; // Soft blue/cyan for standard nodes
      }

      update(angleY, angleX) {
        // Rotate on Y axis (horizontal rotation)
        let cosY = Math.cos(angleY);
        let sinY = Math.sin(angleY);
        let x1 = this.x * cosY - this.z * sinY;
        let z1 = this.z * cosY + this.x * sinY;

        // Rotate on X axis (vertical tilt based on mouse)
        let cosX = Math.cos(angleX);
        let sinX = Math.sin(angleX);
        let y2 = this.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + this.y * sinX;

        this.x = x1;
        this.y = y2;
        this.z = z2;
      }

      draw(ctx, width, height) {
        // Projection calculation
        const scale = focalLength / (focalLength + this.z + 180);
        const px = width / 2 + this.x * scale;
        const py = height / 2 + this.y * scale;

        // Don't draw if behind camera
        if (this.z + 180 < 0) return;

        ctx.beginPath();
        if (this.isLabel) {
          ctx.fillStyle = this.color;
          // Set smaller text on small screens
          const fontSize = width < 400 ? 9 : 11;
          ctx.font = `bold ${fontSize}px monospace`;
          ctx.textAlign = "center";
          ctx.fillText(this.label, px, py);
          
          // Draw small glowing dot below text
          ctx.arc(px, py + 5, 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = this.color;
          ctx.arc(px, py, 1.5 + scale * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(i));
    }

    // Matrix background simulation stream
    const matrixLines = [];
    const maxLines = 15;
    for (let i = 0; i < maxLines; i++) {
      matrixLines.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 1 + Math.random() * 2,
        length: 5 + Math.floor(Math.random() * 15),
        chars: Array.from({ length: 20 }, () => (Math.random() > 0.5 ? "1" : "0")),
      });
    }

    let rotY = 0.003;
    let rotX = 0.001;

    // Animation Loop
    const draw = () => {
      // Clear background
      ctx.fillStyle = "rgba(10, 15, 30, 0.2)"; // Trailing motion blur
      ctx.fillRect(0, 0, width, height);

      // 1. Draw Ambient Matrix Stream
      ctx.font = "8px monospace";
      ctx.fillStyle = "rgba(59, 130, 246, 0.08)";
      matrixLines.forEach((line) => {
        for (let i = 0; i < line.length; i++) {
          ctx.fillText(line.chars[i], line.x, line.y + i * 10);
        }
        line.y += line.speed;
        if (line.y > height) {
          line.y = -100;
          line.x = Math.random() * width;
        }
        if (Math.random() > 0.95) {
          line.chars[Math.floor(Math.random() * line.chars.length)] = Math.random() > 0.5 ? "1" : "0";
        }
      });

      // Lerp mouse coordinates to smooth movement
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Base rotation combined with mouse tilt factor
      const angleY = rotY + mouse.x * 0.015;
      const angleX = rotX - mouse.y * 0.015;

      // Update and rotate all particles
      particles.forEach((p) => p.update(angleY, angleX));

      // 2. Draw Hologram Mesh Network Lines
      ctx.strokeStyle = "rgba(59, 130, 246, 0.07)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pi = particles[i];
          const pj = particles[j];
          
          // Connect nodes that are close in 3D distance
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dz = pi.z - pj.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 75) {
            const scaleI = focalLength / (focalLength + pi.z + 180);
            const scaleJ = focalLength / (focalLength + pj.z + 180);
            const px1 = width / 2 + pi.x * scaleI;
            const py1 = height / 2 + pi.y * scaleI;
            const px2 = width / 2 + pj.x * scaleJ;
            const py2 = height / 2 + pj.y * scaleJ;

            ctx.beginPath();
            ctx.moveTo(px1, py1);
            ctx.lineTo(px2, py2);
            ctx.stroke();
          }
        }
      }

      // 3. Draw Particles
      // Sort particles by Z index (depth sorting) so front particles overlay back ones
      particles.sort((a, b) => b.z - a.z);
      particles.forEach((p) => p.draw(ctx, width, height));

      // 4. Draw HUD Overlays (Radar / Target Ring)
      const cx = width / 2;
      const cy = height / 2;

      // Spinning outer reticle
      ctx.strokeStyle = "rgba(59, 130, 246, 0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, 170, 0, Math.PI * 2);
      ctx.stroke();

      // Tick marks on reticle
      ctx.strokeStyle = "rgba(59, 130, 246, 0.25)";
      ctx.beginPath();
      const time = Date.now() * 0.0005;
      for (let i = 0; i < 4; i++) {
        const angle = time + (i * Math.PI) / 2;
        ctx.moveTo(cx + Math.cos(angle) * 165, cy + Math.sin(angle) * 165);
        ctx.lineTo(cx + Math.cos(angle) * 175, cy + Math.sin(angle) * 175);
      }
      ctx.stroke();

      // Diagnostic text HUD panel (bottom-left)
      ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
      ctx.font = "9px monospace";
      ctx.textAlign = "left";
      ctx.fillText("SYS.STATUS: ONLINE", 20, height - 55);
      ctx.fillText("MATRIX.PROJ: 3D_SPHERE", 20, height - 42);
      ctx.fillText(`FPS: 60 / LOCK`, 20, height - 29);

      // Radar scan target line pointing to mouse hover (if cursor inside)
      if (Math.abs(mouse.x) > 0.01 || Math.abs(mouse.y) > 0.01) {
        const targetX = cx + mouse.x * (width / 2.2);
        const targetY = cy + mouse.y * (height / 2.2);
        ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
        ctx.setLineDash([2, 4]);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(targetX, targetY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Interactive Target crosshair on cursor
        ctx.strokeStyle = "rgba(147, 197, 253, 0.6)";
        ctx.beginPath();
        ctx.arc(targetX, targetY, 8, 0, Math.PI * 2);
        ctx.moveTo(targetX - 12, targetY);
        ctx.lineTo(targetX + 12, targetY);
        ctx.moveTo(targetX, targetY - 12);
        ctx.lineTo(targetX, targetY + 12);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-full relative group">
      {/* Glow highlight in the background */}
      <div className="absolute inset-0 bg-blue-500/5 rounded-full filter blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500" />
      <canvas
        ref={canvasRef}
        className="w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[450px] relative z-2 cursor-crosshair rounded-full"
      />
    </div>
  );
}
