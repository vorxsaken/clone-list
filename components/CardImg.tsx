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
            <Image src={src} id={`card-img-${id}`} width={500} height={224} alt="preview image" className="object-cover" />
        </div>
    )
}

export default CardImg