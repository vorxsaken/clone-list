import Image from "next/image"
import Logo from '@/assets/Fitness/logo.png';
import Button from "./Button";
import { useEffect, useRef, useState } from "react";


function HamburgerMenu({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: () => void }) {

  return (
    <div
      className={`h-6 flex-between flex-col overflow-hidden relative transition-all duration-200 ease-in-out 
      ${isOpen ? 'w-6' : 'w-8'}`} onClick={() => setIsOpen()}
    >
      <div
        className={`h-[4px] rounded-2xl bg-orange-500 transition-all duration-300 ease-in-out origin-top-left 
        ${isOpen ? 'absolute -top-[1.5px] left-[1.5px] rotate-[45deg] w-[33px]' : 'w-full'}`}
      />
      <div
        className={`w-3/4 h-[4px] rounded-2xl transition-all duration-300 ease-in-out bg-orange-500 
        ${isOpen && 'absolute translate-x-8 top-[10px] opacity-0'}`}
      />
      <div
        className={`h-[4px] rounded-2xl bg-orange-400 transition-all duration-300 ease-in-out origin-top-left 
        ${isOpen ? 'absolute -bottom-[1.8px] -rotate-[46deg] w-[32px]' : 'w-1/2'}`}
      />
    </div>
  )
}

function MobileNavbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const initial = useRef(false);

  useEffect(() => {
    if(initial.current) {
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
      <div className="h-16 flex-between bg-brown-600">
        <div className="w-16 flex-center h-full">
          <HamburgerMenu isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
        </div>
        <div className="w-32 h-full relative overflow-hidden">
          <Image src={Logo} fill className="object-cover" alt="fitness logo" />
        </div>
      </div>
      <div
        id="menu"
        className={`w-full h-96 py-6 px-8 bg-brown-600 border-t border-gray-800 transition-all duration-500 ease-in-out 
        flex-start flex-col gap-6 overflow-y-auto text-white opacity-0 hidden`}
      >
        <span className={`transition-all duration-300 ease-in-out delay-[90ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>Home</span>
        <span className={`transition-all duration-300 ease-in-out delay-[120ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>About Us</span>
        <span className={`transition-all duration-300 ease-in-out delay-[150ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>Program & Services</span>
        <span className={`transition-all duration-300 ease-in-out delay-[180ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>Classes & Schedule</span>
        <span className={`transition-all duration-300 ease-in-out delay-[210ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>Trainers</span>
        <span className={`transition-all duration-300 ease-in-out delay-[240ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>Blog</span>
        <span className={`transition-all duration-300 ease-in-out delay-[270ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>Contact Us</span>
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <div className="w-full">
      <MobileNavbar className="flex md:hidden z-50" />
      <div className='w-full hidden md:flex flex-row gap-8 justify-center items-center fixed top-0 text-white z-50 bg-brown-600'>
        <div className="flex justify-center items-center">
          <Image src={Logo} alt="fitness logo" />
        </div>
        <div className="text-sm flex flex-row gap-6 font-extralight">
          <span className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">Home</span>
          <span className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">About Us</span>
          <span className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">Program & Services</span>
          <span className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">Classes & Schedule</span>
          <span className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">Trainers</span>
          <span className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">Blog</span>
          <span className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">Contact Us</span>
        </div>
        <Button>Join Now</Button>
      </div>
    </div>
  )
}

export default Navbar