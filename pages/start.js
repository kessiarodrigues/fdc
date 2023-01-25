import KV from "../public/img/KV.svg"
import Seta from "../public/img/seta.svg"
import Button from "../components/button.js"

export default function StartView(){
  return (
    <>
      <div className="bg-primary_blue_dark px-6 py-8 2xl: pl-16 leading-[44.8px] ">
        <h1 className="text-white text-3xl pt-20 mb-2 font-black font-NexaSlab leading-[33.6px]  2xl: mr-[702px] text-[32px] mt-28 leading-[44.8px] ">
          CORPORATE LEARN & DRIVE: SUA ACADEMIA DE GESTÃO
        </h1>

        <p className="text-white font-light text-2xl mb-4 leading-[33.6px] 2xl:leading-[44.8px] text-[32px] leading-[44.8px] ">
          Para empresas que querem transformar gaps em oportunidades
        </p>

        <p className="text-white  text-base line-height-[22.4px] mr-15 mb-8 font-OpenSans leading-[22.4px] 2xl: leading-[25.2px] pr-72">
          Descubra os gaps do seu negócio com o apoio da FDC e crie{" "}
          <b>trilhas de desenvolvimento específicas</b> para a sua empresa. Com
          o programa Corporate Learn & Drive, seu time inicia a jornada para o
          futuro com a <b>melhor escola de negócios da América Latina</b>,
          cobrindo as principais dimensões necessárias para a evolução dos
          negócios - é uma verdadeira academia de gestão à sua disposição.{" "}
          <b>
            A excelência educacional de sempre, em um formato que você nunca viu
          </b>
        </p>

        <KV className="h-92 2xl: h-[646px] " />
      </div>

      <div className="bg-medium_gray-2 pt-6  2xl: px-16 bg-primary_blue_dark">
        <div className=" bg-medium_gray-2 ml-6 border-l-4 border-tertiary_orange 2xl: ml-16 bg-primary_blue_dark ">
          <div className="flex-col items-center pl-8 space-y-6 pr-6 2xl: ">
            <p className=" text-primary_blue_dark font-OpenSans text-base leading-[22.4px] 2xl: text-white text-2xl">
              Cadastre-se e faça a <b>avaliação de maturidade </b>da sua empresa{" "}
              <b>gratuitamente</b> .
            </p>
            <Button
              href=""
              className="bg-primary_blue 2xl: w-full "
              alt="Quero começar agora"
            >
              QUERO COMEÇAR AGORA
            </Button>
          </div>
        </div>
        <div className="bg-medium_gray-2 pt-8 2xl: bg-primary_blue_dark">
          <Seta className="h-9 w-9 animate-bounce m-auto rotate" />
        </div>
      </div>
    </>
  );
}