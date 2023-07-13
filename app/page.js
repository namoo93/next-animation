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
  const [balloons, setBalloons] = useState(balloonArray);

  const balloonsHandler = () => {
    let arr = [];

    // arr.push({ key: v4(), type: ,translateX: , translateY: ,scale: ,rotate: });
  };

  useEffect(() => {
    setBalloons();
  }, []);

  const handleDelete = (value) => {
    // console.log('handleDelete');
    setBalloons(balloons.filter((balloon) => balloon.key != value));
  };
  const isOnClickHouse = () => {
    console.log('House click!');
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
          fill={'#fff'}
          className='house'
        />
      </div>
      {/* Pure CSS Drawing Components */}
      <div>
        {balloons.map((balloon) => (
          <BalloonWrapComponent
            key={balloon.key}
            value={balloon.key}
            translateX={`-50%`}
            translateY={'-50%'}
            scale={0.8}
            rotate={15}
            handleDelete={handleDelete}>
            {balloon.type === 'bear' && <BearComponent />}
            {balloon.type === 'flower' && <FlowerComponent />}
            {balloon.type === 'heart' && <HeartComponent />}
            {balloon.type === 'normal' && <NormalComponent />}
          </BalloonWrapComponent>
        ))}
      </div>
    </main>
  );
}
