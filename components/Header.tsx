import localFont from "next/font/local"
const font = localFont({src: '../assets/font/PermanentMarker-Regular.ttf'})

function Header({title, subTitle}: {title: string, subTitle: string}) {
    return (
        <div className={`w-full flex flex-col gap-2 pb-8 text-center ${font.className}`}>
            <p className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-700">
                {title}
            </p>
            <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
                {subTitle}
            </span>
        </div>
    )
}

export default Header