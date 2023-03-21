import { ReactEventHandler, ReactNode } from "react"

interface card { 
    children: ReactNode, 
    id?: string, 
    onClick?: ReactEventHandler,
    className?: string
}

function Card({ children, id, onClick, className }: card ) {
    return (
        <>
            <div
                id={id}
                onClick={onClick}
                className={`w-full h-auto md:max-w-sm md:max-h-[380px] flex flex-col 
                rounded-lg overflow-hidden shadow-xl bg-white relative ${className}`} 
            >
                {children}
            </div >
        </>
    )
}

export default Card