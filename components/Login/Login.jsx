import React from "react";
import { Link } from "react-router-dom";
import Cadastro from "../Cadastro/Cadastro.jsx";
import senaiLogo from "../img/senai.png";
import chaveLogo from "../img/chave.png";
import "../Login/Login.css";
import "@fontsource/inter";

const Login = () => {

  return (

    // Div que engloba os itens da página
    <div className="login">

      {/* Div para a área lateral com imagens */}
      <div className="logo">
        <img src={senaiLogo} alt="Senai" className="senaiLogo" />
        <img src={chaveLogo} alt="Chave" className="chaveLogo" />
      </div>

      {/* Div para a divisão área das informações de login */}
      <div className="inputLogin">

        {/* Div para os itens da área de login */}
        <div className="geralLogin">

          {/* Título do login */}
          <h1 className="h1">LOGIN</h1>

          {/* Área de preencher o nome do usuário */}
          <label htmlFor="Usuario">Usuário: </label>
          <input type="text" className="input" required />

          {/* Área para a senha do usuário */}
          <label htmlFor="Senha" className="senha">
            Senha:
          </label>
          <input type="password" className="input" id="senhaInput" />

          {/* Div para a área de lembrar senha e para o botão de esqueceu senha*/}
          <div className="checkSenha">
            {/* Div para a caixa de lembrar senha */}
            <div className="checkbox">
              <input type="checkbox" className="radio" />
              <label htmlFor="checkbox" id="lembreSe">
                Lembre - se de mim
              </label>
            </div>

            {/* Redirecionar página de recuperar senha */}
            <a href="https://www.dicionarioinformal.com.br/se+fodeu/">Esqueceu a senha ?</a>
          </div>

          {/* Botão que faz login */}
          <Link to={"/carometro/home"} className="button"> Entrar </Link>

          {/* Botão para ir para tela de cadastro */}
          <p>
            Não tem uma conta ? <Link to={"/carometro/cadastro"}>Inscrever-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
