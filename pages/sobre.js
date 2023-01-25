import Retangle from "../components/retangle"
import Button from "../components/button.js"
import Certificacao1 from "../public/img/certificacao1.svg"
import Certificacao2 from "../public/img/certificacao2.svg"
import Certificacao3 from "../public/img/certificacao3.svg"
import Carrossel1 from "../public/img/carrossel1.svg"
import Carrossel2 from "../public/img/carrossel2.svg"
import Carrossel3 from "../public/img/carrossel3.svg"
import { SwiperSlide } from "swiper/react"
import 'swiper/css'
import Slider from "../components/sliders"

export default function Sobre(){
  const settings = {
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
  };
  return (
    <>
      <div className="bg-primary_gray_dark px-6 py-6">
        <div className="border-y-8  border-[#686366]">
          <h2 className="text-primary_blue text-2xl font-NexaSlab font-light my-10 text-center leading-[28.8px]">
            SOBRE A FDC
          </h2>
        </div>

        <p className="text-white pb-3 mt-10 font-OpenSans text-base leading-[22.4px]">
          <b>A FDC impulsiona o desenvolvimento</b> das organizações com uma
          abordagem focada em resultados, inclusão e sustentabilidade para os
          negócios. Olhamos para a real necessidade, bem como para os desafios e
          objetivos das organizações e de seus profissionais, contribuindo para
          o aprimoramento das competências gerenciais e individuais e a melhoria
          constante da governança, gestão e dos resultados.
        </p>
        <p className="text-white font-OpenSans text-base leading-[22.4px] pb-14">
          <b>Nossas soluções geram impacto e compreendem temáticas globais,</b>{" "}
          acompanhando as transformações do mundo e da sociedade na velocidade
          que o mercado exige.
        </p>

        <Retangle numeral={"45 anos"}>
          de história de sucesso e liderança
        </Retangle>

        <Retangle numeral={"+1 milhão"}>
          de executivos capacitados em programas
        </Retangle>

        <Retangle numeral={"+700"}>
          docentes com notoriedade nacional e internacional
        </Retangle>

        <Retangle numeral={"+900"}>empresas cliente atendidas por ano</Retangle>

        <Retangle numeral={"+37 mil"}>
          executivos participantes por ano
        </Retangle>

        <Retangle numeral={"1° em educação"}>
          Executiva na América Latina há 15 anos consecutivos*
        </Retangle>

        <Retangle numeral={"9° melhor"}>escola de negócios do mundo*</Retangle>

        <div className="text-white text-center py-8">
          <p className="mb-8">
            *Segundo o ranking de Educação Executiva 2022 do Financial Times.
          </p>
          <Button
            href=""
            alt="Conheça Mais"
            className="bg-primary_gray_dark text-white border border-white hover:bg-white hover:text-primary_blue_dark"
          >
            CONHEÇA MAIS
          </Button>
        </div>

        <div className="flex flex-col  pb-14 pt-10 items-center space-y-6 bg-white ">
          <div className="bg-tertiary_orange h-2 w-12 mr-48 "></div>
          <h3 className="font-NexaSlab text-bold text-primary_gray_dark leading-[19.2px]">
            RANKING E CERTIFICAÇÕES
          </h3>
          <Certificacao1 className="" />
          <Certificacao2 />
          <Certificacao3 />
        </div>
      </div>

      {/* <FDCescuro/> */}
      <Slider settings={settings}>
        <SwiperSlide>
          <Carrossel1 alt="Faixada de prédio" />
        </SwiperSlide>

        <SwiperSlide>
          <Carrossel2 alt="Faixada de prédio" />
        </SwiperSlide>

        <SwiperSlide>
          <Carrossel3 alt="Pessoas trabalhando em um escritóro" />
        </SwiperSlide>
      </Slider>
    </>
  );
} 