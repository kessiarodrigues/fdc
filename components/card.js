import Image from 'next/image'

export default function CardFdc({children, className, img}){
    return(
        <div className={` flex flex-col items-center p-8 bg-white border-2 border-secondary_gray_medium space-y-6 h-full ${className}`}>
            {img}
            <p className='text-primary_gray_dark text-base text-center'>{ children }</p>
        </div>
    )
}