import respostaUsuario from "./resposta_Usuario.js";

let contador = 0
const validacaoDeDados = (questoes) => {
    for(let i = 0; i < questoes.length; i++){
        console.log(`Pergunta ${i + 1}: ${questoes[i].pergunta}`)
        const resposta = respostaUsuario();
        if(resposta === questoes[i].resposta){
            console.log('Resposta Correta!')
            contador++
        }else if(resposta === ''){
            console.log(`Resposta invalída!`);
        }else{
            console.log('Resposta errada!')
        }
        console.log("\n");
}
};

const contadorAcertos = (index) => {
    index = contador
    return index;
}

export {validacaoDeDados, contadorAcertos};