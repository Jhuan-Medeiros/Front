import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../DetalhesAlunos/DetalhesAlunos.css';
import Header from '../Header/Header';
import Navbar from '../NavBar/Navbar';

const DetalhesAluno = () => {
  const { id } = useParams();
  const [aluno, setAluno] = useState(null);

  useEffect(() => {
    const fetchAluno = async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api/?seed=student-${id}&inc=name,dob,gender,email,phone,picture`);
        setAluno(response.data.results[0]);
      } catch (error) {
        console.error('Erro ao buscar detalhes do aluno:', error);
      }
    };

    fetchAluno();
  }, [id]);

  return (
    <div className="detalhesAluno">
      <Header />

      <div   className='NavbarDetalhesAlunos'>

      <Navbar/>
      <div className="navbarAlunos">
      <h2 className="tituloAlunos">Detalhes do Aluno</h2>

        {aluno ? (
          <div className="infoAluno">
            <div>
              <img src={aluno.picture.large} alt="Estudante" className="fotoAluno" />
            </div>

            <div className="infoApi">
              <label>
                <strong>Nome:</strong>
                <input className="inputAlunos" type="text" disabled value={`${aluno.name.first} ${aluno.name.last}`} />
              </label>

              <label>
                <strong className="genero">Gênero:</strong>
                <input className="inputAlunos" type="text" disabled value={`${aluno.gender}`} />
              </label>

              <label>
                <strong>Idade:</strong>
                <input className="inputAlunos" type="text" disabled value={`${aluno.dob.age}`} />
              </label>

              <label>
                <strong>Email:</strong>
                <input className="inputAlunos" type="text" disabled value={`${aluno.email}`} />
              </label>

              <label>
                <strong>Telefone:</strong>
                <input className="inputAlunos" type="text" disabled value={`${aluno.phone}`} />
              </label>
            </div>
            <div className="areaProfessor">
        <h4 className="tituloOcorrencia">Motivos de ocorrência</h4>
        <div className="inputOcorrencia">
          <div className="quebraLinha">
            <div className="linha1">
              <div className="margin">
                <input className="radio" type="radio" name="" id="" />
                <label htmlFor="indisciplina">Indisciplina</label>
              </div>

              <div className="margin">
                <input className="radio" type="radio" name="" id="" />
                <label htmlFor="educacao">Falta de Educação</label>
              </div>

              <div className="margin">
                <input className="radio" type="radio" name="" id="" />
                <label htmlFor="depredacao">Depredação do patrimônio</label>
              </div>
            </div>

            <div className="linha2">
              <div className="margin">
                <input className="radio" type="radio" name="" id="" />
                <label htmlFor="regras">Descumprir Regras</label>
              </div>

              <div className="margin">
                <input className="radio" type="radio" name="" id="" />
                <label htmlFor="brigas">Brigas</label>
              </div>
            </div>
          </div>

          <div className="linha3">
            <div className="outros">
              <label htmlFor="outros" className="radio">
                Outros:
              </label>
              <input className="inputOutros" type="text" placeholder="" />
            </div>
          </div>

          <div className="horario">
            <label htmlFor="horario">Horário: </label>
            <select id="horario" name="horario">
              <option value="ensino_medio">Ensino Médio</option>
              <option value="ensino_tecnico">Ensino Técnico</option>
            </select>
          </div>

          <div className="professor">
            <label className="radio" htmlFor="professor">
              Professor:
            </label>
            <input className="professor" type="text" placeholder="" />
          </div>

          <button type="submit" className="buttonOcorrencia">
            Enviar
          </button>
        </div>
      </div>
          </div>
        ) : (
          <p>Carregando...</p>
        )}
              <div className="anotacao">
        <h3>Observações sobre o Aluno:</h3>
        <input type="text" className="inputAnotacao" />
      </div>
      </div>
      </div>
    </div>
  );
};

export default DetalhesAluno;
