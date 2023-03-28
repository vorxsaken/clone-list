import Card from "./Card"
import { gsap } from "gsap";

export default function Menu({ height }: { height: string }) {

    const menus = ['Categories', 'Payment', 'Authors', 'Auction', 'Sales', 'reviews']

    const hoverCircle = (id: any) => {
        const getDistant = document.getElementById(`menu-${id}`)?.getBoundingClientRect();
        const getDivDistant = document.getElementById('container')?.getBoundingClientRect();
        const distant = getDistant?.top || 0;
        const divDistant = getDivDistant?.top || 0;

        gsap.to(`#circleRadio`, {
            y: distant - divDistant,
            duration: 0.6,
            ease: 'power2.inOut'
        })
    }

    return (
        <Card padding="px-8 py-8" gap="gap-24" height={height}>
            <div id="circleRadio" className="w-10 h-10 rounded-full border border-slate-100 border-opacity-30 absolute right-6 
            flex justify-center items-center animate-pulse">
                <div className="w-6 h-6 rounded-full bg-purple-400 bg-opacity-40 flex justify-center items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500">
                    </div>
                </div>
            </div>
            <div id="container" className="flex flex-col gap-5">
                {
                    menus.map((menu, index) => (
                        <div id={`menu-${index}`} onMouseOver={() => hoverCircle(index)} 
                        className="uppercase text-white text-2xl cursor-pointer hover:text-purple-400">
                            { menu }
                        </div>
                    ))
                }
            </div>
            <div id="menu-6" onMouseOver={() => hoverCircle(6)} className="text-white text-2xl cursor-pointer hover:text-purple-400">
                CONTACS
            </div>
        </Card>
    )
}
