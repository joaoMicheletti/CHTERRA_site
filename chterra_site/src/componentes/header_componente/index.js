import React from "react";
import './style.css';
import HeaderLogo from './assets/headerLogochterra.png';
import LogoWhats from './assets/whats.webp';
import LogoInsta from './assets/instaChterra.webp';
import LogoLink from './assets/linkdin.webp';
 
export default function HeaderComponent(){
    return(
        <>
            <div id="faixaTopo">
                <img src={HeaderLogo} alt="logo - nome da empresa" />
                <nav id="vnavigation">
                    <a>Dúvidas frequentes | </a>
                    
                    <a>Contato | </a>
                    <a>Trabalhe conosco</a>
                </nav>
                <div id="containerIconesRedes">
                    <img src={LogoWhats} alt="logo da rede social"/>
                    <img src={LogoInsta} alt="logo da rede social"/>
                    <img src={LogoLink} alt="logo da rede social"/>
                </div>
            </div>
            <div id="faixaPreta">
                <nav>
                    <div className="divMEnu">Área do cliente</div>
                    <div className="divMEnu">A CHTERRA</div>
                    <div className="divMEnu">Serviços</div>
                    <div className="divMEnu">Diferenciais</div>
                </nav>

            </div>
        </>
    );
};