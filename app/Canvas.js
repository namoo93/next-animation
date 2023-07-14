'use client';
import { useEffect, useRef, useState } from 'react';

export default function CanvasComponent({ bottom, right, left }) {
  const canvasRef = useRef(null);
  const [location, setLocation] = useState({});

  const getLocation = () => {
    console.log(bottom, right, left);

    return;
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 200;

    getLocation();
    const context = canvas.getContext('2d');
    drawLines(context, right + left - left, bottom, window.innerWidth / 2, window.innerHeight - 200);

    // requestAnimationFrame(drawLines);
  });

  const drawLines = (context, x, y, fixX, fixY) => {
    context.strokeStyle = '#000';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(fixX, fixY); //첫위치
    context.lineTo(x, y); //이동위치
    context.stroke();
    context.closePath();
  };

  // const canvasRef = useCanvas()

  return (
    <canvas
      ref={canvasRef}
      className='canvas_box'></canvas>
  );
}
