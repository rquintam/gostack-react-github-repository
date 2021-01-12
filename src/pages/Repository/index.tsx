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
            src="https://avatars2.githubusercontent.com/u/52363607?s=88&u=527f5670bdbef6b8c6af4d195cb697e36daf6d8a&v=4"
            alt="Rquintam"
          />
          <div>
            <strong>rquintam/repositorio</strong>
            <p>descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1000</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>50</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>10</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="link/repositorio">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
