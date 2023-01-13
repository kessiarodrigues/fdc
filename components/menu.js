import Button from "./button.js"
import X from "../public/img/x.svg"

export default function Menu() {

    return (
        <div className="px-4 pb-4 pt-16 bg-white fixed top-0 left-0 w-full flex-col-reverse transition-all lg:space-x-4 lg:py-0 lg:px-0 lg:flex-row lg:relative lg:tranlate-y-0">
                    
                    <X className="h-6 "/>
                    <Button className="button-outline mt-4 lg:mt-0">
                        QUERO COMEÇAR AGORA 
                    </Button>

                    <Button className="bg-[#FAA635]  border-none overflow-hidden pr-16" >
                        RETOMAR
                    </Button>
                </div>
    ) 
}


