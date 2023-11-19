import React from 'react'

interface button {
    children?: string,
    small?: boolean,
    medium?: boolean,
    big?: boolean,
    fill?: boolean
}

export default function Button({children, medium, big, fill}: button) {
  return (
    <div className={`rounded-3xl flex justify-center items-center hover:bg-white
    hover:text-black transition-all duration-500 ease-in-out cursor-pointer w-28 h-11 text-sm
    md:w-36 md:text-base
    ${fill ? 'bg-yellow-500 text-black' : 'border border-white text-white'}`}>
        {children}
    </div>
  )
}


Button.defaultProps = {
    fill: true,
    medium: false,
    big: false
}