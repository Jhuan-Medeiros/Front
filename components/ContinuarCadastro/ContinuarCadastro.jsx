import React from 'react'
import chaveLogo from "../img/chave.png";
import senaiLogo from "../img/senai.png";
import { Link } from 'react-router-dom';

const ContinuarCadastro = () => {
  return (
<div className='cadastro'>

<div className='inputCadastro'>
  <div className='geralCadastro'>

    <h1 className='titulo'>CADASTRO</h1>

    <label className="titulosCaixas" htmlFor="usuario">Idade:</label>
    <input className="caixas" type='date' name="usuario" id="usuario" required />

    <label className="titulosCaixas" htmlFor="email">Turma: </label>
    <input className="caixas" type="text" name="email" id="email" required />

    <label className="titulosCaixas" htmlFor="turno">Turno:</label>
      <select className="caixas" name="turno" id="turno">
        <option value="manha">Manhã</option>
        <option value="tarde">Tarde</option>
      </select>

    <label className="titulosCaixas" htmlFor="confirmarSenha">CPF:</label>
    <input className="caixas" type="number" name="confirmaSenha" id="confirmaSenha" required />

    <Link className='button' to={'/carometro/home'}>Cadastrar</Link>
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

export default ContinuarCadastro
