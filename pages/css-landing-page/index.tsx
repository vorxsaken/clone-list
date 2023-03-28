import Card from "@/components/CssLandingPage/Card"
import Photo from "@/components/CssLandingPage/Photo"
import CircleText from "@/components/CssLandingPage/CircleText"
import BarcodePayment from "@/components/CssLandingPage/BarcodePayment"
import AppStoreLink from "@/components/CssLandingPage/AppStoreLink"
import MiniPerson from "@/components/CssLandingPage/MiniPerson"
import Info from "@/components/CssLandingPage/Info"
import Rating from "@/components/CssLandingPage/Rating"
import Location from "@/components/CssLandingPage/Location"
import Menu from "@/components/CssLandingPage/Menu"
import Person1 from '../../assets/Butusic/Dayflow - Riding 2.png'
import Person2 from '../../assets/Butusic/Pebble People - Running.png'
import Person3 from '../../assets/Butusic/Spooky Stickers - Pumpkin 3.png'
import Person4 from '../../assets/Butusic/Spooky Stickers - Skull Cupcake.png'
import { Manrope } from 'next/font/google'
const manrope = Manrope({weight: '500', subsets: ['latin']});

export default function CssLandingPage() {
  return (
    <div className={`w-full h-auto bg-dark-500 flex flex-row flex-wrap justify-center items-center p-6 ${manrope.className}`}>
        <div className='flex flex-col gap-4 p-2'>
            <Photo background="bg-purple-400" photo1={Person4} photo2={Person3} />
            <BarcodePayment height="h-[470px]" />
        </div>
        <div className='flex flex-col gap-4 p-2'>
            <CircleText background="bg-dark-500" />
            <Location />
            <MiniPerson height="h-[100px]" />
            <AppStoreLink height="h-[100px]"/>
        </div>
        <div className="flex flex-col gap-4 p-2">
            <div className="flex flex-row flex-wrap gap-4">
                <Menu height="h-[485px]"/>
                <div className="flex flex-col gap-4">
                    <Info height="h-[100px]" />
                    <Photo background="bg-yellow-300" photo1={Person2} photo2={Person1} height="h-[370px]" />
                </div>
            </div>
            <Rating width="w-[330px] md:w-[660px]" height="h-[115px] md:h-[230px]" />
        </div>
    </div>
  )
}
