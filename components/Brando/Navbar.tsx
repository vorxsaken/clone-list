import { RxArrowRight } from "react-icons/rx"
import MobileNav from "../MobileNav"

function Navbar() {
    const logo = <span>Brando</span>
    const links = ['How we work', 'Our work', 'Pricing', 'Contact us']

    return (
        <div className='w-full'>
            <MobileNav logo={logo} links={links} className="flex md:hidden z-50">
                <div className='w-36 h-12 flex-center gap-2 text-lg border-2 border-black'>
                    <span>Lets Talk</span>
                    <RxArrowRight className='text-xl' />
                </div>
            </MobileNav>
            <div className='w-full h-20 hidden md:flex justify-between items-center border-b-2 border-black pl-12 bg-white'>
                <h1 className='text-3xl'>Brando</h1>
                <nav className='flex-center gap-6 text-lg'>
                    <span>How we work</span>
                    <span>Our Work</span>
                    <span>Pricing</span>
                    <span>Contact Us</span>
                </nav>
                <div className='w-52 h-full flex-center gap-2 text-xl border-l-2 border-black'>
                    <span>Lets Talk</span>
                    <RxArrowRight className='text-3xl' />
                </div>
            </div>
        </div>
    )
}

export default Navbar