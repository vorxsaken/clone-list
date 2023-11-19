import Navbar from "@/components/Chaincast/Navbar";
import Image from "next/image";
import blackDude from '../../assets/chaincast/black_dude-transformed.png';
import omenxiii from '../../assets/chaincast/omenxiii.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsFlower1, BsPlayFill } from "react-icons/bs";
import { MdWaves } from "react-icons/md";
import { cn } from "@/utils";
import { ReactNode } from "react";
import ball from '../../assets/chaincast/ball.png';
import Head from "next/head";

type ButtonType = React.ComponentProps<'button'> & {
    children?: ReactNode,
    className?: string
}

function Grid({ className = '', lineClassname = 'bg-slate-400' }: { className?: string, lineClassname?: string }) {
    return (
        <div className={`w-[300px] h-[340px] absolute rotate-x-30 ${className}`}>
            <div className="absolute top-0 w-full h-full flex-col flex-between">
                {
                    [...Array(8)].map((i, index) => (
                        <div key={index} className={`w-full h-[0.7px] ${lineClassname}`}>
                        </div>
                    ))
                }
            </div>
            <div className="absolute top-0 w-full h-full flex flex-between">
                {
                    [...Array(8)].map((i, index) => (
                        <div key={index} className={`w-[0.7px] h-full ${lineClassname}`}>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


function Button({ className, children, ...props }: ButtonType) {
    return (
        <button className={cn(
            'w-28 h-11 text-base rounded-lg flex-center bg-black text-white font-semibold hover:bg-white hover:text-black transition-all duration-200',
            className)}
            {...props}
        >
            {children}
        </button>
    )
}

function Chaincast() {
    const overlay = (
        <div
            className="flex-center group-hover:bg-black/30 absolute top-0 w-full h-full bg-black/0 transition-all 
            duration-300 ease-in-out opacity-0 group-hover:opacity-100 z-[99]"
        >
            <Button>
                Link
            </Button>
        </div>
    )
    return (
        <>
            <Head>
                <title>Chaincast | Mock Ups</title>
            </Head>
            <header>
                <nav className="flex-center">
                    <Navbar />
                </nav>
            </header>
            <main className="w-full h-auto mt-16 md:mt-24 min-h-screen bg-[#F0E7E2] px-0 md:px-20 flex justify-start items-center flex-col">
                <div className="flex-start py-10 gap-6 md:gap-0 flex-wrap md:flex-nowrap">
                    <div className="w-full md:w-[700px] rounded-xl flex justify-center md:justify-end overflow-hidden relative">
                        <div className="w-[80vw] h-[90vw] md:w-[500px] md:h-[550px] bg-[#D5CCBD] rounded-xl flex-start flex-col relative overflow-hidden 
                        group cursor-pointer">
                            <div className="w-full flex-between py-5 p-7 text-[#696864] text-lg md:text-xl absolute">
                                <span>{`5:00 PM`}</span>
                                <span>{`Feb-17`}</span>
                            </div>
                            <div className="w-full absolute bottom-0 overflow-hidden rounded-xl">
                                <Image src={blackDude} alt='black dude' className="h-[35vh] md:h-[550px]" />
                            </div>
                            {overlay}
                        </div>
                    </div>
                    <div className="w-full h-auto md:w-[900px] md:h-[550px] rounded-xl flex justify-between flex-col gap-10 md:gap-4">
                        <div className="flex-center md:flex-start px-8 md:px-16 gap-4 py-2 md:py-0 md:gap-10 flex-wrap md:flex-nowrap">
                            <div className="w-[80vw] h-[90vw] md:w-[280px] md:h-[280px] bg-[#DFD0AF] rounded-xl flex-start flex-col gap-0 
                            overflow-hidden relative group">
                                <div className="flex-start flex-col gap-1 px-8 pt-8 z-20">
                                    <span className="font-light text-brown-500">Previous Guests</span>
                                    <span className="text-3xl text-brown-600">Omen XIII</span>
                                </div>
                                <div className="w-full h-full flex-center  relative perspective-3d z-0">
                                    <Grid />
                                </div>
                                <div className="absolute w-full h-full top-0 bg-gradient-to-b from-[#DFD0AF] from-30% via-[#DFD0AF] 
                                via-10% to-transparent to-60% z-0" />
                                <div className="w-full h-[25vh] md:h-40 absolute bottom-0 overflow-hidden z-30">
                                    <Image src={omenxiii} fill className="object-contain" alt="omenxiii" />
                                </div>
                                {overlay}
                            </div>
                            <div className="w-[80vw] h-[35vh] md:w-[280px] md:h-[280px] bg-[#D98DFA] flex-start flex-col gap-0 overflow-hidden 
                            rounded-xl relative group">
                                <div className="flex-start flex-col gap-1 px-8 pt-8 z-20">
                                    <span className="font-light text-brown-500">Last Poscast</span>
                                    <span className="text-3xl text-brown-600">Listen Now</span>
                                </div>
                                <div className="w-full h-full flex-center  relative perspective-3d z-0">
                                    <Grid lineClassname="bg-white" />
                                </div>
                                <div className="absolute w-full h-full top-0 bg-gradient-to-b from-[#D98DFA] from-30% via-[#D98DFA] 
                                via-10% to-transparent to-60% z-0" />
                                <div className="w-full h-[21vh] md:h-40 absolute bottom-0 z-30 flex-start flex-col gap-10 md:gap-6 px-8">
                                    <span className="text-sm font-bold">{`#73. TALKS ABOUT AI FUTURE`}</span>
                                    <div className="w-20 h-20 rounded-full bg-white/30 backdrop-opacity-10 backdrop-blur-xl flex-center 
                                    hover:animate-wiggle cursor-pointer">
                                        <div className="w-[70%] h-[70%] rounded-full bg-[#D98DFA] shadow-md flex-center">
                                            <BsPlayFill className="text-4xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-start flex-col gap-1 md:gap-4 font-bold text-3xl md:text-5xl px-10 md:px-16">
                            <div className="flex-start gap-4">
                                <span>
                                    Tell us who
                                </span>
                                <div className="w-6 wh-6 md:w-12 md:h-12 relative">
                                    <div className="flex-center w-5 h-5 md:w-10 md:h-10 absolute rounded-md -rotate-12 top-1 md:-top-1 bg-[#D5CCBD] group">
                                        <BsFlower1 className="text-lg md:text-2xl text-black group-hover:animate-wiggle" />
                                    </div>
                                    <div className="flex-center w-5 h-5 md:w-10 md:h-10 absolute rounded-md rotate-6 -bottom-9 md:-bottom-3 bg-black -right-2 
                                    md:-right-5 group">
                                        <MdWaves className="text-lg md:text-2xl text-pink-400 group-hover:animate-wiggle" />
                                    </div>
                                </div>
                            </div>
                            <span>
                                {`you'd like to meet next`}
                            </span>
                        </div>
                        <div className="w-full flex-start px-9 md:px-16">
                            <div className="w-full h-14 md:w-[600px] md:h-20 bg-[#DFD0AF] py-4 flex items-center px-2 md:px-4 relative 
                            overflow-hidden rounded-lg md:rounded-2xl">
                                <AiOutlineArrowRight className="text-2xl md:text-6xl absolute right-[3vw] md:right-6 z-0" />
                                <div className="w-[85%] h-full bg-slate-900 text-white text-xs md:text-xl font-extrabold absolute left-0 
                                rounded-lg md:rounded-2xl px-2 md:px-6 flex-center z-10 transition-all duration-300 ease-in-out hover:w-full
                              hover:bg-white hover:text-slate-900 cursor-pointer">
                                    <span>SUGGEST THE NEXT GUEST ON THE PODCAST</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-40 md:w-[1200px] md:h-40 flex-center pr-0 md:pr-8">
                    <div className="w-full rounded-xl text-2xl md:text-8xl font-extrabold flex-center md:flex-between">
                        <span>TURN ON</span>
                        <div className="w-12 h-12 md:w-24 md:h-24 bg-black rounded-full flex-center p-2">
                            <div className="w-[80%] h-[80%] rounded-full relative overflow-hidden">
                                <Image src={ball} fill className="object-cover" alt="ball" />
                            </div>
                        </div>
                        <span>CHAINCAST</span>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Chaincast