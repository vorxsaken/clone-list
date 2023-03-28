import Image from "next/image"
import Logo from '@/assets/Fitness/logo.png';
import Button from "./Button";

function Navbar() {
  return (
    <div className='w-full flex flex-row gap-8 justify-center items-center fixed top-0 text-white z-50'>
        <div className="flex justify-center items-center">
            <Image src={Logo} alt="fitness logo" />
        </div>
        <div className="text-sm flex flex-row gap-6 font-extralight">
            <span className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">Home</span>
            <span className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">About Us</span>
            <span className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">Program & Services</span>
            <span className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">Classes & Schedule</span>
            <span className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">Trainers</span>
            <span className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">Blog</span>
            <span className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">Contact Us</span>
        </div>
        <Button>Join Now</Button>
    </div>
  )
}

export default Navbar