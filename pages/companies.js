import Icon1 from "../public/img/Frame1.svg"
import Icon2 from "../public/img/Frame2.svg"
import Icon3 from "../public/img/Frame3.svg"
import Icon4 from "../public/img/Frame4.svg"
import Icon5 from "../public/img/Frame5.svg"
import Decoracao1 from "../public/img/decoracao1.svg"
import Decoracao2 from "../public/img/decoracao2.svg"
import Decoracao3 from "../public/img/decoracao3.svg"
import Slider from "../components/sliders"
import { SwiperSlide } from "swiper/react"
import 'swiper/css'
import CardFdc from "../components/card"

export default function CompaniesView(){
  const settings = {
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
  };
  return (
    <div>
      <div className="flex-col px-6 py-1 bg-medium_gray-2 text-center 2xl: px-64 ">
        <div className="border-y-8 border-white mt-2 py-6 2xl: mt-28 py-12 ">
          <h2 className="text-primary_blue text-2xl font-NexaSlab mb-2 font-light leading-[28.8px] 2xl: text-[40px]">
            SUA EMPRESA É ÚNICA
          </h2>
          <span className="text-primary_blue_dark text-base pb-4 font-NexaSlab font-bold pl-4 leading-[22.4px]">
            É por isso que a jornada dela também tem que ser
          </span>
        </div>
      </div>

      <div className="text-primary_gray_dark bg-medium_gray-2 p-8 pb-3 leading-[22.4px] font-OpenSans">
        <p className="pb-3">
          Avaliamos as <b>lacunas do seu negócio</b> para sugerir os conteúdos
          que precisam ser trabalhados e isso faz toda a diferença.
        </p>
        <p>
          Seu time ainda pode adicionar módulos de interesse de acordo com a
          cultura e as necessidades pontuais da organização, formando uma{" "}
          <b>grade curricular flexível.</b>
        </p>
      </div>

      <div className="p-6 py-8 bg-medium_gray-2 overflow-hidden ">
        <Slider settings={settings}>
          <SwiperSlide className="bottom-6">
            <CardFdc img={<Icon1 />}>
              <b>Learn:</b> mais de <b>220 módulos</b>, distribuídos em 7
              dimensões empresariais
            </CardFdc>
          </SwiperSlide>
          <SwiperSlide className="bottom-6">
            <CardFdc img={<Icon2 />}>
              <b>Drive:</b> transposição do conhecimento para a prática, com{" "}
              <b>metodologia exclusiva FDC</b>
            </CardFdc>
          </SwiperSlide>
          <SwiperSlide className="bottom-6">
            <CardFdc img={<Icon3 />}>
              <b>Relatórios gerenciais</b> para acompanhar o engajamento do time
            </CardFdc>
          </SwiperSlide>
          <SwiperSlide className="bottom-6">
            <CardFdc img={<Icon4 />}>
              Desenvolvimento <b>Blended Learning,</b> com turmas de até 30
              pessoas
            </CardFdc>
          </SwiperSlide>
          <SwiperSlide className="bottom-6">
            <CardFdc img={<Icon5 />}>
              Conteúdos exclusivos, seguindo o padrão de <br />
              <b>excelência da FDC</b>
            </CardFdc>
          </SwiperSlide>
        </Slider>
      </div>

      <div className=" bg-medium_gray-2 relative pt-20 min-h-300 space-y-40 p-6">
        <Decoracao1 className="absolute top-0 w-[17rem] z-[9]" />
        <Decoracao2 className="pl-10 pr-2 absolute w-[20rem] bottom-20 z-[8]" />
        <Decoracao3 className="relative bottom-0" />
      </div>
      {/* <FDC className="absolute w-[] top-40 inset-y-0 inset-x-0 mx-auto  z-0 "/> */}
    </div>
  );
}