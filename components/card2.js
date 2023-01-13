import Aspas from "../public/img/Aspas.svg"

export default function Card2Fdc ({children, className, img}){
    <div className={`flex
    flex-col
    items-center
    p-8
    bg-white
    border-2
    border-[#E4E2E2]
    space-y-6
    w-260 h-460
    ${className}`}>
        <span className="bg-[#FAA635] h2 w-full "></span>
        <Aspas/>
        {img}
        <p className='text-[#5C585B] text-lg text-center'>{children}</p>
        <strong>{children}</strong>
        <p>{children}</p>
    </div>
}