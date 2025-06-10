import React from 'react';

interface DataStreamProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color: string;
}

export function DataStream({ startX, startY, endX, endY, color }: DataStreamProps) {
  const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
  const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));

  return (
    <div
      className="absolute h-px origin-left"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        width: `${length}%`,
        transform: `rotate(${angle}deg)`,
        background: `linear-gradient(90deg, ${color}, transparent)`,
      }}
    >
      <div
        className="absolute h-full w-1/4 animate-[stream_2s_linear_infinite]"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
      />
    </div>
  );
}