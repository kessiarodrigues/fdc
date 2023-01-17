import Button from "./button.js"
import X from "../public/img/x.svg"

export default function Menu() {

    return (
        <div className=" p-6 bg-white absolute top-0 left-0 w-full flex flex-col transition-all lg:space-x-4 lg:py-0 lg:px-0 lg:flex-row lg:relative lg:tranlate-y-0 r py-6 space-y-4">
                    
                    <X className="h-6 self-end"/>
                    <Button className="w-80 bg-tertiary_orange lg:mt-0">
                        QUERO COMEÇAR AGORA 
                    </Button>
                    
                    <Button className="w-80 bg-white border border-primary_blue_dark overflow-hidden text-primary_blue_dark pr-16" >
                        RETOMAR
                    </Button>
                </div>
    ) 
}