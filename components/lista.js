// const [active, setActive] = useState(false);

//  useEffect(() => {
//      console.log(`3 var teste ${active}`)
//      }, [active])
import Setinha from "../public/img/setinha.svg"

export default function Lista({children, numero}) {
    return (
        <button className="bg-medium_gray-2 py-6 flex  w-full font-OpenSans ">
                <strong className="text-tertiary_orange">
                    {numero}
                </strong>

                <strong className="text-start  text-primary_gray_dark text-base w-full pl-2">
                    {children}
                </strong>

                <Setinha className=" h-6 w-6" aria-hidden="true"></Setinha>
        </button>
    )
}
