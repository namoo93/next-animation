'use client';
import { useLottie } from 'lottie-react';
import animationRainbow from '../public/animationRainbow.json';

const style = {
  height: 250,
  position: 'absolute',
  top: '30%',
  right: '20px',
};

const Rainbow = () => {
  const options = {
    animationData: animationRainbow,
    loop: true,
    autoplay: true,
  };

  const { View, setSpeed } = useLottie(options, style);

  setSpeed(1);
  return View;
};

export default Rainbow;
