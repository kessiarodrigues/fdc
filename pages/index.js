import Logo from "../public/img/header.svg"
import Vector from "../public/img/Vector.svg"
import KV from "../public/img/KV.svg"
import Seta from "../public/img/seta.svg"
import Button from "../components/button.js"
import FDC from "../public/img/FDCmarcadagua.svg"
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
import Ranking from "../public/img/ranking.svg"
import Ranking2 from "../public/img/Ranking2.svg"
import MSGicon from "../public/img/msg.svg"
import Linkedin from "../public/img/in.svg"
import Instagram from "../public/img/ig.svg"
import Youtube from "../public/img/yt.svg"
import Facebook from "../public/img/fb.svg"
import Twitter from "../public/img/tt.svg"
import Spotify from "../public/img/spotify.svg"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import Slider from "../components/sliders"
import { useRef } from "react"
import Menu from "../components/menu"

function App() {
    const settings = {
        spaceBetween: 50,
        slidesPerView: 1,
        pagination: {
            clickable: true,

        },
    }

    const menu = useRef()
    return (
        <>
            <div className="App">

                <header className='fixed bg-white flex p-4 h-fit w-full justify-between items-center z-10'>
                    <div  className="h-auto">
                        <Logo  className="h-8" />
                    </div>
                    <button onClick={()=> console.log(menu)}>
                        <Vector className="h-3 onclick:"/>
                    </button>
                </header>

                <main>
                    <article className='bg-[#005E83] px-6 py-8 '>
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

                    <div className="bg-[#EFEDED] pt-6">
                        <div className=" bg-[#EFEDED] ml-6 border-l-4 border-[#FAA635]">
                            <article className="flex-col items-center pl-6 space-y-4" >
                                <p className=' text-[#005E83] font-OpenSans text-base leading-[22.4px]'>
                                    Cadastre-se e faça a <b>avaliação de maturidade </b>da sua empresa <b>gratuitamente</b> .
                                </p>

                                <Button className="bg-[#2A9FBC]" > 
                                    QUERO COMEÇAR AGORA 
                                </Button>
                            </article> 
                        </div>
                        <div className="bg-[#EFEDED] pt-8">
                            <Seta className="h-9 w-9 animate-bounce m-auto rotate"/>
                        </div>
                    
                    </div>


                    
                    
                        <article className="flex-col p-8 bg-[#EFEDED] text-center" >
                                <div className="border-y-8 border-white mt-8 py-6">
                                    <h1 className="text-[#2A9FBC] text-2xl font-NexaSlab mb-2 font-light leading-[28.8px]" >
                                        SUA EMPRESA É ÚNICA
                                    </h1>    
                                    <span className="text-[#005E83] text-base pb-4 font-NexaSlab font-bold pl-4 leading-[22.4px]">
                                        É por isso que a jornada dela também tem que ser
                                    </span>
                                </div>    
                                
                        </article>


                        <article className="text-[#5C585B] bg-[#EFEDED] p-8 pb-3 leading-[22.4px] font-OpenSans">
                        <p className="pb-3">
                                Avaliamos as <b>lacunas do seu negócio</b> para sugerir os conteúdos que precisam ser trabalhados e isso faz toda a diferença.
                            </p>
                            <p className="">
                                Seu time ainda pode adicionar módulos de interesse de acordo com a cultura e as necessidades pontuais da organização, formando uma <b>grade curricular flexível.</b> 
                            </p>
                        </article>
                    
                    
                    
                    <div className="p-6 py-8 bg-[#EFEDED] relative overflow-hidden">
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

                        <FDC className="absolute h-[200px] w-[600px] left-1/2 translate-x-1/2  translate-y-1/2 bottom-60"/>
                    </div>

                    
                    

                    <div>
                        
                        <Decoracao1 className="absolute"/>
                        <Decoracao2 className="absolute"/>
                        <Decoracao3 className="absolute"/>
                    </div>




                    <div className="bg-[#5C585B] px-6 mt-8 py-6">

                            <div className="border-y-8  border-[#686366]">
                                <h1 className="text-[#2A9FBC] text-2xl font-NexaSlab font-light my-10 text-center leading-[28.8px]" >
                                    SOBRE A FDC
                                </h1>
                            </div>
                                    
                            <p className="text-white pb-3 mt-10 font-OpenSans text-base leading-[22.4px]" >
                                <b>A FDC impulsiona o desenvolvimento</b> das organizações com uma abordagem focada em resultados, inclusão e sustentabilidade para os negócios. Olhamos para a real necessidade, bem como para os desafios e objetivos das organizações e de seus profissionais, contribuindo para o aprimoramento das competências gerenciais e individuais e a melhoria constante da governança, gestão e dos resultados.
                            </p> 
                            <p className="text-white font-OpenSans text-base leading-[22.4px]">  
                                 <b>Nossas soluções geram impacto e compreendem temáticas globais,</b> acompanhando as transformações do mundo e da sociedade na velocidade que o mercado exige.  
                            </p> 

                            <div className="pt-14 pb-6 px-14">
                                <div className="bg-[#FAA635] text-white font-NexaSlab font-Bold text-xl px-4 py-2" >
                                    <p>45 anos</p>
                                </div>
                                    <p className="px-3 py-2 text-white ">
                                        de história de sucesso
                                        e liderança
                                    </p>
                            </div>


                            <div className="px-14">
                                <div className="bg-[#FAA635] text-white font-NexaSlab font-Bold text-xl px-4 py-2" >
                                    <p>+1 milhão</p>
                                </div>
                                    <p className="px-3 py-2 text-white ">
                                        de executivos capacitados em programas
                                    </p>
                            </div> 


                            <div className="px-14 pb-6 pt-2">
                                <div className="bg-[#FAA635] text-white font-NexaSlab font-Bold text-xl px-4 py-2" >
                                    <p>+700</p>
                                </div>
                                    <p className="px-3 py-2 text-white ">
                                     docentes com notoriedade nacional e internacional
                                    </p>
                            </div> 

                            <div className="px-14 ">
                                <div className="bg-[#FAA635] text-white font-NexaSlab font-Bold text-xl px-4 py-2" >
                                    <p>+900</p>
                                </div>
                                    <p className="px-3 py-2 text-white ">
                                        empresas cliente atendidas por ano
                                    </p>
                            </div>   

                            <div className="px-14 pb-6">
                                <div className="bg-[#FAA635] text-white font-NexaSlab font-Bold text-xl px-4 py-2" >
                                    <p>+37 mil</p>
                                </div>
                                    <p className="px-3 py-2 text-white ">
                                     executivos participantes por ano
                                    </p>
                            </div> 
                            
                            <div className="px-14">
                                <div className="bg-[#FAA635] text-white font-NexaSlab font-Bold text-xl px-4 py-2" >
                                    <p>1° em Educação</p>
                                </div>
                                    <p className="px-3 py-2 text-white ">
                                        Executiva na América Latina há 15 anos consecutivos*
                                    </p>
                            </div>

                            <div className="px-14 pt-6">
                                <div className="bg-[#FAA635] text-white font-NexaSlab font-Bold text-xl px-4 py-2" >
                                    <p>9° melhor</p>
                                </div>
                                    <p className="px-3 py-2 text-white ">
                                        escola de negócios do mundo*
                                    </p>
                            </div> 



                            <div className="text-white text-center py-8" >
                                <p className="mb-8" >*Segundo o ranking de Educação Executiva 2022 do Financial Times.</p>
                                <Button className="bg-[#686366] border border-white" >CONHEÇA MAIS</Button>
                            </div>



                            <div className="pb-14 pt-6">
                            <Ranking/>  
                            </div>  

                                          
                    </div>

                    <Slider settings={settings}>
                            <SwiperSlide>
                                    <Carrossel1/>
                            </SwiperSlide>

                            <SwiperSlide>
                                    <Carrossel2/>
                            </SwiperSlide>

                            <SwiperSlide>
                                    <Carrossel3/>
                            </SwiperSlide>
                    </Slider>     

                    <article className="flex-col p-8 content-center bg-[#FFFFFF]" >
                                <div className="border-y-8 border-[#E4E2E2] mt-8 py-6">
                                    <h1 className="text-[#2A9FBC] text-2xl font-NexaSlab text-center font-light leading-[28.8px]" >
                                        SUA EMPRESA EM BOA COMPANHIA
                                    </h1>    
                                </div>  

                                <p className="text-[#5C585B] py-8 font-OpenSans text-base leading-[22.4px]">
                                    Confira os depoimentos de executivos e colaboradores que já participaramde programas empresariais da FDC.
                                </p>  

                                <div className="p-6 py-8 ">
                        <Slider settings={settings}>
                            <SwiperSlide>
                                <Card2Fdc img={<Icon1/>}>
                                    A escolha baseada na qualidade e no reconhecimento que a FDC possui. É uma qualidade de nível internacional e que tem um conhecimento muito amplo e grande do mercado brasileiro e latino americano e dentro das nossas necessidades, isso era chave.”
                                    Leandro Jasiocha 
                                    VP de Linhas de Produtos Latam
                                </Card2Fdc>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card2Fdc img={<Icon2/>}>
                                    Gostei muito do assunto Saúde Organizacional, foi de grande relevância para mim. A forma como o professor explanou sobre os cenários que veremos nos próximos anos foi bem importante para nos anteciparmos às novas tendências.”
                                    Wanessa Lourenço
                                    Analista Comercial SENAI GOIÁS
                                </Card2Fdc>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card2Fdc img={<Icon3/>}>
                                    O curso me fez refletir bastante sobre meu processo logístico e as contribuições significativas que a gestão do nosso estoque pode gerar para atender melhor aos clientes, que cada dia mais se tornam os precursores das mudanças das empresas.”
                                    Kênio Fonseca Ferreira
                                    Gerência de Logística Metalúrgica Amapá LTDA
                                </Card2Fdc>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card2Fdc img={<Icon4/>}>
                                    Todos os professores utilizaram uma didática na transmissão de temas e, ao mesmo tempo, com um aprofundamento que nos leva à reflexão e ação. A leveza e a energia positiva que transmitem são diferenciais que prendem a atenção e fazem a “viagem conjunta” ser muito enriquecedora, além do conteúdo.”
                                    Ticiano Arrais Sydriao de Alencar
                                    Gerente de Agência Banco do Nordeste
                                </Card2Fdc>
                            </SwiperSlide>
                        </Slider>
                    </div>
                    </article>
                    
                    <article className="flex-col p-8 content-center bg-[#E4E2E2]" >
                                <div className="border-y-8 border-[#FFFFFF] mt-8 py-6">
                                    <h1 className="text-[#2A9FBC] text-2xl font-NexaSlab text-center font-Light" >
                                        FAQ
                                    </h1>    
                                </div>  

                    </article>

                    <article className="bg-[#005E83] py-20 " >
                        <p className="text-white pb-8 px-6 font-NexaSlab font-bold leading-[28px] text-xl"> 
                            Transforme os gaps do seu negócio em oportunidades com a FDC
                        </p>

                        <div className=" bg-[#005E83] ml-6 border-l-4 border-[#FAA635]">
                            <div className=" flex-col items-center pl-4 space-y-6" >
                                <p className=' text-[#FFFFFF] text-base font-OpenSans leading-[22.4px] '>
                                    Cadastre-se agora mesmo e faça a <b>avaliação de maturidade </b>da sua empresa.
                                </p>

                                <Button className="bg-[#2A9FBC]" > 
                                    QUERO COMEÇAR AGORA 
                                </Button>
                            </div> 
                        </div>
                    </article>

                    <footer className="text-[#5C585B] p-6 pb-14 text-center">
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
                </main>

                {/* <Menu></Menu> */}
            </div>
        </>
    );
}

export default App;