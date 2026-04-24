import bgHero from "../../assets/bg_hero_a.png"

import "./hero.css"

export function Hero(){
    return(
        <section className="hero-container">
            <img src={bgHero} alt="Background_section" />
            <div className="hero-text">
                <p>
                    <span className="name">João Tiago</span><br/>
                    <span className="front-end">FRONT-END</span><br/>
                    <span className="developer">Developer</span>
                </p>
                <div className="hero-btn">
                    <a href="#sobre"><button>Sobre</button></a>
                    <a href="#portfolio"><button>Portfólio</button></a>
                </div>
            </div>
        </section>
    )
}