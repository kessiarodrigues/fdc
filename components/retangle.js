export default function Retangle({children, numeral}) {
    return(
        <div className=" pb-6 px-14">
                                <div className="bg-tertiary_orange text-white font-NexaSlab font-Bold text-xl px-4 py-2" >
                                    <p>{numeral}</p>
                                </div>
                                    <p className="px-3 py-2 text-white ">
                                        {children}
                                    </p>
        </div>
    )
}
