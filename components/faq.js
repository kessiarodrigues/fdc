import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

export default function FaqPrincipal() {
    const data = {
        rows: [
            {
                title: <strong className="text-base" ><span className="text-[#FAA635]">1. </span>Como participar do programa Corporate - Learn & Drive para empresas da FDC?</strong>,
                content: <p>Para participar do programa, é necessário realizar o cadastro da sua empresa e responder à avaliação de maturidade criada por especialistas da Fundação Dom Cabral.
                Após concluí-lo, você receberá o raio-x completo da empresa, dividido em 7 dimensões, sendo elas: Liderança & Pessoas, Gestão Estratégica dos Negócios, Marketing & Vendas, Finanças, Governança & Compliance, Inovação & Transformação Digital e Gestão Estratégica de Supply - com uma sugestão de trilha de desenvolvimento elaborada pela FDC especialmente para sua organização.</p> ,
            },
            {
                title: <strong className="text-base"><span className="text-[#FAA635]">2. </span>Quanto tempo leva para preencher o raio-x e obter os resultados da minha empresa?</strong> ,
                content: <p>O raio-x leva cerca de 20 minutos para ser concluído. As questões contam com escalas de 0 a 10, dispensando respostas abertas e englobam as 7 dimensões de gestão. O resultado será exibido após o término do preenchimento, no próprio navegador do respondente. Vale ressaltar que o comparativo do raio-x é feito com base em métricas de grandes corporações nacionais e internacionais.</p> ,
            },
            {   
                title: <strong className="text-base"><span className="text-[#FAA635]">3. </span> Quanto precisarei investir?</strong>,
                content: <p>O investimento varia de acordo com o número de módulos indicados ou selecionados, sendo 6 o mínimo e 12 o máximo, uma vez que trata-se de um programa sugerido especialmente para sua empresa, diante do resultado do raio-x, com mais de 220 módulos disponíveis para o Learn, além do Drive que conta com metodologia exclusiva da FDC para transposição para a prática. O valor será indicado após as etapas que sucedem o preenchimento do raio-x.</p> ,
            },
            {
                title: <strong className="text-base"><span className="text-[#FAA635]">4. </span>Qual é a modalidade do programa?</strong> ,
                content: <p>O Corporate Learn & Drive opera na modalidade Blended Learning (módulos síncronos e assíncronos), oferecendo ainda mais flexibilidade aos executivos e colaboradores da empresa interessada.</p> ,
            },
            {
                title: <strong className="text-base"><span className="text-[#FAA635]">5. </span>É possível alterar a trilha sugerida pela FDC?</strong> ,
                content: <p>Sim. A trilha sugerida é criada a partir das respostas fornecidas pela empresa no raio-x. A sugestão da FDC é fruto de centenas de combinações projetadas por nossos especialistas e professores após diversos estudos. Ainda assim, a FDC preza pela vontade do cliente e a  empresa participante poderá adicionar ou excluir módulos à trilha de desenvolvimento sugerida ou ainda, formar sua própria trilha a partir das opções de módulos contempladas no Corporate Learn & Drive. Lembrando que o pilar Learn deve conter, no mínimo, 6 módulos, sendo recomendado que a trilha não ultrapasse 12 módulos.</p> ,
            },
            {
                title: <strong className="text-base"><span className="text-[#FAA635]">6. </span>Porque o programa se chama Corporate Learn & Drive?</strong> ,
                content: <p>Por se tratar de um programa para empresas baseado principalmente em 2 pilares: o Learn (aprenda), composto por módulos prioritariamente assíncronos de até 3 horas cada que poderão ser consumidos no tempo do participante, e o Drive (direcione), que são 5 aulas síncronas de 4 horas cada, totalizando 20 horas e tem como objetivo transpor o conhecimento para a prática por meio de metodologia exclusiva da FDC.</p> ,
            },
        ],
    };
    
    const styles = {
        bgColor: 'bg-medium_gray-2',
        rowTitleColor: "#5C585B",
         rowContentColor: 'grey',
         arrowColor: "#2A9FBC",
         fontSize: "16px",
         
    };
    
    const config = {
         animate: true,
        // arrowIcon: "V",
         tabFocus: true
    };

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}