import Layout from "@/components/Layout"
import Navbar from "@/components/Proudhon/Navbar"
import Footer from "@/components/Proudhon/Footer"
import { Ubuntu } from 'next/font/google'
import Image from "next/image";
import { useEffect, useState } from "react";
import city from '../../assets/proudhon/city.jpg';
import city1 from '../../assets/proudhon/city 1.webp'
import city2 from '../../assets/proudhon/city 2.jpg';
import city3 from '../../assets/proudhon/city 3.webp';
import city4 from '../../assets/proudhon/city 4.jpg';
import arrow from '../../assets/proudhon/arrow.png';
import grid from '../../assets/proudhon/grid.png';
import lenovo from '../../assets/proudhon/lenovo-2.svg'
import honda from '../../assets/proudhon/honda-9.svg'
import bosch from '../../assets/proudhon/bosch-938.svg'
import sony from '../../assets/proudhon/sony-2.svg'
import philips from '../../assets/proudhon/philips.svg'
import pirelli from '../../assets/proudhon/pirelli.webp'
import yamaha from '../../assets/proudhon/yamaha-12.svg'
import binance from '../../assets/proudhon/binance.svg'
import gsap from "gsap";
import MovingInfi from "@/components/Proudhon/MovingInfi";
import Picture from "@/components/Picture";
import UpAnimation from "@/components/Proudhon/UpAnimation";
import { useIsomorphic } from "@/utils";
const font = Ubuntu({ weight: '700', subsets: ['latin'] });
const youtubedl = require('ytdl-core');

function Proudhon({videoUrl}: {videoUrl: any}) {  
    const expertises = [
        {
            image: city1,
            title: 'Branding & Logo Design',
            subtitle: 'Building visuals that cann increase awareness for your brand to be easily recognized by your users'
        },
        {
            image: city2,
            title: 'UI & UX Design',
            subtitle: 'Developing applications that are not only good in terms of aesthetics but also good in terms of functionality'
        },
        {
            image: city3,
            title: '3D Design',
            subtitle: 'Createing astonishing 3d assets that will make your product better in terms of aesthetics'
        },
        {
            image: city4,
            title: '2D Design',
            subtitle: 'Creation of 2d Design that can increase value of your products and make it easily recognizable'
        }
    ];

    const latestWorks = [
        {
            image: city1,
            title: 'UNILUS Constructions',
            subtitle: 'Company profile, Website'
        },
        {
            image: city2,
            title: 'Oars Universe NFT',
            subtitle: 'NFT, 2D Illustration'
        },
        {
            image: city3,
            title: 'Coolander App',
            subtitle: 'Productivity, Branding'
        }
    ]

    useIsomorphic(() => {
        const context = gsap.context(() => {
            const revealTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#aboutProudhon',
                    start: 'top +=500'
                },
            });

            const expertTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#expertCards',
                    start: 'top +=500'
                },
            });

            const latestWorkTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#latestWorks',
                    start: 'top +=500'
                }
            })
            revealTl.to('#revealBg', { xPercent: 100, duration: 0.6, ease: 'none', delay: 0.4 });
            revealTl.to('#revealBg2', { xPercent: 100, duration: 0.6, ease: 'none' }, '>');
            revealTl.to('#revealBg3', { xPercent: 100, duration: 0.6, ease: 'none' }, '>');
            revealTl.to('#revealBg4', { xPercent: 100, duration: 0.6, ease: 'none' }, '>');

            expertTl.from('#expertCard', { height: '0rem', duration: 1, stagger: 0.3, ease: 'power4.out', delay: 1 })

            latestWorkTl.from('#latestWorkCard', { opacity: 0, duration: 1, ease: 'power4.out', stagger: 0.3, delay: 1 });
            latestWorkTl.from('#latestWorkImage', { height: '17rem', duration: 1, ease: 'power4.out', stagger: 0.3 }, '<')

        })

        return () => context.revert();
    }, [])

    return (
        <Layout title="Proudhon" content="Proudhon - Digital Agency Landing Page" footer={<Footer videoUrl={videoUrl} />}>
            <section className="w-full lg:w-[1280px] pt-0 lg:pt-4 flex-center lg:flex-start flex-col gap-14 lg:gap-28 ">
                <section className="w-full h-screen rounded-none lg:rounded-xl bg-yellow-600 flex-start flex-col px-4 lg:px-12 relative overflow-hidden">
                    <div className="w-full h-full absolute top-0 left-0 overflow-hidden z-0 bg-purple-200">
                        <video autoPlay loop muted className="w-full h-full object-cover">
                            <source src={videoUrl} type="video/mp4" />
                        </video>
                    </div>
                    <div className="w-full h-full absolute top-0 left-0 bg-black/50 z-10" />
                    <Navbar />
                    <article className="w-full h-full flex-center flex-col gap-2 lg:gap-4 z-20">
                        <UpAnimation delay={0.2} className={`w-full lg:w-[1000px] h-20 lg:h-[150px] text-2xl lg:text-7xl text-white z-30 font-extrabold text-center relative flex-center ${font.className}`}>
                            <h1 className="absolute">
                                Build
                                <span className="lg:mx-3 mx-2 relative">
                                    <span className="relative top-0 left-0 z-10">Scalable Product</span>
                                    <div className="absolute w-full h-6 lg:h-16 top-0 lg:top-2 left-0 overflow-hidden -rotate-3 z-0">
                                        <div id="brush" className="w-full h-full bg-sky-600 absolute -left-[100%] animate-scale-x">
                                        </div>
                                    </div>
                                </span>
                                That <br /> Makes Everyone Happy
                            </h1>
                        </UpAnimation>
                        <UpAnimation delay={0.3}>
                            <p className="text-center text-white text-xs lg:text-base lg:px-0 px-12">
                                Our core competency lies in creating products that can grow and expand <br />
                                alongside businesses. enabling them to soar to greater heights.
                            </p>
                        </UpAnimation>
                    </article>
                </section>
                <section className="w-full flex-start flex-col gap-5 lg:gap-10 text-base lg:text-[3.2rem] leading-[1] lg:leading-[0.8] text-slate-800 px-4 lg:px-12">
                    <UpAnimation delay={0.5} duration={1} observe>
                        <h1 className="text-sm text-sky-500">ABOUT PROUDHON</h1>
                    </UpAnimation>
                    <div id="aboutProudhon" className="flex-start gap-4 lg:gap-5 flex-col font-extrabold">
                        <div className="flex h-4 lg:h-14 gap-2 relative overflow-x-hidden overflow-y-clip">
                            <div className="w-[5vw] h-4 lg:w-28 lg:h-11 bg-gray-300 hidden lg:flex-center overflow-hidden relative rounded-3xl">
                                <Image src={city} fill className="object-cover" alt="" />
                            </div>
                            <p>We believe that scalability is the key to </p>
                            <div className="w-[110vw] h-full absolute -left-[10%] reveal-bg" id="revealBg" />
                        </div>
                        <div className="flex h-4 lg:h-14 relative overflow-x-hidden overflow-y-clip">
                            <p>unlocking unlimited potential. wheather youre</p>
                            <div className="w-[110vw] h-full absolute -left-[10%] reveal-bg" id="revealBg2" />
                        </div>
                        <div className="h-4 lg:h-14 flex gap-2 lg:gap-4 relative overflow-x-hidden overflow-y-clip">
                            <p>a startup </p>
                            <div className="w-[5vw] h-4 lg:w-24 lg:h-11 bg-gray-800 hidden lg:flex-center overflow-hidden relative rounded-3xl flex-center">
                                <div className="w-2 h-2 lg:w-4 lg:h-4 border border-slate-700 rounded-full absolute" />
                                <div className="w-5 h-5 lg:w-10 lg:h-10 border border-slate-700 rounded-full absolute" />
                                <div className="w-8 h-8 lg:w-16 lg:h-16 border border-slate-700 rounded-full absolute" />
                                <div className="w-[43px] h-[43px] lg:w-[86px] lg:h-[86px] border border-slate-700 rounded-full absolute" />
                                <Image src={arrow} fill className="object-contain" alt="" />
                            </div>
                            <p>aiming to disrupt the market or</p>
                            <div className="w-[110vw] h-full absolute -left-[10%] reveal-bg" id="revealBg3" />
                        </div>
                        <div className="h-4 lg:h-14 flex gap-4 relative overflow-x-hidden overflow-y-clip">
                            <p>an established enterprise </p>
                            <div className="w-[5vw] h-4 lg:w-24 lg:h-11 bg-gray-800 hidden lg:flex-center overflow-hidden relative rounded-3xl flex-center sepia">
                                <Image src={city} fill className="object-cover" alt="" />
                            </div>
                            <div className="w-[110vw] h-full absolute -left-[15%] reveal-bg" id="revealBg4" />
                        </div>
                    </div>
                </section>
                <section className="w-full bg-gray-900 px-6 lg:px-12 py-6 rounded-xl relative overflow-hidden">
                    <div className="w-full h-full absolute top-0 left-0 invert opacity-[0.04] rotate-3">
                        <Image src={grid} alt="" fill className="object-cover" />
                    </div>
                    <div className="w-full top-0 flex-start flex-col gap-10">
                        <UpAnimation delay={0.2} duration={1} y={10} observe>
                            <h1 className="text-sm text-sky-500">SERVICES</h1>
                        </UpAnimation>
                        <div className={`w-full flex flex-col lg:flex-row gap-4 justify-between ${font.className}$`}>
                            <UpAnimation className="w-full lg:w-[40%]" delay={0.3} duration={1} y={10} observe>
                                <p className="text-white font-extrabold text-2xl lg:text-5xl">
                                    Our Fundamentals expertise
                                </p>
                            </UpAnimation>
                            <UpAnimation className="w-full lg:w-[40%]" delay={0.5} duration={1} y={10} observe>
                                <p className="text-white text-xs lg:text-lg">
                                    {`with a deep understanding of cutting edge technologies. market trends, and user behavior. we craft digital products that are built 
                                to scale`}
                                </p>
                            </UpAnimation>
                        </div>
                        <div id="expertCards" className="w-full flex min-h-[700px] flex-col lg:flex-row justify-between items-start flex-wrap gap-5">
                            {expertises.map(expert => (
                                <div id="expertCard" key={expert.title} className="w-full lg:w-[49%] h-96 bg-red-300 rounded-xl relative overflow-hidden">
                                    <Image src={expert.image} alt="" fill className="object-cover" />
                                    <div className="w-full h-full bg-gradient-to-b from-transparent to-black/60 absolute top-0" />
                                    <article className="absolute flex-start flex-col gap-2 bottom-10 px-8 text-white">
                                        <h1 className="font-extrabold text-2xl lg:text-4xl">{expert.title}</h1>
                                        <p className="lg:text-base text-xs">{expert.subtitle}</p>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full bg-white px-6 lg:px-12 py-6 rounded-xl relative overflow-hidden">
                    <div className="w-full top-0 flex-start flex-col gap-10">
                        <UpAnimation delay={0.2} duration={2} y={15} observe>
                            <h1 className="text-sm text-sky-500">SERVICES</h1>
                        </UpAnimation>
                        <div className={`w-full flex flex-col lg:flex-row justify-between gap-4 ${font.className}$`}>
                            <UpAnimation className="w-full lg:w-[40%]" delay={0.4} duration={1} y={15} observe>
                                <p className="text-black font-extrabold text-2xl lg:text-5xl">
                                    Presenting Our Latest Work
                                </p>
                            </UpAnimation>
                            <UpAnimation className="w-full lg:w-[40%]" delay={0.6} duration={1} y={15} observe>
                                <p className="text-black text-xs lg:text-lg">
                                    {`Our team of talented professionals excels at crafting engaging presentations. that effectively convey transformations
                                    experienced by our clients`}
                                </p>
                            </UpAnimation>
                        </div>
                        <div id="latestWorks" className="w-full flex-start flex-col lg:flex-row lg:flex-between flex-nowrap lg:flex-wrap gap-10 lg:gap-5">
                            {
                                latestWorks.map(work => (
                                    <div id="latestWorkCard" key={work.title} className="w-full lg:w-auto flex-start flex-col gap-5">
                                        <div id="latestWorkImage" className="w-full lg:w-[360px] h-80 bg-red-300 rounded-lg relative overflow-hidden">
                                            <Image src={work.image} alt="" fill className="object-cover" />
                                        </div>
                                        <article className="flex-start flex-col gap-2">
                                            <h1 className="text-black font-extrabold text-3xl">{work.title}</h1>
                                            <p className="text-gray-500">{work.subtitle}</p>
                                        </article>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className="w-full flex-center flex-col gap-10 lg:gap-20 overflow-x-hidden">
                    <div className="flex-center flex-col gap-6">
                        <UpAnimation delay={0.2} duration={1} y={15} observe>
                            <h1 className="text-sm text-sky-500 font-extrabold">CLIENTS</h1>
                        </UpAnimation>
                        <UpAnimation delay={0.4} duration={1} y={15} observe>
                            <p className="text-black font-extrabold text-2xl lg:text-5xl text-center">
                                Look Closer With Our <br /> Beloved Clients
                            </p>
                        </UpAnimation>
                    </div>
                    <div className="w-full flex-center flex-col gap-0 lg:gap-8">
                        <MovingInfi speed={6} className="gap-10 lg:gap-28 opacity-40">
                            <div className="w-full flex-start gap-10 lg:gap-28 ">
                                <Picture src={honda} alt="honda" className="w-[20vw] h-8 lg:w-[266px] lg:h-12" />
                                <Picture src={bosch} alt="bosch" className="w-[20vw] h-8 lg:w-[266px] lg:h-12 " />
                                <Picture src={sony} alt="sony" className="w-[20vw] h-8 lg:w-[266px] lg:h-12" />
                                <Picture src={lenovo} alt="lenovo" className="w-[20vw] h-8 lg:w-[266px] lg:h-12 flex-center brightness-[0.9] saturate-0 rounded-none" contain />
                                <Picture src={binance} alt="binance" className="w-[20vw] h-8 lg:w-[266px] lg:h-12 brightness-0 saturate-0" contain />
                                <Picture src={philips} alt="philips" className="w-[20vw] h-8 lg:w-[266px] lg:h-12 brightness-0 saturate-0" contain />
                                <Picture src={pirelli} alt="pirelli" className="w-[20vw] h-8 lg:w-[266px] lg:h-12 brightness-[0.9] saturate-0" contain />
                                <Picture src={yamaha} alt="yamaha" className="w-[20vw] h-8 lg:w-[266px] lg:h-12 brightness-0 saturate-0" contain />
                            </div>
                        </MovingInfi>
                        <MovingInfi speed={6} className="gap-10 lg:gap-28 opacity-40" revert>
                            <div className="w-full flex-start gap-10 lg:gap-28 ">
                                <Picture src={honda} alt="honda" className="w-[20vw] h-8 lg:w-[266px] lg:h-12" />
                                <Picture src={bosch} alt="bosch" className="w-[20vw] h-8 lg:w-[266px] lg:h-12 " />
                                <Picture src={sony} alt="sony" className="w-[20vw] h-8 lg:w-[266px] lg:h-12" />
                                <Picture src={lenovo} alt="lenovo" className="w-[20vw] h-8 lg:w-[266px] lg:h-12 flex-center brightness-[0.9] saturate-0 rounded-none" contain />
                                <Picture src={binance} alt="binance" className="w-[20vw] h-8 lg:w-[266px] lg:h-12 brightness-0 saturate-0" contain />
                                <Picture src={philips} alt="philips" className="w-[20vw] h-8 lg:w-[266px] lg:h-12 brightness-0 saturate-0" contain />
                                <Picture src={pirelli} alt="pirelli" className="w-[20vw] h-8 lg:w-[266px] lg:h-12 brightness-[0.9] saturate-0" contain />
                                <Picture src={yamaha} alt="yamaha" className="w-[20vw] h-8 lg:w-[266px] lg:h-12 brightness-0 saturate-0" contain />
                            </div>
                        </MovingInfi>
                    </div>
                </section>
            </section>
        </Layout>
    )
}

export default Proudhon

export async function getServerSideProps() {
    const url = 'https://www.youtube.com/watch?v=XTZlknVBHeI';
    const urlInfo = await youtubedl.getInfo(url);

    return {
        props: {
            videoUrl: urlInfo.player_response.streamingData.adaptiveFormats[6].url
        }
    }
}