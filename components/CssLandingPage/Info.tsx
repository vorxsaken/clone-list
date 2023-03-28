import Card from "./Card"
import Emoji from '../../assets/Butusic/Smile Emoji.png';
import Image from "next/image";

export default function Info({height}: {height: string}) {
  return (
    <Card background="bg-purple-400" row={true} height={height} center={true} gap="gap-2">
        <p className="text-center text-white text-xs pl-4">
            Only exclusive illustration
        </p>
        <Image src={Emoji} alt="smile emoji" width={120} />
        <p className="text-center text-white text-xs pr-4">
            We do not sell works on stock 
        </p>
    </Card>
  )
}
