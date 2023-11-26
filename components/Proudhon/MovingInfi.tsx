import { gsap } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { ReactNode, useEffect, useRef } from 'react';
import { cn } from '@/utils';

function MovingInfi({ children, speed, revert, className }: { children: ReactNode, speed: number, revert?: boolean, className?: string }) {
    const ref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const row = ref.current as any;
        const rowWidth = row.getBoundingClientRect().width;
        const rowItemWidth = row.children[0].getBoundingClientRect().width;
        const initialOffset = ((1.040 * rowItemWidth) / rowWidth) * 100 * -1;
        console.log()
        gsap.set(row, {
            xPercent: revert ? 0 : initialOffset,
        })


        let duration = 2 * (speed + 1);
        gsap.to(row, {
            ease: 'none',
            repeat: -1,
            duration: duration,
            xPercent: revert ? initialOffset : 0,
        })
    }, [])

    return (
        <div id="container" className='w-full h-14 overflow-hidden cursor-default'>
            <div ref={ref} className={cn('flex relative text-start whitespace-nowrap', className)}>
                <div>
                    {children}
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MovingInfi