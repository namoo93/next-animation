'use client'
import House from '../public/house.svg'
export default function HouseSvgComponent({ fill,isOnClickHouse }) {
  
  return (
    <House onClick={isOnClickHouse} fill={fill} width={"372"} height={"312"} />
  )
}