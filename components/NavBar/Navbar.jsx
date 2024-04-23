import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

// Imagens para a barra lateral
import Icone from "../img/list.png";
import Home from "../img/home.png";
import Pendentes from "../img/lista-de-controle.png";
import Agenda from "../img/agenda.png";
import Configuracoes from "../img/config.png";
import Capelo from "../img/capelo.png";

const Navbar = () => {
  const listaStorage = localStorage.getItem("Lista"); //Memória temporária para a lista de tarefas

  //Variáveis para a memória da lista e para novos itens
  const [lista, setLista] = useState(
    listaStorage ? JSON.parse(listaStorage) : []
  );
  const [novoItem, setNovoItem] = useState("");

  useEffect(() => {
    //Retorna os itens da memória local como texto
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

  //Função que adiciona itens à lista
  function adicionaItem(form) {
    form.preventDefault();
    //Variável que retorna o novo item
    if (!novoItem) {
      return;
    }
    setLista([...lista, { text: novoItem, isCompleted: false }]);
    setNovoItem("");
    document.getElementById("input-entrada").focus();
  }

  function clicou(index) {
    const listaAux = [...lista];
    listaAux[index].isCompleted = !listaAux[index].isCompleted;
    setLista(listaAux);
  }

  //Função que apaga itens da lista
  function deleta(index) {
    const listaAux = [...lista];
    listaAux.splice(index, 1);
    setLista(listaAux);
  }

  //Função que apaga todos itens da lista
  function deletaTudo() {
    setLista([]);
  }

  function handleTurmaChange(event) {}

  return (
    // Váriaval para toda a barra
    <div className="navbar">
      {/* Váriavel para a narra lateral */}
      <div className="sidebar">
        <ul>
          {/* Botão para retornar à home */}
          <li><Link to="/carometro/home"> <button><img src={Home} alt="Home" /> Página Inicial</button> </Link></li>

          {/* Botão para ir à agenda */}
          <li>
            <a href="https://youtu.be/LpXQKhQK7nU">
              <button>
                <img src={Agenda} alt="Agenda" /> Agenda
              </button>
            </a>
          </li>
          {/* Botão para ir para a página de tarefas */}
          <li>
            <a href="https://youtu.be/LpXQKhQK7nU">
              <button>
                <img src={Pendentes} alt="Pendentes" /> Pendentes
              </button>
            </a>
          </li>
          {/* Menu dropdown com as turmas */}
          <div className="dropdown-container">
            <select className="turmaDropdown" onChange={handleTurmaChange}>
              <option value="">Turmas...</option>

              <option value="idev1">iDev 1</option>
              <option value="idev2">iDev 2</option>
              <option value="idev3">iDev 3</option>
              <option value="imec1">iMec 1</option>
              <option value="imec2">iMec 2</option>
              <option value="imec3">iMec 3</option>
              <option value="ilec1">iLec 1</option>
              <option value="ilec2">iLec 2</option>
              <option value="ilec3">iLec 3</option>
            </select>
            {/* Linha divisória */}
            <div className="border"></div>
          </div>
          {/* Botão para ir para as configurações da página */}
          <li id="buttonConfig">
            <a href="https://youtu.be/LpXQKhQK7nU">
              <button className="buttonConfig">
                <img src={Configuracoes} alt="Notas" /> Configurações
              </button>
            </a>
          </li>
        </ul>

        {/* Área da lista de tarefas */}
        <div id="lista">
          {/* Título */}
          <p className="tituloTarefa">Adicione uma Tarefa:</p>
          {/* Formulário da lista de tarefas com seus inputs e botões */}
          <form className="formTarefa" onSubmit={adicionaItem}>
            <input
              id="input-entrada"
              type="text"
              value={novoItem}
              onChange={(e) => {
                setNovoItem(e.target.value);
              }}
              placeholder="Adicione uma tarefa"
            />
            <button className="buttonTarefa" type="submit">
              Add
            </button>
          </form>
          {/* Div para a imagem e para itens adicionados na lista de tarefas */}
          <div className="listaTarefas">
            <div style={{ textAlign: "center" }}>
              {lista.length < 1 ? (
                <img className="icone-central" src={Icone} />
              ) : (
                lista.map((item, index) => (
                  <div
                    key={index}
                    className={item.isCompleted ? "item completo" : "item"}
                  >
                    <span
                      onClick={() => {
                        clicou(index);
                      }}
                    >
                      {item.text}
                    </span>
                    <button
                      onClick={() => {
                        deleta(index);
                      }}
                      className="buttonTarefaDeletar"
                    >
                      Deletar
                    </button>
                  </div>
                ))
              )}
              {lista.length > 0 && (
                <button
                  onClick={() => {
                    deletaTudo();
                  }}
                  className="buttonTarefaDeletar"
                >
                  Deletar Todas
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
