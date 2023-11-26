import Logo from "./Logo"
import UpAnimation from "./UpAnimation"
import MobileNav from "../MobileNav"

function Navbar() {
    const contactButt = (
        <div className="h-12 flex-center px-8 bg-sky-500 rounded-lg text-white font-extrabold">
            <p>Work With Us</p>
        </div>
    )

    const links = ['About', 'Our Works', 'Services', 'Achievement']
    return (
        <div className="w-full">
            <div className='w-full h-28 hidden lg:flex justify-between items-center z-40 absolute top-0 left-0 px-12 '>
                <UpAnimation delay={0.2}>
                    <Logo />
                </UpAnimation>
                <div className="flex-center gap-8 text-white font-bold">
                    <UpAnimation delay={0.3}>
                        <span>About</span>
                    </UpAnimation>
                    <UpAnimation delay={0.4}>
                        <span>Our Work</span>
                    </UpAnimation>
                    <UpAnimation delay={0.5}>
                        <span>Services</span>
                    </UpAnimation>
                    <UpAnimation delay={0.6}>
                        <span>Achievement</span>
                    </UpAnimation>
                </div>
                <UpAnimation delay={0.7}>
                    {contactButt}
                </UpAnimation>
            </div>
            <MobileNav
                logo={<Logo />}
                links={links}
                className="flex lg:hidden z-40 absolute top-0 left-0"
                barClassName="bg-black/20"
                menuClassName="border-none"
                invertButt={false}
            >
                {contactButt}
            </MobileNav>
        </div>
    )
}

export default Navbar