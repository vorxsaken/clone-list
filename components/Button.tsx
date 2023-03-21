function Button({ children, className }: { children?: string, className?: string }) {
  return (
    <div className={`w-20 h-8 border border-sky-500 rounded-md outline-none
    text-xs font-extrabold text-sky-500 transition-all
    duration-500 ease-in-out relative flex justify-center items-center 
    overflow-hidden group cursor-pointer ${className}`}>
      <div className="w-full h-24 absolute -bottom-14 -z-20 circle-0-clip-path group-hover:circle-100-clip-path bg-yellow-300
      transition-all duration-700 ease-in-out" />
      <div className="w-full h-24 absolute -bottom-14 -z-10 circle-0-clip-path group-hover:circle-100-clip-path bg-sky-500
      transition-all delay-200 duration-700 ease-in-out" />
      <span className="z-0 group-hover:text-white delay-500">
        {children}
      </span>
    </div>
  )
}

export default Button