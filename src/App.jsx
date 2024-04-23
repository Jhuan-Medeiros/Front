//Insere as rotas no projeto
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// Início da importação as paginas feitas
import Login from "../components/Login/Login.jsx";
import Cadastro from "../components/Cadastro/Cadastro.jsx";
import Home from "../components/Home/Home.jsx";
import Alunos from "../components/Alunos/Alunos.jsx";
import DetalhesAluno from "../components/DetalhesAlunos/DetalhesAlunos.jsx";
import Navbar from "../components/NavBar/Navbar.jsx";
import ContinuarCadastro from "../components/ContinuarCadastro/ContinuarCadastro.jsx";
//Fim das importações das páginas

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* cria as rotas e seus caminhos */}
        <Routes>
          {/* Define as rotas e seus caminhos */}
          <Route path="/carometro/" element={<Login />} exact  />
          <Route path="/carometro/home" element={<Home />} />
          <Route path="/carometro/cadastro" element={<Cadastro />} />
          <Route path="/carometro/alunos" element={<Alunos />} />
          <Route path="/carometro/continuarCadastro" element={<ContinuarCadastro />} />

          {/* Rotas e caminhos para as páginas de cada aluno e dos alunos da sala */}
          <Route path="/carometro/aluno/:id" element={<DetalhesAluno />} />
          <Route path="*" element={<Alunos />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;