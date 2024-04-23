import React from 'react'
import "../Header/Header.css"
// Importa a logo
import senaiLogo from "../img/senai.png";
// Importa o container e navbar do bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
    // Div com todas as informações do header
    <div>
        <div className="header">
          {/* Foto da logo */}

        <Link to={"/carometro/home"} className='linkagem'>
        <button className='logoSenai'>
        <img src={senaiLogo} alt="Senai" className='senaiLogoHome' />
        </button>
        </Link>

        {/* Input para uma barra de pesquisa */}
        <input type="text" className="inputHome" placeholder="Buscar no Carômetro..."/>
        </div>
    </div>
  )
}

export default Header
