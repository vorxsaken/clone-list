import Card from "./Card"
import { MdLocationOn } from 'react-icons/md'
export default function Location() {
  return (
    <Card padding="px-6 py-4" gap="gap-10">
        <div className="flex flex-row gap-2 items-center">
            <span className="w-8 h-8 bg-green-400 rounded-full flex justify-center items-center">
                <MdLocationOn className="text-md" />
            </span>
            <span className="w-28 h-10 text-sm text-dark-300">
                1217 purrweb STREET, LA
            </span>
        </div>
        <div className="text-xl text-white">
            FIRST EXHIBITION OF ILLUSTRATION OFFLINE
        </div>
        <div className="text-dark-300 text-md">
            BUTISTIC.COM/EXHIBITION
        </div>
    </Card>
  )
}
