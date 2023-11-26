import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ReactNode, useEffect, useRef } from "react"
import { cn, useIsomorphic } from "@/utils";

function UpAnimation({ 
    children, 
    delay,
    duration = 0.8,
    y = 50,
    className,
    observe }: { 
        children: ReactNode, 
        delay: number, 
        className?: string, 
        observe?: boolean,
        duration?: number,
        y?: number
    }) {
    const ref = useRef(null);

    useIsomorphic(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.set(ref.current, { y })

        if (observe) {
            gsap.to(ref.current, {
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top +=500'
                },
                y: 0,
                opacity: 1,
                duration,
                ease: 'power4.out',
                delay
            })
        } else {
            gsap.to(ref.current, {
                y: 0,
                opacity: 1,
                duration,
                ease: 'power4.out',
                delay
            })
        }
    }, [])

    return (
        <div ref={ref} className={cn('opacity-0', className)}>
            {children}
        </div>
    )
}

export default UpAnimation