import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { Anton } from 'next/font/google'
const font = Anton({weight: '400', subsets: ['latin']});

function Logo({black}: {black?: boolean}) {
    return (
        <div className='flex-center gap-2 lg:gap-3'>
            <div className='w-7 h-7 lg:w-8 lg:h-8 bg-sky-500 flex-center rounded-sm lg:rounded-md'>
                <BsStarFill className="text-white lg:text-lg text-base" />
            </div>
            <strong className={`text-white text-xl lg:text-3xl ${font.className} ${black && 'invert'}`}>Proudhon</strong>
        </div>
    )
}

export default Logo