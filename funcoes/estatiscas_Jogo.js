import dadosUsuario from "./dados_Usuario.js";
import boasVindas from "./boas_Vindas.js";
import { contadorAcertos } from "./validar_Dados.js";

boasVindas()

let nomeUsuario = dadosUsuario();

const estatisticasJogo = (nome, resultado) => {
    resultado = contadorAcertos()
    nome = nomeUsuario;
    if(resultado <= 3){
        console.log(`\nJogador(a): ${nome} \nPontuaçao final: ${resultado}\nOH NÃO! Tente mais uma vez.`);
    }else if(resultado <= 6) {
        console.log(`\nJogador(a): ${nome}\nPontuação final: ${resultado}\nBOM TRABALHO! Pratique um pouco mais.`);
    }else if(resultado <= 7){
        console.log(`\nJogador(a): ${nome}\nPontuação final: ${resultado}\nMUITO BOM! Você acertou a maioria.`);
    }else{
        console.log(`\nJogador(a): ${nome}\nPontuação final: ${resultado}\nEXCELENTE! Você é um verdadeiro expert.`);
    };
    
};



export default estatisticasJogo;