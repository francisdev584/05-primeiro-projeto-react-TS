import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/13040361?s=460&u=772f79bd22316aff5a1bd750a1c7af8846900385&v=4"
            alt="Francinildo Rodrigues"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>50</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>100</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="#">
          <div>
            <strong>asfasdfsadf</strong>
            <p>asdfasdfsadf</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
        <Link to="#">
          <div>
            <strong>asfasdfsadf</strong>
            <p>asdfasdfsadf</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
        <Link to="#">
          <div>
            <strong>asfasdfsadf</strong>
            <p>asdfasdfsadf</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
