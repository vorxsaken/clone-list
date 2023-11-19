import { useEffect, useRef, useState } from "react";

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
      <div className="h-16 flex-between bg-[#F0E7E2]">
        <div className="w-16 flex-center h-full">
          <HamburgerMenu isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
        </div>
        <div className="w-40 h-full relative overflow-hidden flex-center text-black text-3xl font-extrabold">
          <span>Chaincast</span>
        </div>
      </div>
      <div
        id="menu"
        className={`w-full h-80 py-6 px-8 bg-[#F0E7E2] border-t border-gray-300 transition-all duration-500 ease-in-out 
        flex-start flex-col gap-6 overflow-y-auto text-black font-bold opacity-0 hidden`}
      >
        <span className={`transition-all duration-300 ease-in-out delay-[90ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>Home</span>
        <span className={`transition-all duration-300 ease-in-out delay-[120ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>Guests</span>
        <span className={`transition-all duration-300 ease-in-out delay-[150ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>Podcasts</span>
        <span className={`transition-all duration-300 ease-in-out delay-[180ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>Events</span>
        <span className={`transition-all duration-300 ease-in-out delay-[210ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>About Us</span>
        <span className={`transition-all duration-300 ease-in-out delay-[240ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>Contact</span>
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <div className="w-full">
      <MobileNavbar className="flex md:hidden z-50" />
      <div className="w-full h-24 hidden md:flex-between bg-[#F0E7E2] absolute top-0 before:absolute before:w-[90%] before:h-[1px] 
      before:rounded-xl before:bg-gray-400 before:bottom-0 before:left-[5%] px-20">
        <div className="h-full flex-center gap-12 text-slate-900 text-lg font-medium">
          <span className="cursor-pointer hover:text-yellow-700 transition-all duration-300 ease-in-out">Home</span>
          <span className="cursor-pointer hover:text-yellow-700 transition-all duration-300 ease-in-out">Guests</span>
          <span className="cursor-pointer hover:text-yellow-700 transition-all duration-300 ease-in-out">Podcasts</span>
        </div>
        <div className="h-full flex-center gap-12 text-black font-bold text-4xl">
          <span>Chaincast</span>
        </div>
        <div className="h-full flex-center gap-12 font-medium text-lg">
          <span className="cursor-pointer hover:text-yellow-700 transition-all duration-300 ease-in-out">Events</span>
          <span className="cursor-pointer hover:text-yellow-700 transition-all duration-300 ease-in-out">About Us</span>
          <span className="cursor-pointer hover:text-yellow-700 transition-all duration-300 ease-in-out">Contact</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar