function CardBody({title, subTitle}: {title: string, subTitle: string}) {
    return (
        <div className="px-4 py-4 flex flex-col gap-2">
            <p className="font-bold text-slate-800">
                {title}
            </p>
            <p className="text-xs text-slate-500">
                {subTitle}
            </p>
        </div>
    )
}

export default CardBody