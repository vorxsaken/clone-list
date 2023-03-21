import { ReactEventHandler } from "react";

export default function CardLayer({ id, onClick, className }: { id: any, onClick: ReactEventHandler, className?: string }) {
    return (
        <>
            <div
                id={`layer1-${id}`}
                className={`w-full h-full bg-blue-400 absolute cursor-pointer ${className}`}
                onClick={onClick}
            />
            <div
                id={`layer2-${id}`}
                className={`w-full h-full bg-yellow-400 absolute cursor-pointer ${className}`}
                onClick={onClick}
            />
        </>
    )
}
