import React from 'react'

interface button {
    children?: string,
    small?: boolean,
    medium?: boolean,
    big?: boolean,
    fill?: boolean
}

export default function Button({children, small, medium, big, fill}: button) {
  return (
    <div className={`rounded-3xl flex justify-center items-center hover:bg-white
    hover:text-black transition-all duration-500 ease-in-out cursor-pointer
    ${medium ? 'w-36 h-14' : big ? 'w-40 h-16' : 'w-32 h-12'} 
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