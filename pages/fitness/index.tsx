import React from 'react'
import Navbar from '@/components/Fitness/Navbar'
import Image from 'next/image'
import Runman from '../../assets/Fitness/runman.png';
import Button from '@/components/Fitness/Button';
import Head from 'next/head';

function Fitness() {
    return (
        <>
            <header>
                <Head>
                    <title>Fitness | Mock Ups</title>
                </Head>
                <Navbar />
            </header>
            <main>
                <div className='w-full h-screen md:h-[140vh] mt-16'>
                    <div className='w-full h-full flex justify-center items-start bg-brown-600'>
                        <div className='w-[85%] h-auto py-10 mt-16 flex-start flex-col gap-8 z-20 rounded-xl md:w-[650px] md:justify-center md:items-start
                        relative md:absolute md:left-72 '>
                            <span className='text-5xl font-bungee md:text-7xl md:font-extrabold text-white'>
                                {`GET FIT, STAY HEALTHY `}
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500'>
                                    FEEl GREAT
                                </span>
                            </span>
                            <span className='text-sm md:text-lg text-white'>
                                {`Welcome to our fitness community where you can achieve your goals with 
                                our world-class programs, trainers, and facilities.`}
                            </span>
                            <div className='flex flex-row gap-4'>
                                <Button>Join Now</Button>
                                <Button fill={false}>Our Services</Button>
                            </div>
                        </div>
                        <div className='w-full md:w-[40%] h-full md:h-[120vh] absolute opacity-60 md:opacity-100 md:right-48 md:top-10 md:z-10'>
                            <Image src={Runman} alt="Running man" fill className='md:w-[500px] md:h-[600px] md:object-none object-cover' />
                        </div>
                        <div className='absolute top-[23%] w-[255px] h-[255px] bg-yellow-600 rounded-full blur-[200px] z-0 md:right-60 md:top-52 md:w-[400px]
                        md:h-[400px]'>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Fitness