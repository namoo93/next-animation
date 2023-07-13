'use client';
import { useLottie } from 'lottie-react';
import animationCat from '../public/animationCat.json';

const style = {
  height: 200,
  position: 'absolute',
  bottom: '-10px',
  left: '20%',
  opacity: 0.6,
};

const RainbowCat = () => {
  const options = {
    animationData: animationCat,
    loop: true,
    autoplay: true,
  };

  const { View, setSpeed } = useLottie(options, style);

  setSpeed(1);
  return View;
};

export default RainbowCat;
