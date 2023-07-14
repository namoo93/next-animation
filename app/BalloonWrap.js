'use client';
import { env } from '@/next.config';
import { useEffect, useState } from 'react';

export default function BalloonWrapComponent({
  id,
  children,
  translateX,
  translateY,
  scale,
  rotate,
  handleDelete,
  value,
}) {
  const [fixed, setFixed] = useState(true);
  useEffect(() => {
    setFixed(false);
  }, []);
  return (
    <div
      id={id}
      style={{
        transform: `translateX(${translateX}) translateY(${translateY}) scale(${scale}) rotate(${rotate}deg) `,
      }}
      onClick={(e) => {
        handleDelete(value, e);
      }}
      className={`balloon_wrap ${fixed && 'fixed'}`}>
      {children}
    </div>
  );
}
