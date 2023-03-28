import Card from "./Card"
import Image from "next/image"
import Flower from '../../assets/Butusic/Flower.png';
import { gsap } from "gsap";
import { useEffect } from 'react'

export default function CircleText({ background }: { background: string }) {
  const tl = gsap.timeline({ paused: true });

  useEffect(() => {
    tl.add(gsap.to('#circlesvg', {
      rotate: 360,
      repeat: -1,
      duration: 6,
      ease: 'none'
    }))
  }, [])

  const playRotate = () => {
    tl.play()
  }

  const pauseRotate = () => {
    tl.pause();
  }

  return (
    <Card background={background}>
      <div onMouseEnter={() => playRotate()} onMouseLeave={() => pauseRotate()} className="flex justify-center items-center relative">
        <Image src={Flower} alt='flower' width={100} height={100} className='absolute top-1/2 left-1/2 transform -translate-x-12 
          translate-y-16' />
        <svg id="circlesvg" width={220} height={230} viewBox="0 0 200 200" className="absolute top-0">
          <path id="circle" d="M100 0 A1 1 0 0 0 100 200 A1 1 0 0 0 100 0 Z" fill="none" stroke="none" strokeWidth={2}>
          </path>
          <text fill="white" textLength={620} lengthAdjust="spacing" spacing='auto'>
            <textPath href="#circle">
              More Cases • More Cases • More Cases • More Cases • More Cases •
            </textPath>
          </text>
        </svg>
      </div>
    </Card>
  )
}
