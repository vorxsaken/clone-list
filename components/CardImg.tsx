import Image, { StaticImageData } from "next/image"

function CardImg({src}: {src: string | StaticImageData}) {
    return (
        <div className="w-full">
            <Image src={src} alt="preview image" className="w-full h-56 object-cover" />
        </div>
    )
}

export default CardImg