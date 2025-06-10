import React, { useEffect, useState } from 'react';
import { NetworkNode } from './NetworkNode';
import { DataStream } from './DataStream';

interface Node {
  x: number;
  y: number;
  size: number;
  pulse: boolean;
}

interface Connection {
  start: number;
  end: number;
}

export default function AIVisualization() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    // Create nodes in a circular pattern
    const nodeCount = 12;
    const newNodes: Node[] = [];
    const radius = 35; // % from center

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i * 2 * Math.PI) / nodeCount;
      newNodes.push({
        x: 50 + radius * Math.cos(angle),
        y: 50 + radius * Math.sin(angle),
        size: Math.random() * 10 + 15,
        pulse: Math.random() > 0.5
      });
    }

    // Add central node
    newNodes.push({
      x: 50,
      y: 50,
      size: 30,
      pulse: true
    });

    // Create connections
    const newConnections: Connection[] = [];
    for (let i = 0; i < nodeCount; i++) {
      // Connect to neighbors
      newConnections.push({ start: i, end: (i + 1) % nodeCount });
      // Connect to center
      newConnections.push({ start: i, end: nodeCount });
    }

    setNodes(newNodes);
    setConnections(newConnections);
  }, []);

  return (
    <div className="relative w-full h-[600px] mt-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />

      {/* Glowing background effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-100/50 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-100/50 rounded-full blur-[100px] animate-pulse-delayed" />

      {/* Network visualization */}
      <div className="relative w-full h-full">
        {connections.map((conn, i) => (
          <DataStream
            key={i}
            startX={nodes[conn.start]?.x || 0}
            startY={nodes[conn.start]?.y || 0}
            endX={nodes[conn.end]?.x || 0}
            endY={nodes[conn.end]?.y || 0}
            color="rgba(59, 130, 246, 0.3)"
          />
        ))}

        {nodes.map((node, i) => (
          <NetworkNode
            key={i}
            x={node.x}
            y={node.y}
            size={node.size}
            pulse={node.pulse}
            color={i === nodes.length - 1 ? 'rgb(59, 130, 246)' : 'rgba(59, 130, 246, 0.5)'}
          />
        ))}
      </div>
    </div>
  );
}