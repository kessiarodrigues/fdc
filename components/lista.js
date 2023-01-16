// const [active, setActive] = useState(false);

//  useEffect(() => {
//      console.log(`3 var teste ${active}`)
//      }, [active])
import Setinha from "../public/img/setinha.svg"

export default function Lista({children, className}) {
    return (
        <div className="bg-secondary_gray_medium p-6 flex-row">
            
                <span className="text-tertiary_orange">1.</span>
                <p className="font-OpenSans text-primary_gray_dark text-base">{children}</p>
                <Setinha className="rotate-180 h-6 w-6 transform " aria-hidden="true"></Setinha>

        </div>
    )
}