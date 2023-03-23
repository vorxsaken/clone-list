import { ReactEventHandler } from "react"
import Button from "./Button"
import { BiWindowClose } from 'react-icons/bi'

interface cardBody {
    id?: string,
    title: string,
    subTitle: string,
    onClick?: ReactEventHandler,
    className?: string
}

function CardBody({ id, title, subTitle, onClick, className }: cardBody) {
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
            <p className="text-[0.6rem] lg:text-[0.6rem] text-slate-500 text-justify lg:text-start w-[17rem] lg:w-[19rem]">
                {subTitle}
            </p>
            <div className="w-64 lg:w-80 mt-2 flex justify-center">
                <Button> Visit </Button>
            </div>
        </div>
    )
}

export default CardBody