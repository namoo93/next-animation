'use client'
import Image from 'next/image'
import cloudsUrl from '../public/clouds.svg?url'
import HouseSvgComponent from './House'
import { useState } from 'react'
import BearComponent from './Bear'

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState('skyblue');
  const [] = useState('');

  const isOnClickHouse = () => { 
    console.log('House click!');

  }
  
  return (
    <main style={{ backgroundColor: { backgroundColor } }} className="main">
      {/* Svg Drawing */}
      <div className="svg_wrap">
        <Image className="cloud" src={cloudsUrl} alt="background clouds" />
      </div>
      <div className="svg_wrap house_wrap">
        <HouseSvgComponent isOnClickHouse={isOnClickHouse} fill={"#fff"} className="house" />
      </div>
      {/* Pure CSS Drawing */}
     <BearComponent />
    </main>
  )
}
