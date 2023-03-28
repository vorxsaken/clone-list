import Card from "./Card"
import Image, { StaticImageData } from "next/image"

interface photo {
  background?: string,
  photo1: StaticImageData,
  photo2: StaticImageData,
  height?: string
}

export default function Photo({ background, photo1, photo2, height }: photo) {
  return (
    <>
      <Card flex={false} height={height}>
        <div className="relative w-full h-full overflow-hidden group">
          <div className={`absolute top-0 left-0 w-full h-full ${background}`}>
            <Image src={photo1} alt="person 1" className="object-fill mr-auto ml-auto w-64 h-full " />
          </div>
          <div className={`absolute top-0 left-0 w-full h-full clip-not-transparent
          group-hover:clip-transparent transition-all duration-500 ease-in-out ${background}`}>
            <Image src={photo2} alt="person 2" className="object-fill mr-auto ml-auto w-64 h-full " />
          </div>
        </div>
      </Card>
    </>
  )
}
