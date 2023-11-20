import selecionarPerguntasAleatorias from "./funcoes/embaralhar_Perguntas.js";
import estatisticasJogo from "./funcoes/estatiscas_Jogo.js";
import {validacaoDeDados} from "./funcoes/validar_Dados.js";
 

const exibirQuestoes = ((questoes) => {
    questoes = selecionarPerguntasAleatorias()
    validacaoDeDados(questoes)
    estatisticasJogo()
});

exibirQuestoes()








