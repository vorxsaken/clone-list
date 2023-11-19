import { ReactEventHandler } from "react"
import Button from "./Button"
import { BiWindowClose } from 'react-icons/bi'
import Link from "next/link"

interface cardBody {
    id?: string,
    title: string,
    subTitle: string,
    onClick?: ReactEventHandler,
    link: string,
    className?: string,
    designLink?: string
}

function CardBody({ id, title, subTitle, onClick, className, link, designLink }: cardBody) {
    return (
        <div id={id} className={`w-full h-full px-4 py-4 flex flex-col gap-2 bg-white absolute z-10 
        justify-start items-start overflow-y-auto ${className}`}>
            <p className="text-xl text-yellow-400 w-full px-4">
                <BiWindowClose className="cursor-pointer transition-all duration-300 ease-in-out 
                float-right hover:scale-110" onClick={onClick} />
            </p>
            <p className=" text-[0.8rem] lg:text-2xl font-extrabold text-slate-800 text-start w-[17rem] lg:w-[22rem]">
                {title}
            </p>
            <p className="text-[0.6rem] lg:text-[0.6rem] text-slate-500 text-justify lg:text-start w-[60vw] lg:w-[19rem]">
                {subTitle}
            </p>
            <p className="text-[0.6rem] lg:text-[0.6rem] text-slate-500 text-justify lg:text-start w-[17rem] lg:w-[19rem]">
                {`Design Link : `} &nbsp;
                <a href={designLink} target="_blank" className="text-pink-500" rel="noopener noreferrer">{title}</a>
            </p>
            <div className="w-64 lg:w-80 mt-2 flex justify-center">
                <Link href={link} target={'_blank'}>
                    <Button> Visit </Button>
                </Link>
            </div>
        </div>
    )
}

export default CardBody