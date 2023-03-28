import Card from "./Card"
import Image from "next/image"
import Person from '../../assets/Butusic/Mini Person.png';

export default function MiniPerson({ height }: { height: string }) {

    return (
        <div className="hover:rotate-3 cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out">
            <Card row={true} height={height} center={true} gap="gap-10">
                {
                    [1, 2, 3].map(i => (
                        <Image src={Person} alt={`person ${i}`} key={i} />
                    ))
                }
            </Card>
        </div>
    )
}
