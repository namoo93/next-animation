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
import RainbowCat from './RainbowCat';
import Rainbow from './Rainbow';
import CanvasComponent from './Canvas';

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState('skyblue');
  const [houseRoofColor, setHouseRoofColor] = useState('#fff');
  const [balloons, setBalloons] = useState([]);
  const [exploded, setExploded] = useState({});

  const createBalloons = () => {
    let translateX = Math.floor(Math.random() * (400 - -500) + -500);
    let translateY = Math.floor(Math.random() * (-240 - -70) + -70);
    let balloonKey = v4();
    let isLine = false;
    const addRotate = (x) => {
      let num;
      if (x > 20) {
        num = Math.floor(Math.random() * (50 - 22) + 22);
        return num;
      }
      if (x < -120) {
        num = Math.floor(Math.random() * (-45 - -15) + -15);
        return num;
      }
      if (translateY > -200) {
        isLine = true;
      }
      num = Math.floor(Math.random() * (-5 - 5));

      return num;
    };

    const addType = () => {
      const types = ['normal', 'heart', 'flower', 'bear', 'normal', 'normal', 'normal'];
      const pickTypeIndex = Math.floor(Math.random() * types.length);
      return types[pickTypeIndex];
    };

    const addBalloonColor = () => {
      const colors = ['#3617c5', '#ff87aa', '#fe3b36', '#ffcc00', '#bfff00'];
      const pickColorIndex = Math.floor(Math.random() * colors.length);
      return colors[pickColorIndex];
    };

    return {
      key: balloonKey,
      type: addType(),
      color: addBalloonColor(),
      translateX: translateX + '%',
      translateY: translateY + `%`,
      scale: Math.random() * (1 - 0.5) + 0.5,
      rotate: addRotate(translateX),
      line: isLine,
    };
  };

  const createRGB = () =>
    `rgb( ${new Array(3)
      .fill()
      .map((v) => Math.random() * 255)
      .join(',')} , 0.3)`;

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 70; i++) {
      arr.push(createBalloons());
    }
    setBalloons(arr);
  }, []);
  useEffect(() => {}, [balloons]);

  // const getLinesLocation = () => {
  //   let arr;
  //   const domElement = document.getElementById(tmpBalloon);
  //   const domElementRect = domElement.getBoundingClientRect();
  //   arr = [...lines, { bottom: domElementRect.bottom, left: domElementRect.left, right: domElementRect.right }];

  //   setLines(arr);
  // };

  const handleDelete = (value, e) => {
    // console.log();
    setExploded(e.clientX, e.clientY);
    setBalloons(balloons.filter((balloon) => balloon.key != value));
  };
  const isOnClickHouse = () => {
    // console.log('House click!');
    setBalloons([...balloons, createBalloons()]);
    setHouseRoofColor(createRGB());
    setBackgroundColor(createRGB());
  };

  return (
    <main
      style={{ backgroundColor: backgroundColor }}
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
      <span>Click The House!</span>

      {/* Pure CSS Drawing Components */}
      {balloons.map((balloon) => (
        <BalloonWrapComponent
          id={balloon.key}
          key={balloon.key}
          value={balloon.key}
          translateX={balloon.translateX}
          translateY={balloon.translateY}
          scale={balloon.scale}
          rotate={balloon.rotate}
          handleDelete={handleDelete}>
          {balloon.type === 'bear' && <BearComponent line={balloon.line} />}
          {balloon.type === 'flower' && <FlowerComponent line={balloon.line} />}
          {balloon.type === 'heart' && <HeartComponent />}
          {balloon.type === 'normal' && (
            <NormalComponent
              backgroundColor={balloon.color}
              line={balloon.line}
            />
          )}
        </BalloonWrapComponent>
      ))}

      {/* Canvas Components */}
      {/* {lines.length !== 0 &&
        lines.map((balloon) => (
          <div
            key={balloon.key}
            className='canvas_wrap balloon_animation'>
            <CanvasComponent
              bottom={balloon.bottom}
              right={balloon.right}
              left={balloon.left}
            />
          </div>
        ))} */}

      {/* Lottie Components */}
      <RainbowCat />
      <Rainbow />
    </main>
  );
}
