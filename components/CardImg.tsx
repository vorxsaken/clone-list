import Image, { StaticImageData } from "next/image"
import { ReactEventHandler } from "react"

function CardImg({src, onClick}: {src: string | StaticImageData, onClick?: ReactEventHandler}) {
    return (
        <div className="w-full z-0" onClick={onClick}>
            <Image src={src} alt="preview image" className="w-full h-56 object-cover" />
        </div>
    )
}

export default CardImg