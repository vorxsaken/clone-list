import { ReactEventHandler, ReactNode, useRef } from "react"

function Card({ children, id, onClick }: { children: ReactNode, id?: string, onClick?: ReactEventHandler }) {
    return (
        <>
            <div
                id={id}
                onClick={onClick}
                className="w-full h-auto md:max-w-sm md:max-h-[380px] flex flex-col 
                rounded-lg overflow-hidden shadow-xl bg-white relative" 
            >
                {children}
            </div >
        </>
    )
}

export default Card