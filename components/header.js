import Logo from "../public/img/header.svg"
import Vector from "../public/img/Vector.svg"
import Menu from "../components/menu"
import { useState } from "react"

export default function Header(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <header className='fixed bg-white flex p-4 h-fit w-full justify-between items-center z-10'>
                    <div alt="Fundação Dom Cabral" className="h-auto">
                        <Logo  className="h-8" />
                    </div>
                    <button alt="Abrir Menu" onClick={()=> setIsOpen(!isOpen)}>
                        <Vector className="h-3"/>
                    </button>
                    <Menu closeMenu={()=> setIsOpen(!isOpen)} className={`${isOpen?"block":"hidden"}`}></Menu>
                </header>
    )
}
