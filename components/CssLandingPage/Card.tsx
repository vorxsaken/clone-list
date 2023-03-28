import { ReactNode } from 'react'

interface card {
    width?: string
    children?: ReactNode,
    background?: string,
    border?: string,
    height?: string,
    row?: boolean,
    flex?: boolean,
    center?: boolean,
    gap?: string,
    padding?: string
}

export default function Card({ children, width, background, border, row, height, flex, center, gap, padding}: card) {
    return (
        <div className={`${width} ${height} ${flex && 'flex'} ${background || 'bg-dark-400'} 
        ${border} ${row ? 'flex-row' : 'flex-col'} ${center && 'justify-center items-center'} 
        ${gap} ${padding} rounded-3xl overflow-hidden relative`}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    flex: true,
    width: 'w-80',
    height: 'h-[240px]',
    gap: 'gap-4'
}