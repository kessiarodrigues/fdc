import Aspas from "../public/img/Aspas.svg"

export default function Card2Fdc ({children, nome, cargo}){
    return(
        <article className="flex flex-col p-8 bg-white border-2
                        border-secondary_gray_medium 
                        font-OpenSans text-base leading-[22.4px] relative text-primary_gray_dark
                         h-full ">

        <div className="bg-tertiary_orange h-2 w-full  "></div>
        <Aspas className="h-8 left-2 ml-4 absolute mt-6"/>

        <p className='relative block pl-4  pt-6 mb-6'>
            {children}
        </p>
        <strong>{nome}</strong>
        <span>{cargo}</span>
    </article>
    )
}