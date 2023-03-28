import Card from "./Card"

export default function Rating({ height, width }: { height: string, width:string }) {
    return (
        <Card height={height} width={width} background="bg-white">
            <div className="w-full h-full flex flex-row justify-between items-center px-4 md:px-8 py-4 md:py-8 text-dark-400">
                <div className="w-36 md:w-72 h-full flex flex-col justify-between">
                    <p className="text-sm md:text-4xl">ONLY THE BEST AUTHORS</p>
                    <p className="text-xs md:text-base">184 guys with a unique vision</p>
                </div>
                <div className="w-24 md:w-48 h-full flex flex-col justify-between items-center ">
                    <p className="text-xl md:text-8xl font-bold">4.97</p>
                    <span className="bg-purple-500 px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-3xl text-[0.6rem] md:text-sm 
                    text-white text-center">
                        BEST REVIEWS
                    </span>
                </div>
            </div>
        </Card>
    )
}
