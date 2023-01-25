import Button from "../components/button.js"

export default function FaqView(){
  return (
    <article className="bg-primary_blue_dark py-20 ">
      <p className="text-white pb-6 px-6 font-NexaSlab font-bold leading-[28px] text-xl">
        Transforme os gaps do seu negócio em oportunidades com a FDC
      </p>

      <div className=" bg-primary_blue_dark ml-6 border-l-4 border-tertiary_orange">
        <div className=" flex-col items-center pl-8 space-y-6">
          <p className=" text-white text-base font-OpenSans leading-[22.4px] pr-6">
            Cadastre-se agora mesmo e faça a <b>avaliação de maturidade </b>
            da sua empresa.
          </p>
          <Button
            href=""
            className="bg-primary_blue hover:text-primary_blue_dark hover:bg-white"
          >
            QUERO COMEÇAR AGORA
          </Button>
        </div>
      </div>
    </article>
  );
}