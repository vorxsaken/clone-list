import localFont from "next/font/local"
const font = localFont({ src: '../assets/font/PermanentMarker-Regular.ttf' })

function Header() {
    return (
        <div className={`w-full flex flex-col gap-2 pb-8 text-center ${font.className}`}>
            <p className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                Clone List
            </p>
            <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                list of design i transform into code <br /> (mostly landing page)
            </span>
        </div>
    )
}

export default Header