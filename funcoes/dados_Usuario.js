import entradaDeDados from "readline-sync";

const dadosUsuario = (nome) => {
    nome = entradaDeDados.question('Digite seu nome: ');
    console.log('\n');
    return nome;
};

export default dadosUsuario;