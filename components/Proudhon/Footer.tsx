import React from 'react'
import Logo from './Logo'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import UpAnimation from './UpAnimation'
import { useIsomorphic } from '@/utils'
import gsap from 'gsap'

function Footer() {
    useIsomorphic(() => {
        const context = gsap.context(() => {
            gsap.from('#footer', {
                scrollTrigger: {
                    trigger: '#footerContainer',
                    start: 'top +=500'
                }, y: 20, opacity: 0, duration: 1, stagger: 0.2, ease: 'power4.out', delay: 0.8
            })
        })

        return () => context.revert()
    }, [])

    return (
        <footer className='w-full flex-center'>
            <section className='w-full lg:w-[1280px] mt-40 flex-between flex-col'>
                <section className='w-full h-[500px] rounded-none lg:rounded-xl overflow-hidden relative'>
                    <div className="w-full h-full absolute top-0 left-0 overflow-hidden z-0">
                        <video autoPlay loop muted className="w-full h-full object-cover">
                            <source src="/meeting.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className='w-full h-full bg-black/30 absolute top-0 left-0'></div>
                    <article className='w-full absolute bottom-12 flex-between flex-col lg:flex-row gap-2 lg:gap-6 px-6 lg:px-10'>
                        <UpAnimation delay={0.2} duration={1.5} observe>
                            <h1 className='text-white font-extrabold text-lg lg:text-4xl'>
                                Do you have a company and <br /> want to scale your product ?
                            </h1>
                        </UpAnimation>
                        <UpAnimation delay={0.4} duration={1.5} observe className='h-14 lg:h-20 flex-end'>
                            <button className='w-36 h-9 lg:w-52 lg:h-12 bg-white active:outline-none outline-none hover:bg-black hover:text-white text-black rounded-lg font-extrabold 
                            transition-all duration-300 text-xs lg:text-base'>
                                Schedule a Meeting
                            </button>
                        </UpAnimation>
                    </article>
                </section>
                <section id='footerContainer' className='w-full h-auto lg:h-[400px] flex justify-center items-end px-8'>
                    <div className='flex lg:justify-between justify-center items-start flex-col lg:flex-row pb-16 lg:pt-0 pt-10 gap-16'>
                        <article className='w-full lg:w-[30%] flex-center lg:flex-start flex-col gap-6'>
                            <div id='footer'>
                                <Logo black />
                            </div>
                            <p id='footer' className='text-gray-500 text-sm lg:text-start text-center'>
                                {`With a deep understanding of cutting-edge technologies, market trends, user behaviour, we craft digital products that are build to scale`}
                            </p>
                            <div className='flex-start gap-4 text-base lg:text-xl'>
                                <div id='footer' className='w-9 h-9 rounded-lg flex-center bg-sky-500 text-white '>
                                    <BsInstagram />
                                </div>
                                <div id='footer' className='w-9 h-9 rounded-lg flex-center bg-sky-500 text-white '>
                                    <BsLinkedin />
                                </div>
                                <div id='footer' className='w-9 h-9 rounded-lg flex-center bg-sky-500 text-white '>
                                    <BsTwitter />
                                </div>
                                <div id='footer' className='w-9 h-9 rounded-lg flex-center bg-sky-500 text-white '>
                                    <BsFacebook />
                                </div>
                            </div>
                        </article>
                        <article className='w-full lg:w-[50%] flex-center lg:flex-between lg:flex-row flex-col lg:gap-0 gap-10'>
                            <div className='flex-center lg:flex-start flex-col gap-6 text-gray-500 lg:text-sm text-base'>
                                <p id='footer' className='font-extrabold text-black text-base'>Services</p>
                                <p id='footer'>UI & UX Design</p>
                                <p id='footer'>3D Illustration</p>
                                <p id='footer'>2D Illustration</p>
                                <p id='footer'>Branding & Logo Design</p>
                            </div>
                            <div className='flex-center lg:flex-start flex-col gap-6 text-gray-500 lg:text-sm text-base'>
                                <p id='footer' className='font-extrabold text-black text-base'>Company</p>
                                <p id='footer'>Case Studies</p>
                                <p id='footer'>About</p>
                                <p id='footer'>Blog</p>
                                <p id='footer'>Career</p>
                            </div>
                            <div className='flex-center lg:flex-start flex-col gap-6 text-gray-500 lg:text-sm text-base'>
                                <p id='footer' className='font-extrabold text-black text-base'>About</p>
                                <p id='footer'>Inprint</p>
                                <p id='footer'>Terms & Conditions</p>
                                <p id='footer'>User Agreement</p>
                            </div>
                        </article>
                    </div>
                </section>
            </section>
        </footer>
    )
}

export default Footer