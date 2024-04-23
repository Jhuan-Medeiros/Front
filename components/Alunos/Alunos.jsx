import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../Alunos/Alunos.css";
import Header from '../Header/Header';
import Navbar from '../NavBar/Navbar';

const Alunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [turmaSelecionada, setTurmaSelecionada] = useState('');

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=32&nat=br&inc=name,picture,dob,login&age=13-17');
        setAlunos(response.data.results);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchAlunos();
  }, []);

  const extractIdFromImageUrl = (imageUrl) => {
    const idRegex = /\/(\d+)\./;
    const match = imageUrl.match(idRegex);
    return match ? match[1] : null;
  };

  const handleTurmaChange = (event) => {
    setTurmaSelecionada(event.target.value);
  };

  return (
    <div className='alunos'>
      <Header/>
      <div className="flexAlunos">
        <Navbar/>
        <div className="listaAlunos">
          {alunos.map((aluno) => (
            <div key={aluno.login.uuid} className="aluno">
              <Link to={`/carometro/aluno/${extractIdFromImageUrl(aluno.picture.large)}`}>
                <img src={aluno.picture.large} alt="Student" />
                <p className='alunoNome'>{`${aluno.name.first} ${aluno.name.last}`}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alunos;
