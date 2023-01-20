import MSGicon from "../public/img/msg.svg"
import Linkedin from "../public/img/in.svg"
import Instagram from "../public/img/ig.svg"
import Youtube from "../public/img/yt.svg"
import Facebook from "../public/img/fb.svg"
import Twitter from "../public/img/tt.svg"
import Spotify from "../public/img/spotify.svg"
import Certificacao1 from "../public/img/certificacao1.svg"
import Certificacao2 from "../public/img/certificacao2.svg"
import Certificacao3 from "../public/img/certificacao3.svg"

export default function Footer(){
    return(
        <footer className="text-primary_gray_dark p-6 pb-14 text-center">
                        <p className="font-NexaSlab font-black pb-3">
                            Fale conosco
                        </p>
                        <p href="" className=" font-OpenSans text-base leading-[22.4px] pb-1 ">
                            0800 941 9200
                        </p>
                        <p href="" className="pb-8 font-OpenSans text-base leading-[22.4px]">
                            atendimento@fdc.org.br
                        </p>

                        <hr></hr>

                        <div className="flex items-center justify-between space-x-6">
                            <MSGicon href="" alt="Mensagem" className="h-24" />
                            <Linkedin href="" alt="Linkedin" className="h-24"/>
                            <Instagram href="" alt="Instagram" className="h-24"/>
                            <Youtube href="" alt="Youtube" className="h-24"/>
                            <Facebook href="" alt="Facebook" className="h-24"/>
                            <Twitter href="" alt="Twitter" className="h-24"/>
                            <Spotify href="" alt="Spotify" className="h-24"/>
                        </div>

                        <hr></hr>

                        <div className="flex flex-col   pt-10 items-center space-y-6 bg-white ">
                                <h3 className="font-NexaSlab font-black text-primary_gray_dark leading-[19.2px]">Ranking e Certificações</h3>
                                <Certificacao1 className=""/>
                                <Certificacao2 />
                                <Certificacao3/>
                            </div> 
                        
                    </footer>
    )
}

