import Image, { StaticImageData } from "next/image"
import { ReactEventHandler } from "react"

interface cardImg {
    src: string | StaticImageData, 
    onClick?: ReactEventHandler, 
    className?: string,
    id?: any
}

function CardImg({src, onClick, className, id}: cardImg) {
    return (
        <div className={`w-full z-0 ${className}`} onClick={onClick}>
            <Image src={src} id={`card-img-${id}`} className='object-fill' alt="preview image" />
        </div>
    )
}

export default CardImg