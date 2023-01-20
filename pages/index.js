import KV from "../public/img/KV.svg"
import Seta from "../public/img/seta.svg"
import Button from "../components/button.js"
import FDC from "../public/img/FDCmarcadagua.svg"
import FDCescuro from "../public/img/FDCescuro.svg"
import CardFdc from "../components/card"
import Card2Fdc from "../components/card2.js"
import Icon1 from "../public/img/Frame1.svg"
import Icon2 from "../public/img/Frame2.svg"
import Icon3 from "../public/img/Frame3.svg"
import Icon4 from "../public/img/Frame4.svg"
import Icon5 from "../public/img/Frame5.svg"
import Decoracao1 from "../public/img/decoracao1.svg"
import Decoracao2 from "../public/img/decoracao2.svg"
import Decoracao3 from "../public/img/decoracao3.svg"
import Carrossel1 from "../public/img/carrossel1.svg"
import Carrossel2 from "../public/img/carrossel2.svg"
import Carrossel3 from "../public/img/carrossel3.svg"
import Certificacao1 from "../public/img/certificacao1.svg"
import Certificacao2 from "../public/img/certificacao2.svg"
import Certificacao3 from "../public/img/certificacao3.svg"
import { SwiperSlide } from "swiper/react"
import 'swiper/css'
import Slider from "../components/sliders"
import Footer from "../components/footer"
import Retangle from "../components/retangle"
import FaqPrincipal from "../components/faq"
import { useState } from "react"
import Header  from "../components/header"

function App() {
    const settings = {
        spaceBetween: 50,
        slidesPerView: 1,
        pagination: {
            clickable: true,
        },
    }
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="App">
            
                <Header></Header>

                <main>
                    <article className='bg-primary_blue_dark px-6 py-8 '>
                        <h1 className='text-white text-3xl pt-20 mb-2 font-black font-NexaSlab leading-[33.6px]'>
                            CORPORATE LEARN & DRIVE: SUA ACADEMIA DE GESTÃO
                        </h1>

                        <h2 className='text-white font-light text-2xl mb-4 leading-[33.6px]'>
                            Para empresas que querem transformar gaps em oportunidades
                        </h2>
                        
                        <p className='text-white  text-base line-height-[22.4px] mr-15 mb-8 font-OpenSans leading-[22.4px]'>
                            Descubra os gaps do seu negócio com o apoio da FDC e crie <b>trilhas de desenvolvimento específicas</b> para a sua empresa. Com o programa Corporate Learn & Drive, seu time inicia a jornada para o futuro com a <b>melhor escola de negócios da América Latina</b>, cobrindo as principais dimensões necessárias para a evolução dos negócios - é uma verdadeira academia de gestão à sua disposição. <b>A excelência educacional de sempre, em um formato que você nunca viu</b>.
                        </p>

                        <KV className="h-92" />
                    </article>

                    <div className="bg-medium_gray-2 pt-6">
                        <div className=" bg-medium_gray-2 ml-6 border-l-4 border-tertiary_orange">
                            <article className="flex-col items-center pl-8 space-y-6" >
                                <p className=' text-primary_blue_dark font-OpenSans text-base leading-[22.4px]'>
                                    Cadastre-se e faça a <b>avaliação de maturidade </b>da sua empresa <b>gratuitamente</b> .
                                </p>
                                    <Button href="" className="bg-primary_blue" alt="Quero começar agora" > 
                                        QUERO COMEÇAR AGORA 
                                    </Button>
                            </article> 
                        </div>
                        <div className="bg-medium_gray-2 pt-8">
                            <Seta className="h-9 w-9 animate-bounce m-auto rotate"/>
                        </div>
                    </div>


                    
                    <div>
                        <article className="flex-col px-6 py-1 bg-medium_gray-2 text-center" >
                                <div className="border-y-8 border-white mt-2 py-6">
                                    <h2 className="text-primary_blue text-2xl font-NexaSlab mb-2 font-light leading-[28.8px]" >
                                        SUA EMPRESA É ÚNICA
                                    </h2>    
                                    <span className="text-primary_blue_dark text-base pb-4 font-NexaSlab font-bold pl-4 leading-[22.4px]">
                                        É por isso que a jornada dela também tem que ser
                                    </span>
                                </div>    
                        </article>


                        <article className="text-primary_gray_dark bg-medium_gray-2 p-8 pb-3 leading-[22.4px] font-OpenSans">
                            <p className="pb-3">
                                Avaliamos as <b>lacunas do seu negócio</b> para sugerir os conteúdos que precisam ser trabalhados e isso faz toda a diferença.
                             </p>
                            <p>
                                Seu time ainda pode adicionar módulos de interesse de acordo com a cultura e as necessidades pontuais da organização, formando uma <b>grade curricular flexível.</b> 
                            </p>
                        </article>
                    
                    
                    
                        <div className="p-6 py-8 bg-medium_gray-2 overflow-hidden ">
                            <Slider settings={settings}>
                                <SwiperSlide>
                                    <CardFdc img={<Icon1/>}>
                                        <b>Learn:</b> mais de <b>220 módulos</b>, distribuídos em 7 dimensões empresariais
                                    </CardFdc>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardFdc img={<Icon2/>}>
                                        <b>Drive:</b> transposição do conhecimento para a prática, com <b>metodologia exclusiva FDC</b>
                                    </CardFdc>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardFdc img={<Icon3/>}>
                                        <b>Relatórios gerenciais</b> para acompanhar o engajamento do time
                                    </CardFdc>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardFdc img={<Icon4/>}>
                                        Desenvolvimento <b>Blended Learning,</b> com turmas de até 30 pessoas
                                    </CardFdc>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardFdc img={<Icon5/>}>
                                        Conteúdos exclusivos, seguindo o padrão de <b>excelência da FDC</b>
                                    </CardFdc>
                                </SwiperSlide>
                            </Slider>
                        </div>


                        <div className="bg-medium_gray-2 relative pt-20 min-h-300 space-y-40 p-6">
                            <Decoracao1 className="absolute top-0 w-[17rem] z-[9]"/>
                            <Decoracao2 className="pl-10 pr-2 absolute w-[20rem] bottom-20 z-[8]"/>
                            <Decoracao3 className="relative bottom-0"/>
                        </div>
                        {/* <FDC className="absolute w-[] top-40 inset-y-0 inset-x-0 mx-auto  z-0 "/> */}
                    </div>


                    <div className="bg-primary_gray_dark px-6 py-6">

                            <div className="border-y-8  border-[#686366]">
                                <h2 className="text-primary_blue text-2xl font-NexaSlab font-light my-10 text-center leading-[28.8px]" >
                                    SOBRE A FDC
                                </h2>
                            </div>
                                    
                            <p className="text-white pb-3 mt-10 font-OpenSans text-base leading-[22.4px]" >
                                <b>A FDC impulsiona o desenvolvimento</b> das organizações com uma abordagem focada em resultados, inclusão e sustentabilidade para os negócios. Olhamos para a real necessidade, bem como para os desafios e objetivos das organizações e de seus profissionais, contribuindo para o aprimoramento das competências gerenciais e individuais e a melhoria constante da governança, gestão e dos resultados.
                            </p> 
                            <p className="text-white font-OpenSans text-base leading-[22.4px] pb-14">  
                                 <b>Nossas soluções geram impacto e compreendem temáticas globais,</b> acompanhando as transformações do mundo e da sociedade na velocidade que o mercado exige.  
                            </p>

                            <Retangle numeral={'45 anos'}>
                                de história de sucesso
                                        e liderança
                            </Retangle> 

                            <Retangle numeral={'+1 milhão'}>
                                de executivos capacitados em programas
                            </Retangle>

                            <Retangle numeral={'+700'}>
                                docentes com notoriedade nacional e internacional
                            </Retangle>
                            
                            <Retangle numeral={'+900'}>
                                empresas cliente atendidas por ano
                            </Retangle>

                            <Retangle numeral={'+37 mil'}>
                                executivos participantes por ano
                            </Retangle>

                            <Retangle numeral={'1° em educação'}>
                                Executiva na América Latina há 15 anos consecutivos*
                            </Retangle>

                            <Retangle numeral={'9° melhor'}>
                                escola de negócios do mundo*
                            </Retangle>



                            <div className="text-white text-center py-8" >
                                <p className="mb-8" >
                                    *Segundo o ranking de Educação Executiva 2022 do Financial Times.
                                </p>
                                <Button href="" alt="Conheça Mais" className="bg-primary_gray_dark text-white border border-white hover:bg-white hover:text-primary_blue_dark" >
                                    CONHEÇA MAIS
                                </Button>
                            </div>



                            <div className="flex flex-col  pb-14 pt-10 items-center space-y-6 bg-white ">
                            <div className="bg-tertiary_orange h-2 w-12 mr-48 "></div>
                                <h3 className="font-NexaSlab text-bold text-primary_gray_dark leading-[19.2px]">RANKING E CERTIFICAÇÕES</h3>
                                <Certificacao1 className=""/>
                                <Certificacao2 />
                                <Certificacao3/>
                            </div>  

                            {/* <FDCescuro/> */}

                                          
                    </div>

                    <Slider settings={settings}>
                            <SwiperSlide>
                                    <Carrossel1 alt="Faixada de prédio"/>
                            </SwiperSlide>

                            <SwiperSlide>
                                    <Carrossel2 alt="Faixada de prédio"/>
                            </SwiperSlide>

                            <SwiperSlide>
                                    <Carrossel3 alt="Pessoas trabalhando em um escritóro"/>
                            </SwiperSlide>
                    </Slider>     

                    <article className="flex-col p-8 content-center bg-white" >
                                <div className="border-y-8 border-secondary_gray_medium mt-8 py-6">
                                    <h2 className="text-primary_blue text-2xl font-NexaSlab text-center font-light leading-[28.8px]" >
                                        SUA EMPRESA EM BOA COMPANHIA
                                    </h2>    
                                </div>  

                                <p className="text-primary_gray_dark py-6 font-OpenSans text-base leading-[22.4px]">
                                    Confira os depoimentos de executivos e colaboradores que já participaramde programas empresariais da FDC.
                                </p>  

                                <div className="p-6 ">
                        <Slider settings={settings}>
                            <SwiperSlide>
                                <Card2Fdc nome={'Leandro Jasiocha'} cargo={'VP de Linhas de Produtos Latam'}>
                                    A escolha baseada na qualidade e no reconhecimento que a FDC possui. É uma qualidade de nível internacional e que tem um conhecimento muito amplo e grande do mercado brasileiro e latino americano e dentro das nossas necessidades, isso era chave.”
                                </Card2Fdc>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card2Fdc nome={'Wanessa Lourenço'} cargo={'Analista Comercial SENAI GOIÁS'}>
                                    Gostei muito do assunto Saúde Organizacional, foi de grande relevância para mim. A forma como o professor explanou sobre os cenários que veremos nos próximos anos foi bem importante para nos anteciparmos às novas tendências.”
                                </Card2Fdc>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card2Fdc nome={'Kênio Fonseca Ferreira'}cargo={'Gerência de Logística Metalúrgica Amapá LTDA'}>
                                    O curso me fez refletir bastante sobre meu processo logístico e as contribuições significativas que a gestão do nosso estoque pode gerar para atender melhor aos clientes, que cada dia mais se tornam os precursores das mudanças das empresas.”
                                </Card2Fdc>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card2Fdc nome={'Ticiano Arrais Sydriao de Alencar'} cargo={'Gerente de Agência Banco do Nordeste'}>
                                    Todos os professores utilizaram uma didática na transmissão de temas e, ao mesmo tempo, com um aprofundamento que nos leva à reflexão e ação. A leveza e a energia positiva que transmitem são diferenciais que prendem a atenção e fazem a “viagem conjunta” ser muito enriquecedora, além do conteúdo.”
                                </Card2Fdc>
                            </SwiperSlide>
                        </Slider>
                    </div>

                    {/* <FDC className="absolute h-[200px] w-[500px] inset-0 top-60  "/> */}

                    </article>
                    
                    <article className="flex-col p-8 content-center bg-medium_gray-2" >
                                <div className="border-y-8 border-white mt-8 py-8 mb-4">
                                    <h2 className="text-primary_blue text-2xl font-NexaSlab text-center font-Light" >
                                        FAQ
                                    </h2>    
                                </div>  

                                <FaqPrincipal/>
                    </article>
                        

                    <article className="bg-primary_blue_dark py-20 " >
                        <p className="text-white pb-6 px-6 font-NexaSlab font-bold leading-[28px] text-xl"> 
                            Transforme os gaps do seu negócio em oportunidades com a FDC
                        </p>

                        <div className=" bg-primary_blue_dark ml-6 border-l-4 border-tertiary_orange">
                            <div className=" flex-col items-center pl-8 space-y-6" >
                                <p className=' text-white text-base font-OpenSans leading-[22.4px] pr-6'>
                                    Cadastre-se agora mesmo e faça a <b>avaliação de maturidade </b>da sua empresa.
                                </p>
                                <Button href="" className="bg-primary_blue hover:text-primary_blue_dark hover:bg-white" > 
                                    QUERO COMEÇAR AGORA 
                                </Button>
                            </div> 
                        </div>
                    </article>

                    
                    <Footer></Footer>
                </main>
            </div>
        </>
    );
}

export default App;