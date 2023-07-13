import { useEffect, useState } from 'react';

export default function BalloonWrapComponent({ children, translateX, translateY, scale, rotate, handleDelete, value }) {
  const [fixed, setFixed] = useState(true);
  useEffect(() => {
    setFixed(false);
  }, []);
  return (
    <div
      style={{
        transform: `translateX(${translateX}) translateY(${translateY}) scale(${scale}) rotate(${rotate}deg) `,
      }}
      onClick={() => handleDelete(value)}
      className={`balloon_wrap ${fixed && 'fixed'}`}>
      {children}
    </div>
  );
}
