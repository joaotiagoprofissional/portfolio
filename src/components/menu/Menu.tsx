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
                <FaLinkedin />
                <FaGithub />
                <FaWhatsapp />
            </div>
        </nav>
    )
}