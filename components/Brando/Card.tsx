import { cn } from "@/utils";
import Image, { StaticImageData } from "next/image";
import { RxArrowRight } from "react-icons/rx";
import Dots from '../../assets/brando/dot.png';
type CardType = React.ComponentProps<'div'> & {
    header?: string,
    title: string,
    subtitle: string,
    invert?: boolean,
    row?: boolean,
    noBackground?: boolean,
    coverImage?: string | StaticImageData
}

export default function Card({
    className,
    header,
    title,
    subtitle,
    invert,
    row,
    noBackground = true,
    coverImage,
    ...props
}: CardType) {
    return (
        <div className={cn('relative', className)} {...props}>
            {
                noBackground && (
                    <div className='w-full h-[95%] absolute right-4 -bottom-3 md:right-8 md:-bottom-6 z-0'>
                        <Image src={Dots} fill className={`object-cover ${invert && 'invert'}`} alt='' />
                    </div>
                )
            }
            <article className={`bg-white border-2 border-black w-full h-full z-40 absolute ${row && 'flex-between'}`}>
                <div className={`${row ? 'w-[60%] flex-start gap-8 md:gap-0' : 'w-full flex-between'} h-full  flex-col`}>
                    {
                        header && (
                            <div className='w-full h-10 flex justify-between items-center font-extrabold border-b-2 border-black pl-4'>
                                <span>{header}</span>
                                <div className='w-24 h-full flex-center gap-2'>
                                    <div className='w-4 h-4 rounded-full border-2 border-black' />
                                    <div className='w-4 h-4 rounded-full border-2 border-black' />
                                    <div className='w-4 h-4 rounded-full border-2 border-black' />
                                </div>
                            </div>
                        )
                    }
                    <div className='w-full h-[60%] flex-start flex-col gap-6 pb-4 px-4 md:px-6 pt-6'>
                        <h1 className='text-lg md:text-4xl font-bold md:leading-[3.5rem]'>
                            {title}
                        </h1>
                        <p className={`text-gray-600 text-xs md:text-base ${row && 'text-xs md:text-lg'}`}>
                            {subtitle}
                        </p>
                    </div>
                    <div className={`flex justify-between items-center px-2 md:px-6
                    transition-all duration-700 cursor-pointer gradient-bottom-card
                    ${row ? 'w-[60%] md:w-[40%] h-8 md:h-[20%] border-2 border-black ml-6' : 'w-full h-[20%] border-t-2 border-black'}`}>
                        <span className='text-xs md:text-2xl font-bold'>{`Let's Talk`}</span>
                        <RxArrowRight className='text-sm md:text-[2.5rem]' />
                    </div>
                </div> {
                    (row && coverImage) && (
                        <div className="w-[30%] h-full relative overflow-hidden mr-10">
                            <Image src={coverImage} alt="" fill className="object-contain" />
                        </div>
                    )
                }
            </article>
        </div>
    )
}