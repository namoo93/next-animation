'use client';
import { useState } from 'react';
import Image from 'next/image';
import cloudsUrl from '../public/clouds.svg?url';
import HouseSvgComponent from './House';
import BearComponent from './Bear';
import BalloonWrapComponent from './BalloonWrap';
import FlowerComponent from './Flower';
import HeartComponent from './Heart';
import NormalComponent from './Normal';

export default function Home() {
  const balloonArr = [
    { key: 1, type: 'bear' },
    { key: 2, type: 'flower' },
    { key: 3, type: 'heart' },
    { key: 4, type: 'normal' },
  ];
  const [backgroundColor, setBackgroundColor] = useState('skyblue');
  const [balloonNumber, setBalloonNumber] = useState(balloonArr);

  const handleDelete = (value) => {
    console.log('handleDelete');
    setBalloonNumber(balloonNumber.filter((balloon) => balloon.key != value));
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
        {balloonNumber.map((balloon) => (
          <BalloonWrapComponent
            key={balloon.key}
            value={balloon.key}
            translateX={`${200 + balloon.key * -80}%`}
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
