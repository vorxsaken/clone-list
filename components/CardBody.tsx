import { ReactEventHandler } from "react"
import Button from "./Button"
import { BiWindowClose } from 'react-icons/bi'

interface cardBody { id?: string, title: string, subTitle: string, onClick?: ReactEventHandler }

function CardBody({ id, title, subTitle, onClick }: cardBody ) {
    return (
        <div id={id} className="w-full h-full px-4 py-4 flex flex-col gap-2 bg-white absolute z-10 
        justify-start items-start left-96 overflow-y-auto" onClick={onClick}>
            <p className="text-xl text-yellow-400 w-full px-4">
                <BiWindowClose className="cursor-pointer transition-all duration-300 ease-in-out 
                float-right hover:scale-110" />
            </p>
            <p className="text-md font-bold text-slate-800 text-start w-[19rem]">
                {title}
            </p>
            <p className="text-[0.6rem] text-slate-500 text-start w-[19rem]">
                {subTitle}
            </p>
            <div className="w-80 mt-2 flex justify-center">
                <Button>
                    Visit
                </Button>
            </div>
        </div>
    )
}

export default CardBody