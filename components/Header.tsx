
function Header() {
    return (
        <div className={`w-full md:w-[1260px] flex flex-col md:text-start text-center gap-2 font-paytone-one text-slate-800`}>
            <p className="text-3xl md:text-5xl font-extrabold">
                {`Mock ups`}
            </p>
            <span className="text-[0.6rem] md:text-xs pl-1">
                {`List of designs i transform into codes`}
            </span>
        </div>
    )
}

export default Header