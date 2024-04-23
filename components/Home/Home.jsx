import React, { useState, useEffect } from "react";
import "../Home/Home.css";
import { Link } from "react-router-dom";
// Importa o header
import Header from "../Header/Header";
import Navbar from "../NavBar/Navbar";
// Importa as páginas das salas
import mec from "../img/imec.png";
import dev from "../img/dev.png";
import elec from "../img/elec.png";

function TodoList() {
  return (
    // Chama o header
    <div className="home">
      <Header />

      {/* Div para a área das turmas */}
      <div className="turma">
      <Navbar/>

        {/* Turma de desenvolvimento de sistemas */}
        <div className="dev ">
          <img src={dev} alt="Senai" className="senaiLogoHome" />
          <h2 className="titulo">Desenvolvimento Sistemas</h2>

          {/* Salas da turma */}
          <div className="salas">
            <Link to={"/carometro/alunos"} className="styleHref">
              IDEV - 1
            </Link>

            <Link to={"/carometro/alunos"} className="styleHref">
              IDEV - 2
            </Link>

            <Link to={"/carometro/alunos"} className="styleHref">
              IDEV - 3
            </Link>

          </div>
        </div>

        {/* Turma de mecânica */}
        <div className="mec">
          <img src={mec} alt="Senai" className="senaiLogoHome" />
          <h2 className="titulo">Mecânica</h2>

          {/* Salas da turma */}
          <div className="salasMec">
            <Link to={"/carometro/alunos"} className="styleHref">
              IMEC - 1
            </Link>
            <Link to={"/carometro/alunos"} className="styleHref">
              IMEC - 2
            </Link>
            <Link to={"/carometro/alunos"} className="styleHref">
              IMEC - 1
            </Link>
          </div>
        </div>
        
        {/* Turma de eletro eletrônica */}
        <div className="ele">
          <img src={elec} alt="Senai" className="senaiLogoHome" />
          <h2 className="titulo">Eletrônica</h2>

          {/* Salas da turma */}
          <div className="salas">
          <Link to={"/carometro/alunos"} className="styleHref">
              ILEC - 1
            </Link>
            <Link to={"/carometro/alunos"} className="styleHref">
              ILEC - 1
            </Link>
            <Link to={"/carometro/alunos"} className="styleHref">
              ILEC - 1
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
