import React from 'react';
import chaveLogo from "../img/chave.png";
import senaiLogo from "../img/senai.png";
import "../Cadastro/Cadastro.css";
import { Link } from "react-router-dom";

const Cadastro = () => {
  return (
    <div className='cadastro'>

      <div className='inputCadastro'>
        <div className='geralCadastro'>

          <h1 className='titulo'>CADASTRO</h1>

          <label className="titulosCaixas" htmlFor="usuario">Usuário:</label>
          <input className="caixas" type="text" name="usuario" id="usuario" />

          <label className="titulosCaixas" htmlFor="email">E-mail: </label>
          <input className="caixas" type="email" name="email" id="email" />

          <label className="titulosCaixas" htmlFor="senha">Senha: </label>
          <input className="caixas" type="password" name="senha" id="senha" />

          <label className="titulosCaixas" htmlFor="confirmarSenha">Confirme senha:</label>
          <input className="caixas" type="text" name="confirmaSenha" id="confirmaSenha" />

          <Link to={"/carometro/ContinuarCadastro"} className='button'>Continuar Cadastro</Link>
          <Link to={"/carometro"}>Já tem uma conta?</Link>

        </div>
      </div>


      <div className='cardSenai'>
        <div id='imagens'>
          <img src={senaiLogo} alt="Senai" className='senaiLogo' />
          <img src={chaveLogo} alt="Chave" className='chaveLogoCadastro' />
        </div>

      </div>

      
    </div>
  )
}

export default Cadastro