import React, { useEffect, useRef, useState } from 'react'
import { RxArrowRight } from 'react-icons/rx'

function HamburgerMenu({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: () => void }) {
    return (
        <div
            className={`h-6 flex-between flex-col overflow-hidden relative transition-all duration-200 ease-in-out 
        ${isOpen ? 'w-6' : 'w-8'}`} onClick={() => setIsOpen()}
        >
            <div
                className={`h-[4px] rounded-2xl bg-black transition-all duration-300 ease-in-out origin-top-left 
          ${isOpen ? 'absolute -top-[1.5px] left-[1.5px] rotate-[45deg] w-[33px]' : 'w-full'}`}
            />
            <div
                className={`w-3/4 h-[4px] rounded-2xl transition-all duration-300 ease-in-out bg-black 
          ${isOpen && 'absolute translate-x-8 top-[10px] opacity-0'}`}
            />
            <div
                className={`h-[4px] rounded-2xl bg-black transition-all duration-300 ease-in-out origin-top-left 
          ${isOpen ? 'absolute -bottom-[1.8px] -rotate-[46deg] w-[32px]' : 'w-1/2'}`}
            />
        </div>
    )
}

function MobileNavbar({ className }: { className?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const initial = useRef(false);

    useEffect(() => {
        if (initial.current) {
            const menus = document.getElementById('menu');
            if (isOpen) {
                menus?.classList.remove('hidden');
                setTimeout(() => {
                    menus?.classList.add('opacity-100')
                    menus?.classList.remove('opacity-0')
                }, 90);
            } else {
                menus?.classList.remove('opacity-100');
                menus?.classList.add('opacity-0');
                setTimeout(() => {
                    menus?.classList.add('hidden');
                }, 280)
            }
        }

        initial.current = true
    }, [isOpen])

    return (
        <div className={`w-full fixed top-0 flex flex-col ${className}`}>
            <div className="h-16 flex-between bg-white">
                <div className="w-20 flex-center h-full ">
                    <HamburgerMenu isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
                </div>
                <div className="w-40 h-full relative overflow-hidden flex-center text-black text-3xl font-extrabold">
                    <span>Brando</span>
                </div>
            </div>
            <div
                id="menu"
                className={`w-full h-80 py-6 px-8 bg-white border-t-2 border-b-2 border-black transition-all duration-500 ease-in-out 
          flex-start flex-col gap-8 overflow-y-auto text-black font-bold opacity-0 hidden`}
            >
                <span className={`transition-all duration-300 ease-in-out delay-[90ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>How we work</span>
                <span className={`transition-all duration-300 ease-in-out delay-[120ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>Our work</span>
                <span className={`transition-all duration-300 ease-in-out delay-[150ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>Pricing</span>
                <span className={`transition-all duration-300 ease-in-out delay-[180ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>Contact us</span>
                <div className='w-36 h-12 flex-center gap-2 text-lg border-2 border-black'>
                    <span>Lets Talk</span>
                    <RxArrowRight className='text-xl' />
                </div>
            </div>
        </div>
    )
}

function Navbar() {
    return (
        <div className='w-full'>
            <MobileNavbar className="flex md:hidden z-50" />
            <div className='w-full h-20 hidden md:flex justify-between items-center border-b-2 border-black pl-12 bg-white'>
                <h1 className='text-3xl'>Brando</h1>
                <nav className='flex-center gap-6 text-lg'>
                    <span>How we work</span>
                    <span>Our Work</span>
                    <span>Pricing</span>
                    <span>Contact Us</span>
                </nav>
                <div className='w-52 h-full flex-center gap-2 text-xl border-l-2 border-black'>
                    <span>Lets Talk</span>
                    <RxArrowRight className='text-3xl' />
                </div>
            </div>
        </div>
    )
}

export default Navbar