import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/utils';

type MobileNavType = {
    className?: string,
    logo: JSX.Element,
    links: string[],
    children?: ReactNode,
    barClassName?: string,
    menuClassName?: string,
    invertButt?: boolean
}

function HamburgerMenu({ isOpen, setIsOpen, black }: { isOpen: boolean, setIsOpen: () => void, black?: boolean }) {
    const bgColor = black ? 'bg-black' : 'bg-white'
    return (
        <div
            className={`h-6 flex-between flex-col overflow-hidden relative transition-all duration-200 ease-in-out 
            ${isOpen ? 'w-6' : 'w-8'}`} onClick={() => setIsOpen()}
        >
            <div
                className={`h-[4px] rounded-2xl transition-all duration-300 ease-in-out origin-top-left 
                ${isOpen ? 'absolute -top-[1.5px] left-[1.5px] rotate-[45deg] w-[33px]' : 'w-full'} ${bgColor}`}
            />
            <div
                className={`w-3/4 h-[4px] rounded-2xl transition-all duration-300 ease-in-out
                ${isOpen && 'absolute translate-x-8 top-[10px] opacity-0'} ${bgColor}`}
            />
            <div
                className={`h-[4px] rounded-2xl transition-all duration-300 ease-in-out origin-top-left 
                ${isOpen ? 'absolute -bottom-[1.8px] -rotate-[46deg] w-[32px]' : 'w-1/2'} ${bgColor}`}
            />
        </div>
    )
}

export default function MobileNav({ className, logo, links, children, barClassName, menuClassName, invertButt = true }: MobileNavType) {
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
        <div className={cn('w-full fixed top-0 flex flex-col', className)}>
            <div className={cn('h-16 flex-between bg-white', barClassName)}>
                <div className="w-20 flex-center h-full ">
                    <HamburgerMenu isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} black={invertButt} />
                </div>
                <div className="w-36 h-full relative overflow-hidden flex-center text-black text-3xl font-extrabold">
                    {logo}
                </div>
            </div>
            <div
                id="menu"
                className={cn(
                    `w-full h-80 py-6 px-8 bg-white border-t-2 border-b-2 border-black transition-all duration-500 ease-in-out 
                    flex-start flex-col gap-8 overflow-y-auto text-black font-bold opacity-0 hidden`,
                    menuClassName
                )}
            >
                {links.map(link => (
                    <span
                        key={link}
                        className={`transition-all duration-300 ease-in-out delay-[90ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}
                    >
                        {link}
                    </span>
                ))}
                {children}
            </div>
        </div>
    )
}