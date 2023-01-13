import Image from 'next/image'

export default function CardFdc({children, className, img}){
    return(
        <div className={` flex
                          flex-col
                          items-center
                          p-8
                          bg-white
                          border-2
                          border-[#E4E2E2]
                          space-y-6
                          
                          ${className}`}>
            {img}
            <p className='text-[#5C585B] text-lg text-center'>{ children }</p>
        </div>
    )
}