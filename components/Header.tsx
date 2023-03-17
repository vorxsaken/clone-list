import localFont from "next/font/local"
import { ReactNode } from "react"
const font = localFont({src: '../assets/font/PermanentMarker-Regular.ttf'})

function Header({children, title}: {children: ReactNode, title: string}) {
    return (
        <div className={`w-full flex flex-col gap-2 pb-8 text-center ${font.className}`}>
            <p className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
                {title}
            </p>
            <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
                {children}
            </span>
        </div>
    )
}

export default Header