import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/52363607?s=400&u=527f5670bdbef6b8c6af4d195cb697e36daf6d8a&v=4"
            alt="Rodrigo Quintam"
          />
          <div>
            <strong>gostack-challenge-nodejs-fundamentals</strong>
            <p>Bootcamp GoStack | Challenge 5 - Node.js Fundamentals</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/52363607?s=400&u=527f5670bdbef6b8c6af4d195cb697e36daf6d8a&v=4"
            alt="Rodrigo Quintam"
          />
          <div>
            <strong>gostack-challenge-nodejs-fundamentals</strong>
            <p>Bootcamp GoStack | Challenge 5 - Node.js Fundamentals</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/52363607?s=400&u=527f5670bdbef6b8c6af4d195cb697e36daf6d8a&v=4"
            alt="Rodrigo Quintam"
          />
          <div>
            <strong>gostack-challenge-nodejs-fundamentals</strong>
            <p>Bootcamp GoStack | Challenge 5 - Node.js Fundamentals</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
