import Aspas from "../public/img/Aspas.svg"

export default function Card2Fdc ({children, className, nome, cargo}){
    return(
        <div className={`flex
                        flex-col
                        items-center
                        p-6
                        bg-white
                        border-2
                        border-secondary_gray_medium
                        space-y-6
                        font-OpenSans
                        text-base 
                        leading-[22.4px]
                        relative
                        ${className}`}>

        <div className="bg-tertiary_orange h-2 w-full "></div>
        <Aspas className="h-8 left-0 ml-4 absolute "/>

        <p className='text-primary_gray_dark relative block pl-4'>
            {children}
        </p>
        <strong>{nome}</strong>
        <span>{cargo}</span>
    </div>
    )
}