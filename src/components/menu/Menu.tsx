import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo from '../../assets/logo_white.png'

import './menu.css'



export function Menu(){

    const [ scrolled, setScrolled ] = useState(false)

    useEffect(()=>{
        function handleScroll(){
            if(window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return(
        <nav className={`container-nav ${scrolled ? 'scrolled' : ''}`}>
            <a href="/"><img src={logo} alt="Logo"/></a>
            <ul className="nav-menu">
                <li><a href="/">Home</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfólio</a></li>
                <li><a href="/">Currículo</a></li>
            </ul>
            <div className="nav-icons">
                <a href="https://www.linkedin.com/in/jo%C3%A3o-tiago-mattos-silva-042189391/" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/joaotiagoprofissional" target="_blank"><FaGithub /></a>
                <a href="https://wa.me/5521972149736?text=ol%C3%A1%20vim%20pelo%20portfolio" target="_blank"><FaWhatsapp /></a>
            </div>
        </nav>
    )
}