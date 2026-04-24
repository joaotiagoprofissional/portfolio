import cards from "../../data/CardSkills"

import "./skills.css"

export function Skills(){
    return(
        <section className="skills-container" id="skills">
            {cards.map((card)=>(
                <div className="card-container" key={card.id}>
                <img src={card.image} alt={card.title} />
                <h4>{card.title}</h4>
                <p>{card.description}</p>
            </div>
            ))}
        </section>
    )
}