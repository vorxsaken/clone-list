import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import PersonWithSnacks from '../../assets/brando/person-with-snacks.jpg';
import meiji from '../../assets/brando/meiji.svg';
import cheetos from '../../assets/brando/Cheetos.png';
import nestle from '../../assets/brando/nestle.png';
import dunkin from '../../assets/brando/dunkin-donuts.svg';
import coca from '../../assets/brando/coca-cola.svg';
import subway from '../../assets/brando/subway.svg';
import kinder from '../../assets/brando/kinder.svg';
import oreo from '../../assets/brando/oreo.svg';
import discuss from '../../assets/brando/discuss.png';
import adding from '../../assets/brando/add.svg';
import release from '../../assets/brando/release.svg';
import pasted from '../../assets/brando/pasted.jpg';
import burger from '../../assets/brando/burger.jpg';
import egg from '../../assets/brando/egg.jpg';
import { RxArrowRight } from 'react-icons/rx';
import Card from '@/components/Brando/Card';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Navbar from '@/components/Brando/Navbar';
import Footer from '@/components/Brando/Footer';

type PricingUiType = React.ComponentProps<'div'> & { title: string, price: string, services: string[], gradient?: boolean }
function PricingCard({ title, price, services, gradient, ...props }: PricingUiType) {
    return (
        <article className={`w-[300px] h-[500px] flex-between flex-col border border-black ${gradient ? `bg-gradient-to-br from-yellow-200
        via-purple-200 to-sky-200` : 'bg-white'}`} {...props}>
            <h1 className='w-full p-6 border-b border-black text-2xl font-extrabold'>
                {title}
            </h1>
            <div className='w-full h-full p-6 flex-start flex-col gap-6'>
                <p className='text-2xl font-bold'>{price}</p>
                <div className='flex-start flex-col gap-2 font-extralight'>
                    {services.map(service => (
                        <div key={service} className='flex-center gap-2'>
                            <div className='w-[9px] h-[9px] rounded-full border border-black bg-white' />
                            <span>{service}</span>
                        </div>
                    ))}
                </div>

            </div>
            <div className='w-full h-24 border-t border-black flex justify-between items-center px-5 py-4 
            group cursor-pointer'>
                <span className='font-bold text-xl transition-all duration-300 group-hover:font-extrabold group-hover:scale-110'>Get Started</span>
                <RxArrowRight className='text-3xl transition-all duration-300 group-hover:scale-125' />
            </div>
        </article>
    )
}

function Brando() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const hwwTL = gsap.timeline({
            defaults: {
                duration: 2,
                ease: 'power4.out'
            },
            scrollTrigger: {
                trigger: '#hww',
                start: 'top center'
            },
        })
        const priceTL = gsap.timeline({
            defaults: {
                duration: 2,
                ease: 'power4.out'
            },
            scrollTrigger: {
                trigger: '#price',
                start: 'top center'
            },
        })
        gsap.set('#brand', { autoAlpha: 0, scale: 0.8, y: 30 });
        gsap.to('#brand', {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: '#brands',
                start: 'top center'
            }
        })

        hwwTL.fromTo('#hww-title', { opacity: 0, y: 20 }, { opacity: 1, y: 0 });
        hwwTL.fromTo('#hww-card', { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2 }, '>-1.8');

        priceTL.fromTo('#price-title', { opacity: 0, y: 20 }, { opacity: 1, y: 0 });
        priceTL.fromTo('#price-card', { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2 }, '>-1.6');

        const works = gsap.utils.toArray('#work');
        gsap.fromTo('#work-title', { opacity: 0, y: 20 }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: '#work-title',
                start: 'top +=450'
            }
        })

        works.forEach((work: any) => gsap.fromTo(work, {
            opacity: 0,
            y: 100,
            scale: 0.5
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: work,
                start: 'top +=450',
            }
        }))

    }, [])

    return (
        <Layout
            title='Brando'
            content='brando - branding agency mockups, mockups design to code'
            navBar={<Navbar />}
            footer={<Footer />}
        >
            <section className='w-full flex-start flex-col gap-0'>
                <div className='w-full h-screen md:h-[800px] relative flex-start'>
                    <div className='absolute top-0 w-full h-full overflow-hidden'>
                        <Image src={PersonWithSnacks} fill className='object-cover object-right-bottom' alt='' />
                    </div>
                    <Card
                        className='w-[80vw] md:w-[480px] h-[350px] md:h-[500px] absolute left-6 md:left-36 top-[35%] md:top-20'
                        header='Branding'
                        title='Add value to your brand to make your product closer to your consumers'
                        subtitle='We are ready to help you crafting package branding for your product according to your target
                    market. We helped more than 1000 product in united states'
                    />
                </div>
                <div className='w-full h-auto md:h-[400px] bg-black flex-center px-8 py-14 md:px-0 md:py-0'>
                    <article id='brands' className='w-full md:w-[1200px] h-[300] flex-between gap-14 md:gap-16 flex-wrap flex-col'>
                        <div className='w-full flex-center md:flex-between md:flex-nowrap flex-wrap md:gap-0 gap-11'>
                            <div id='brand' className='w-28 md:w-40 h-20 relative overflow-hidden gray-filter'>
                                <Image src={meiji} fill alt='meiji' className='object-contain ' />
                            </div>
                            <div id='brand' className='w-28 md:w-40 h-20 relative overflow-hidden gray-filter'>
                                <Image src={cheetos} fill alt='meiji' className='object-cover brightness-50' />
                            </div>
                            <div id='brand' className='w-28 md:w-40 h-20 relative overflow-hidden gray-filter'>
                                <Image src={nestle} fill alt='meiji' className='object-cover brightness-50' />
                            </div>
                            <div id='brand' className='w-28 md:w-40 h-20 relative overflow-hidden grayscale brightness-[0.4]'>
                                <Image src={dunkin} fill alt='meiji' className='object-contain invert ' />
                            </div>
                        </div>
                        <div className='w-full flex-center md:flex-between flex-wrap md:flex-nowrap md:gap-0 gap-11'>
                            <div id='brand' className='w-28 md:w-40 h-20 relative overflow-hidden grayscale'>
                                <Image src={coca} fill alt='meiji' className='object-contain -hue-rotate-180' />
                            </div>
                            <div id='brand' className='w-28 md:w-40 h-20 relative overflow-hidden grayscale brightness-[0.4]'>
                                <Image src={subway} fill alt='meiji' className='object-contain' />
                            </div>
                            <div id='brand' className='w-28 md:w-40 h-20 relative overflow-hidden grayscale brightness-[0.3]'>
                                <Image src={kinder} fill alt='meiji' className='object-contain' />
                            </div>
                            <div id='brand' className='w-28 md:w-40 h-20 relative overflow-hidden grayscale brightness-[0.3]'>
                                <Image src={oreo} fill alt='meiji' className='object-contain' />
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <section className='w-full md:w-[1280px] flex flex-col justify-center gap-40'>
                <section id='hww' className='w-full flex-center flex-col gap-14'>
                    <h1 id='hww-title' className='text-4xl md:text-5xl font-bold'>How we work</h1>
                    <div className='w-full h-auto md:h-[500px] flex md:flex-row flex-col justify-between items-end gap-20 md:gap-4 px-8 md:px-20'>
                        <div id='hww-card' className='w-full md:w-[450px] h-[400px] bg-gray-100 flex-center flex-col gap-8 relative'>
                            <div className='w-full md:w-[400px] h-[300px] md:h-[400px] absolute top-0 md:-top-32 overflow-hidden'>
                                <Image src={discuss} className='object-cover' fill alt='discuss' />
                            </div>
                            <p className='text-2xl md:text-3xl font-bold absolute bottom-6 md:bottom-16'>
                                Discuss with us
                            </p>
                        </div>
                        <div id='hww-card' className='w-full md:w-[450px] h-[400px] bg-gray-100 flex-center flex-col gap-8 relative'>
                            <div className='w-full md:w-[400px] h-[250px] md:h-[320px] absolute top-0 md:-top-20 overflow-hidden'>
                                <Image src={adding} className='object-contain' fill alt='discuss' />
                            </div>
                            <p className='text-2xl md:text-3xl font-bold absolute bottom-6 md:bottom-16'>
                                Adding value & Design
                            </p>
                        </div>
                        <div id='hww-card' className='w-full md:w-[450px] h-[400px] bg-gray-100 flex-center flex-col gap-8 relative'>
                            <div className='w-[75%] md:w-[350px] h-[300px] md:h-[400px] absolute top-0 md:-top-32 overflow-hidden'>
                                <Image src={release} className='object-contain' fill alt='discuss' />
                            </div>
                            <p className='text-2xl md:text-3xl font-bold absolute bottom-6 md:bottom-16'>
                                Release the Brand
                            </p>
                        </div>
                    </div>
                </section>
                <section className='w-full flex-center flex-col gap-20'>
                    <h1 id='work-title' className='text-4xl md:text-5xl font-bold'>Our Work</h1>
                    <div id='work' className='w-full flex-center flex-center gap-4 px-2 md:px-20'>
                        <div className='w-full h-[450px] flex-center relative'>
                            <div className='w-[70%] md:w-[60%] h-full absolute left-4 md:left-[10%] overflow-hidden'>
                                <Image src={pasted} alt='pasted' fill className='object-cover' />
                            </div>
                            <Card
                                title='Hip Hips! Biscuit'
                                subtitle='is a speciality coffee brand, which means that it is a gourmet coffee. Each of the steps in the
                            production process has been considered and chosen to ensure its quality.'
                                className='w-[50%] md:w-[400px] h-[40vh] md:h-[300px] absolute right-4 md:right-[10%]'
                            />
                        </div>
                    </div>
                    <div id='work' className='w-full flex-center flex-center gap-4 px-2 md:px-20'>
                        <div className='w-full h-[450px] flex-center relative'>
                            <Card
                                title='Shawbur Burger'
                                subtitle='is a modern eater that offer hight quality burger, shawarma sandwich, mainly targeting the young generations
                            and this should reflect on the persona and the visual identity.'
                                className='w-[50%] md:w-[400px] h-[40vh] md:h-[300px] absolute left-8 md:left-[10%] z-20'
                            />
                            <div className='w-[70%] md:w-[60%] h-full absolute right-4 md:right-[10%] overflow-hidden'>
                                <Image src={burger} alt='pasted' fill className='object-cover' />
                            </div>
                        </div>
                    </div>
                    <div id='work' className='w-full flex-center flex-center gap-4 px-4 md:px-20'>
                        <div className='w-full h-[450px] flex-center relative'>
                            <div className='w-[70%] md:w-[60%] h-full absolute left-4 md:left-[10%] overflow-hidden'>
                                <Image src={egg} alt='pasted' fill className='object-cover' />
                            </div>
                            <Card
                                title='Eggs Plosion'
                                subtitle='is a Food Truck located in saudi arabia, this mobile eatery features unique offering, from egg gourmet sandwich
                            and burgers to refreshing drinks and speciality coffee blends'
                                className='w-[50%] md:w-[400px] h-[40vh] md:h-[300px] absolute right-4 md:right-[10%]'
                            />
                        </div>
                    </div>
                </section>
                <section id='price' className='w-full flex-center flex-col gap-14'>
                    <h1 id='price-title' className='text-4xl md:text-5xl font-bold'>
                        Pricing
                    </h1>
                    <div className='w-full flex-center flex-col md:flex-row gap-8'>
                        <PricingCard
                            id='price-card'
                            title='Regular Work'
                            price='3,600/month'
                            services={['3 Branding design', '5 available revision',
                                'Editable PSD file', '10 Days guarantee']}
                        />
                        <PricingCard
                            id='price-card'
                            title='Special Work'
                            price='6,000/month'
                            services={['5 Branding design', '10 available revision',
                                'Editable PSD file', 'Custom package material', '20 Days guarantee']}
                            gradient
                        />
                        <PricingCard
                            id='price-card'
                            title='Rush Work'
                            price='10,000/month'
                            services={['10 Branding design', 'Unlimited revision',
                                'Editable PSD file', 'Custom package material', 'Custom brand illustration', '30 Days guarantee']}
                        />
                    </div>
                </section>
            </section>
        </Layout>
    )
}

export default Brando