import Card from "./Card"
import localfont from 'next/font/local'
import Barcode from '../../assets/Butusic/Barcode.png'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import Image from "next/image";
const font = localfont({ src: '../../assets/font/DanhDa-Bold.otf' });

export default function BarcodePayment({ height }: { height: string }) {
    return (
        <Card border="border-2 border-white" height={height} background='bg-dark-500'>
            <div className="w-full h-full flex flex-col justify-between items-center p-6">
                <div className={`w-full text-7xl bg-white text-dark-500 rounded-lg text-center 
                pb-5 ${font.className}`}>
                    Butusic
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-4 pl-2 justify-start items-center">
                        <div className="w-11 h-11 flex justify-center items-center bg-green-400 rounded-lg text-2xl">
                            <BsCurrencyBitcoin />
                        </div>
                        <div className="text-white text-md w-40">
                            We accept more than just bitcoins
                        </div>
                    </div>
                    <Image src={Barcode} alt='barcode' />
                </div>
            </div>
        </Card>
    )
}
