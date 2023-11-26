import type { StaticImageData } from "next/image"
import Image from "next/image"
import { cn } from "@/utils"

function Picture({ src, alt, className, contain }: { src: string | StaticImageData, alt: string, className: string, contain?: boolean }) {
    return (
        <div className={cn('rounded-lg relative overflow-hidden', className)}>
            <Image src={src} alt={alt} fill className={`${contain ? 'objact-contain' : 'object-cover'}`} />
        </div>
    )
}

export default Picture