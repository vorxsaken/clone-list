import React from 'react'
import Navbar from '@/components/Fitness/Navbar'
import Image from 'next/image'
import Runman from '../../assets/Fitness/runman.png';
import { Bungee } from 'next/font/google'
import Button from '@/components/Fitness/Button';
const Alfa = Bungee({ weight: '400', subsets: ['latin'] })

function Fitness() {
    return (
        <div className='w-screen h-screen bg-brown-600'>
            <Navbar />
            <div className='w-full h-full'>
                <div className='w-full h-full relative z-10'>
                    <div className='w-[750px] h-full flex flex-col gap-8 justify-center items-start absolute left-72'>
                        <div className={`text-7xl font-extrabold text-white z-20 ${Alfa.className}`}>
                            GET FIT, STAY HEALTHY&nbsp;
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500'>
                                FEEL<br />
                            </span>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500'>
                                GREAT
                            </span>
                        </div>
                        <div className='text-white'>
                            Welcome to our fitness community where you can achieve your goals with <br /> our world-class programs, trainers,
                            and facilities. 
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Button medium={true}>Join Now</Button>
                            <Button fill={false} medium={true}>Our Services</Button>
                        </div>
                    </div>
                    <div className='w-1/3 h-full absolute right-60'>
                        <Image src={Runman} alt="Running man" className='w-[500px] h-[600px] absolute top-20' />
                    </div>
                </div>
                <div className='absolute right-60 top-52 w-[400px] h-[400px] bg-yellow-600 rounded-full blur-[200px] z-0'>
                </div>
            </div>
        </div>
    )
}

export default Fitness