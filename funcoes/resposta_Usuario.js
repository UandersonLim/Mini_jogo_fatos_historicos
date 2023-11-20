import entradaDeDados from "readline-sync"

const respostaUsuario = ((resposta) => {
    resposta = entradaDeDados.question('Digite sua resposta (ano): ');
    return resposta;
});

export default respostaUsuario;