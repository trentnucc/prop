import React from 'react';

interface NetworkNodeProps {
  x: number;
  y: number;
  size: number;
  pulse: boolean;
  color: string;
}

export function NetworkNode({ x, y, size, pulse, color }: NetworkNodeProps) {
  return (
    <div
      className={`absolute rounded-full ${pulse ? 'animate-pulse' : ''}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle at 30% 30%, ${color}, rgba(59, 130, 246, 0.1))`,
        boxShadow: `0 0 ${size/2}px ${color}`,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}