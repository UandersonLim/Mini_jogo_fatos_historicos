import questoes from '../dados/dados.js'

const embaralharArrayPerguntas = (colecaoPerguntas) => {
    colecaoPerguntas = questoes.sort(() => Math.random() - 0.5);
    return colecaoPerguntas;
};

const selecionarPerguntasAleatorias = (questoes) => {
    questoes = embaralharArrayPerguntas();
    return questoes.slice(0, 10);
};

export default selecionarPerguntasAleatorias;