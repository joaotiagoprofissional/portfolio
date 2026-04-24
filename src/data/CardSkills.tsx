import git from "../assets/git.png"
import bootstrap from "../assets/bootstrap.png"
import css from "../assets/css.png"
import firebase from "../assets/firebase.png"
import html from "../assets/html.png"
import javascript from "../assets/javascript.webp"
import react from "../assets/react.png"
import sass from "../assets/sass.png"
import tailwind from "../assets/tailwind.png"
import typescript from "../assets/typescript.png"


export type Card = {
    id: number
    image: string
    title: string
    description: string
}

const cards: Card[] = [
    {
        id: 1,
        image: git,
        title: "Git",
        description: "Controle de versão que permite acompanhar mudanças no código, colaborar em equipe e manter histórico seguro dos projetos.",
    },
    {
        id: 2,
        image: html,
        title: "HTML",
        description: "Estruturação semântica de páginas web, garantindo acessibilidade, organização do conteúdo e base sólida para aplicações modernas.",
    },
    {
        id: 3,
        image: css,
        title: "CSS",
        description: "Estilização de interfaces com foco em responsividade, consistência visual e experiência do usuário em diferentes dispositivos.",
    },
    {
        id: 4,
        image: sass,
        title: "Sass",
        description: "Pré-processador CSS que melhora a organização e reutilização de estilos, tornando o código mais escalável e fácil manutenção.",
    },
    {
        id: 5,
        image: bootstrap,
        title: "Bootstrap",
        description: "Framework CSS que agiliza o desenvolvimento de interfaces responsivas com componentes prontos e padronização de layout.",
    },
    {
        id: 6,
        image: tailwind,
        title: "Tailwind",
        description: "Framework utility-first que permite criar interfaces modernas com agilidade, mantendo consistência e controle total sobre o design.",
    },
    {
        id: 7,
        image: javascript,
        title: "JavaScript",
        description: "Linguagem essencial para criação de interatividade e lógica em aplicações web, permitindo experiências dinâmicas e funcionais.",
    },
    {
        id: 8,
        image: react,
        title: "React JS",
        description: "Biblioteca para construção de interfaces reativas e componentizadas, facilitando a criação de aplicações escaláveis e de alta performance.",
    },
    {
        id: 9,
        image: typescript,
        title: "TypeScript",
        description: "Superset do JavaScript que adiciona tipagem estática, aumentando a segurança, previsibilidade e manutenção do código.",
    },
    {
        id: 10,
        image: firebase,
        title: "Firebase",
        description: "Plataforma backend que oferece autenticação, banco de dados e hospedagem, permitindo desenvolver aplicações completas com rapidez.",
    },
]



export default cards