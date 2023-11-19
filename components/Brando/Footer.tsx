import React from 'react'
import { BsInstagram, BsLinkedin, BsTelegram, BsTwitter } from 'react-icons/bs'
import { RxArrowRight } from 'react-icons/rx'
import Card from './Card'
import call from '../../assets/brando/call.svg'

export default function Footer() {
    return (
        <footer className='w-full h-[140vh] md:h-[120vh] flex-end flex-col relative'>
            <div className='w-full h-[115vh] md:h-[70vh] bg-white flex-end px-2 md:px-32 relative'>
                <div className='absolute -top-44 left-[7%] md:left-[15%]'>
                    <Card
                        title='Lets Branding your Product'
                        subtitle='Add the value to your brand to scale your bussiness now'
                        className='w-[90vw] md:w-[70vw] h-[24vh] md:h-[40vh] absolute z-20'
                        row
                    />
                    <Card
                        title='Lets Branding your Product'
                        subtitle='Add the value to your brand to scale your bussiness now'
                        className='w-[90vw] md:w-[70vw] h-[24vh] md:h-[40vh] absolute z-40'
                        row
                        coverImage={call}
                        noBackground={false}
                    />
                </div>
                <div className='w-full h-full bg-transparent absolute left-0 z-30' style={{ backdropFilter: 'invert(100%)' }}></div>
                <div className='w-full flex-start md:flex-between flex-col text-white gap-16 z-50'>
                    <div className='w-full flex-center gap-10 md:gap-0 md:flex-between md:flex-row flex-col'>
                        <article className='flex-center md:flex-start flex-col gap-4'>
                            <h1 className='text-2xl font-extrabold'>Brando</h1>
                            <p className='text-sm text-center md:text-start'>
                                108 Market St. <br />
                                30281 Long Beach <br />
                                California Sutto 120
                            </p>
                        </article>
                        <article className='flex-center md:flex-start flex-col gap-4 text-sm'>
                            <h1 className='text-2xl font-extrabold'>Company</h1>
                            <p>About</p>
                            <p>Contact Us</p>
                            <p>Support</p>
                            <p>Careers</p>
                        </article>
                        <article className='flex-center md:flex-start flex-col gap-4 text-sm'>
                            <p className='text-2xl font-extrabold'>Quick Link</p>
                            <p>Share Locations</p>
                            <p>Order Tracking</p>
                            <p>Size Guide</p>
                            <p>FAQs</p>
                        </article>
                        <div className='w-full md:w-80 h-44 md:px-0 px-8 flex-center md:flex-between flex-col gap-8 md:gap-4'>
                            <div className='w-full flex-center md:flex-start gap-4 flex-col'>
                                <span className='text-2xl font-bold'>Subscribe for connect</span>
                                <div className='w-full flex-start gap-0'>
                                    <input type="text" placeholder='add your email' className='w-[80%] h-12 border-y-2 border-l-2 border-white 
                                    placeholder:text-white font-bold bg-black px-4 active:outline-none focus:outline-none outline-none' />
                                    <button className='w-[20%] h-12 border-2 border-white bg-black flex-center group hover:bg-white 
                                    transition-all duration-200'>
                                        <RxArrowRight className='text-2xl text-white group-hover:text-black transition-all duration-200' />
                                    </button>
                                </div>
                            </div>
                            <div className='flex-start gap-8 text-xl text-white'>
                                <BsInstagram />
                                <BsTelegram />
                                <BsTwitter />
                                <BsLinkedin />
                            </div>
                        </div>
                    </div>
                    <div className='flex-center w-full border-t-2 border-white py-6 text-xs'>
                        Copyright Odama Studio 2022 design by millarta code by alfahmi
                    </div>
                </div>
            </div>
        </footer>
    )
}
