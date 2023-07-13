'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import cloudsUrl from '../public/clouds.svg?url';
import HouseSvgComponent from './House';
import BearComponent from './Bear';
import BalloonWrapComponent from './BalloonWrap';
import FlowerComponent from './Flower';
import HeartComponent from './Heart';
import NormalComponent from './Normal';
import { v4 } from 'uuid';

export default function Home() {
  const balloonArray = [
    // { key: 1, type: 'bear' },
    // { key: 2, type: 'flower' },
    // { key: 3, type: 'heart' },
    // { key: 4, type: 'normal' },
  ];

  const [backgroundColor, setBackgroundColor] = useState('skyblue');
  const [houseRoofColor, setHouseRoofColor] = useState('#fff');
  const [balloons, setBalloons] = useState(balloonArray);

  const createBalloons = () => {
    let arr = [...balloons];
    arr.push({
      key: v4(),
      type: 'normal',
      translateX: Math.floor(Math.random() * (400 - -500) + -500) + `%`,
      translateY: Math.floor(Math.random() * (-240 - -70) + -70) + `%`,
      scale: Math.random() * (1 - 0.5) + 0.5,
      rotate: Math.floor(Math.random() * (45 - 15) + -15),
    });

    console.log(arr);
    return arr;
  };
  const createColors = () => {};
  useEffect(() => {
    setBalloons(createBalloons());
  }, []);

  const handleDelete = (value) => {
    // console.log('handleDelete');
    setBalloons(balloons.filter((balloon) => balloon.key != value));
  };
  const isOnClickHouse = () => {
    console.log('House click!');
    setBalloons(createBalloons());

    setHouseRoofColor();
    setBackgroundColor();
  };

  return (
    <main
      style={{ backgroundColor: { backgroundColor } }}
      className='main'>
      {/* Svg Components */}
      <div className='svg_wrap'>
        <Image
          className='cloud'
          src={cloudsUrl}
          alt='background clouds'
        />
      </div>
      <div className='svg_wrap house_wrap'>
        <HouseSvgComponent
          isOnClickHouse={isOnClickHouse}
          fill={houseRoofColor}
          className='house'
        />
      </div>
      {/* Pure CSS Drawing Components */}
      {balloons.map((balloon) => (
        <BalloonWrapComponent
          key={balloon.key}
          value={balloon.key}
          translateX={balloon.translateX}
          translateY={balloon.translateY}
          scale={balloon.scale}
          rotate={balloon.rotate}
          handleDelete={handleDelete}>
          {balloon.type === 'bear' && <BearComponent />}
          {balloon.type === 'flower' && <FlowerComponent />}
          {balloon.type === 'heart' && <HeartComponent />}
          {balloon.type === 'normal' && <NormalComponent />}
        </BalloonWrapComponent>
      ))}
    </main>
  );
}
