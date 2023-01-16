import Ranking2 from "../public/img/Ranking2.svg"
import MSGicon from "../public/img/msg.svg"
import Linkedin from "../public/img/in.svg"
import Instagram from "../public/img/ig.svg"
import Youtube from "../public/img/yt.svg"
import Facebook from "../public/img/fb.svg"
import Twitter from "../public/img/tt.svg"
import Spotify from "../public/img/spotify.svg"

export default function Footer(){
    return(
        <footer className="text-primary_gray_dark p-6 pb-14 text-center">
                        <p className="font-NexaSlab font-black pb-2">
                            Fale conosco
                        </p>
                        <p className=" font-OpenSans text-base leading-[22.4px]">
                            0800 941 9200
                        </p>
                        <p className="pb-8 font-OpenSans text-base leading-[22.4px]">
                            atendimento@fdc.org.br
                        </p>

                        <hr></hr>

                        <div className="flex items-center justify-between space-x-6">
                            <MSGicon className="h-24" />
                            <Linkedin className="h-24"/>
                            <Instagram className="h-24"/>
                            <Youtube className="h-24"/>
                            <Facebook className="h-24"/>
                            <Twitter className="h-24"/>
                            <Spotify className="h-24"/>
                        </div>

                        <hr></hr>


                        <Ranking2 className="pt-12"/>
                    </footer>
    )
}