import React from 'react';
import './style.css';

function App() {
  return (
    <div className="box-rosa">
      <h1>Bem-vindo ao Meu Portfólio</h1>

      <img src="public/imagens/img.jpg" alt="Foto minha" 
      className="foto"/>

      <p>
        Olá! Me chamo Renata Dias Carneiro, uma pessoa dedicada e organizada, apaixonada por aprender e crescer pessoalmente. Gosto muito de leitura, cuidar da saúde e tenho um talento especial para pintar unhas, uma atividade que me traz satisfação e criatividade. Estou sempre em busca de novos conhecimentos e desafios, valorizando o trabalho em equipe e o desenvolvimento constante. Também participo de projetos que apoiam e incentivam mulheres, buscando contribuir para um ambiente mais colaborativo e inclusivo.
      </p>

      <h2>Um pouco mais</h2>
      <p>
        Atualmente estou no 4° período de Ciência da Computação e busco
        constantemente aprender novas tecnologias. Ainda não tenho interesse em uma área específica no ramo, mas penso em seguir carreira acadêmica.
      </p>

      <h2>Minhas Habilidades</h2>
      <ul>
        <li><strong>Linguagens:</strong> Python, Java, SQL, C.</li>
        <li><strong>Banco de Dados:</strong> MySQL.</li>
        <li><strong>Ferramentas:</strong> GitHub, VS Code.</li>
        <li>
          <strong>Outras habilidades:</strong> Trabalho em equipe, resolução de
          problemas, aprendizado rápido.
        </li>
      </ul>

      <h2>Experiência e projetos</h2>
      
      <p>
        <strong>Projeto Mulheres na Computação (2024 - Atual)</strong>
        <br />
        O projeto Mulheres na Computação tem como objetivo incentivar e apoiar
        mulheres que desejam ingressar e se desenvolver na área de tecnologia e
        computação. Como participante, tenho a oportunidade de trabalhar em
        conjunto com outras mulheres talentosas, compartilhando experiências,
        aprendendo sobre novas tecnologias e desenvolvendo habilidades em
        ambientes colaborativos. Além disso, o projeto promove atividades como
        workshops, palestras e hackathons, proporcionando um ambiente de
        networking e aprendizado contínuo.
      </p>

      <p>
        <strong>Algoritmos de ordenação</strong>
        <br />
        O projeto teve como intuito ordenar um database de mais de 1 milhão de dados usando algoritmos de ordenação, trabalhados na disciplina de Laboratório de Estrutura de Dados.
        <br />

        <a href="https://github.com/ellerimx/projetoLEDA-transformacoes" target="_blank" rel="noreferrer"> Projeto LEDA</a>
      </p>
      
      <p>
        <strong>Jogo em Python</strong>
        <br />
        O projeto teve como intuito criar um jogo em python utilizando a biblioteca PGame0 do python, para um estágio.
        <br />

        <a href="https://github.com/reediias/jogo_python" target="_blank" rel="noreferrer">
        Jogo python</a>
      </p>

       <p>
        <strong>Bloco de Notas</strong>
        <br />
        O projeto teve como intuito a criação de um bloco de notas feito em Python, utilzando a biblioteca tkinter da linguagem.
        <br />

        <a href="https://github.com/reediias/Bloco-de-Notas" target="_blank" rel="noreferrer">
        Bloco de notas</a>
      </p>

      <h2>Redes Sociais</h2>
      <ul>
        <li>
          <a href="https://github.com/reediias" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/ree.diaas"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>

      <h2>Contato</h2>
      <p>
        Você pode me contatar pelo e-mail:{' '}
        <a href="mailto:diasrenataara@gmail.com">Meu e-mail</a>
      </p>
    </div>
  );
}

export default App;