import Card2Fdc from "../components/card2.js"
import { SwiperSlide } from "swiper/react"
import 'swiper/css'
import Slider from "../components/sliders"

export default function CompaniesView2(){
  const settings = {
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
  };
  return (
    <article className="flex-col p-8 content-center bg-white">
      <div className="border-y-8 border-secondary_gray_medium mt-8 py-6">
        <h2 className="text-primary_blue text-2xl font-NexaSlab text-center font-light leading-[28.8px]">
          SUA EMPRESA EM BOA COMPANHIA
        </h2>
      </div>

      <p className="text-primary_gray_dark py-6 font-OpenSans text-base leading-[22.4px]">
        Confira os depoimentos de executivos e colaboradores que já participaram
        de programas empresariais da FDC.
      </p>

      <div className="p-6 ">
        <Slider settings={settings}>
          <SwiperSlide className="top-14">
            <Card2Fdc
              nome={"Leandro Jasiocha"}
              cargo={"VP de Linhas de Produtos Latam"}
            >
              A escolha baseada na qualidade e no reconhecimento que a FDC
              possui. É uma qualidade de nível internacional e que tem um
              conhecimento muito amplo e grande do mercado brasileiro e latino
              americano e dentro das nossas necessidades, isso era chave.”
            </Card2Fdc>
          </SwiperSlide>
          <SwiperSlide>
            <Card2Fdc
              nome={"Wanessa Lourenço"}
              cargo={"Analista Comercial SENAI GOIÁS"}
            >
              Gostei muito do assunto Saúde Organizacional, foi de grande
              relevância para mim. A forma como o professor explanou sobre os
              cenários que veremos nos próximos anos foi bem importante para nos
              anteciparmos às novas tendências.”
            </Card2Fdc>
          </SwiperSlide>
          <SwiperSlide>
            <Card2Fdc
              nome={"Kênio Fonseca Ferreira"}
              cargo={"Gerência de Logística Metalúrgica Amapá LTDA"}
            >
              O curso me fez refletir bastante sobre meu processo logístico e as
              contribuições significativas que a gestão do nosso estoque pode
              gerar para atender melhor aos clientes, que cada dia mais se
              tornam os precursores das mudanças das empresas.”
            </Card2Fdc>
          </SwiperSlide>
          <SwiperSlide>
            <Card2Fdc
              nome={"Ticiano Arrais Sydriao de Alencar"}
              cargo={"Gerente de Agência Banco do Nordeste"}
            >
              Todos os professores utilizaram uma didática na transmissão de
              temas e, ao mesmo tempo, com um aprofundamento que nos leva à
              reflexão e ação. A leveza e a energia positiva que transmitem são
              diferenciais que prendem a atenção e fazem a “viagem conjunta” ser
              muito enriquecedora, além do conteúdo.”
            </Card2Fdc>
          </SwiperSlide>
        </Slider>
      </div>

      {/* <FDC className="absolute h-[200px] w-[500px] inset-0 top-60  "/> */}
    </article>
  );
}