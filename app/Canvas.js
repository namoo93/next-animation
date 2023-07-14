'use client';
import { useEffect, useRef } from 'react';

export default function CanvasComponent() {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
  });

  return (
    <div className='canvas_wrap'>
      <canvas
        ref={canvasRef}
        className='canvas_box'></canvas>
    </div>
  );
}
