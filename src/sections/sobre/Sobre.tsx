import logoAbout from "../../assets/logo_white.png"
import "./sobre.css"

export function Sobre(){
    return(
        <section className="container-about" id="about">
            <div className="about-content">
                <p>
                    Sou desenvolvedor front-end com foco em criar interfaces funcionais, performáticas e orientadas à
                    experiência do usuário. Trabalho transformando necessidades reais em soluções digitais claras, aplicando
                    boas práticas de desenvolvimento, organização de código e atenção a detalhes que impactam diretamente no
                    uso do produto. Tenho evoluído constantemente para ampliar minha atuação para full stack, buscando não
                    apenas dominar tecnologias, mas entender o problema por completo e usar destas ferramentas para entregar
                    soluções consistentes de ponta a ponta. Nos projetos que desenvolvi, priorizei performance, responsividade
                    e usabilidade, sempre com uma abordagem prática e orientada a resultado. Mais do que escrever código, meu
                    objetivo é resolver problemas de forma eficiente e construir produtos que realmente façam sentido para
                    quem usa.
                </p>
                <img src={ logoAbout } alt="" />
            </div>
        </section>
    )
}