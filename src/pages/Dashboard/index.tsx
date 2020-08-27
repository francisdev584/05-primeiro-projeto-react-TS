import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Dashboard</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/13040361?s=460&u=772f79bd22316aff5a1bd750a1c7af8846900385&v=4"
            alt="Francinildo Rodrigues"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Bla Bla Bla ....</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/13040361?s=460&u=772f79bd22316aff5a1bd750a1c7af8846900385&v=4"
            alt="Francinildo Rodrigues"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Bla Bla Bla ....</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/13040361?s=460&u=772f79bd22316aff5a1bd750a1c7af8846900385&v=4"
            alt="Francinildo Rodrigues"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Bla Bla Bla ....</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
