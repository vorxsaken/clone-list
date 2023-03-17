function Button({children, className}: {children?: string, className?: string}) {
  return (
    <button className={`w-20 h-8 border border-sky-300 rounded-md outline-none
    text-xs font-extrabold text-sky-300 hover:border-sky-500 transition-all
    duration-500 ease-in-out hover:text-sky-500 ${className}`}>
        {children}
    </button>
  )
}

export default Button