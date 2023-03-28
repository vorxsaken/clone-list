import Card from "./Card"
import { AiOutlineQrcode } from 'react-icons/ai'
import { MdCallMade } from 'react-icons/md';

export default function AppStoreLink({ height }: { height: string }) {
    return (
        <Card height={height}>
            <div className="w-full h-full flex flex-row justify-center items-center gap-2 text-dark-500 bg-green-400
            hover:bg-white cursor-pointer transition-all duration-500 ease-in-out">
                <AiOutlineQrcode className="text-7xl" />
                <div className="flex flex-col">
                    <strong>Appstore</strong>
                    <p className="text-xs w-40">
                        Download the app and get 10% off your first purchase
                    </p>
                </div>
                <MdCallMade className="text-xl" />
            </div>
        </Card>
    )
}
