import { ReactEventHandler, ReactNode, useRef } from "react"

function Card({ children, id, onClick }: { children: ReactNode, id?: string, onClick: ReactEventHandler }) {
    return (
        <>
            <div
                id={id}
                onClick={onClick}
                className="w-full md:max-w-sm md:max-h-[380px] md:min-h-[380px] flex flex-col 
                rounded-lg overflow-hidden shadow-xl bg-white" 
            >
                {children}
            </div >
        </>
    )
}

export default Card