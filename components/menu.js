import Button from "./button.js"
import X from "../public/img/x.svg"
import SetaButton from "../public/img/setabutton.svg"

export default function Menu({className, closeMenu}) {

    return (
        <>
        <div className={` p-4 bg-white absolute top-0 left-0 w-full flex flex-col  transition-all lg:space-x-4 lg:py-0 lg:px-0 lg:flex-row lg:relative lg:tranlate-y-0 r py-6 space-y-4 ${className}` }>
                    
                    <button onClick={closeMenu} className="self-end">
                        <X className="h-6 "/>
                    </button>

                    <div className="flex ">
                        <Button href="" className="w-72 bg-tertiary_orange lg:mt-0">
                            QUERO COMEÇAR AGORA 
                        </Button>
                        <button href="" className="bg-primary_blue_dark w-12 flex items-center ">
                            <SetaButton className="pl-4 w-8 "/> 
                        </button>
                    </div>
                    <Button href="" className="pr-8 bg-white border border-primary_blue_dark overflow-hidden text-primary_blue_dark " >
                        RETOMAR
                    </Button>
                </div>  
                {/* <div className=" fixed inset-0 bg-primary_gray_dark opacity-70 lg:hidden"></div> */}
                </>        
    ) 
}