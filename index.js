import entradaDeDados from "readline-sync"

const questoes = [
    {id:1, pergunta:'Quando aconteceu o atentado as Torres Gemeas?', resposta:'2001'},
    {id:2, pergunta:'Em que ano foi detectado o primeiro paciente com coronavírus?', resposta:'2019'},
    {id:3, pergunta:'Em que ano Steve Jobs apresentou o primeiro iPhone sem botão físico?', resposta:'2007'},
    {id:4, pergunta:'Qual o ano da morte de Stan Lee?', resposta:'2018'},
    {id:5, pergunta:'Qual o ano o Brasil se tornou tetra campeão Mundial de futebol?', resposta:'1994'},
    {id:6, pergunta:'O primeiro lançamento de foguete da SpaceX ocorreu em?', resposta:'2017'},
    {id:7, pergunta:'Em que ano foi apresentado o primeiro computador eletrônico?', resposta:'1946'},
    {id:8, pergunta:'Em que ano ocorreu a Revolução Francesa?', resposta:'1789'},
    {id:9, pergunta:'Em que ano começou a primeira Guerra Mundial?', resposta:'1914'},
    {id:10, pergunta:'Em que ano terminou a Segunda Guerra Mundial?', resposta:'1945'},
    {id:11, pergunta:'O muro de Berlim foi derrubado em qual ano?', resposta:'1989'},
    {id:12, pergunta:'Qual o ano que o Titanic afundou?', resposta:'1912'},
    {id:13, pergunta:'Qual o ano de nascimento do primeiro Playstation?', resposta:'1994'},
    {id:14, pergunta:'Em que ano a declaração Universal dos direitos Humanos foi assinada?', resposta:'1948'},
    {id:15, pergunta:'Em que ano Word Wide Web(WWW) foi criada por Tim Berners-Lee?', resposta:'1990'},
    {id:16, pergunta:'Em que ano o Euro foi introduzido como moeda única na Europa?', resposta:'1999'},
    {id:17, pergunta:'Em que ano foi abolido a escravidão no Brasil?', resposta:'1888'},
    {id:18, pergunta:'Qual ano foi instaurado o regime militar no Brasil?', resposta:'1964'},
    {id:19, pergunta:'Em que ano o Brasil proclamou a República?', resposta:'1889'},
    {id:20, pergunta:'Em que ano ocorreu a Revolta da Vacina no Rio de Janeiro?', resposta:'1904'},
    {id:21, pergunta:'Em que ano o Brasil sediou a copa do mundo pela primeira vez?', resposta:'1950'},
    {id:22, pergunta:'Em que ano foi adotado o acordo de Paris sobre mudanças climáticas?', resposta:'2015'},
    {id:23, pergunta:'Em que ano ocorreu a guerra das Malvinas?', resposta:'1982'},
    {id:24, pergunta:'Qual foi ano que Martin Luther King realizou o discurso "Eu Tenho um Sonho"?', resposta:'1963'},
    {id:25, pergunta:'Em que ano a União Europeia(UE) foi estabelecida?', resposta:'1993'},
    {id:26, pergunta:'Em que ano a Guerra Civil Espanhola começou?', resposta:'1936'},
    {id:27, pergunta:'Em que ano Nelson Mandela foi libertado da Prisão?', resposta:'1990'},
    {id:28, pergunta:'Em que ano a Alemanhã foi reunificada após a Guerra Fria?', resposta:'1990'},
    {id:29, pergunta:'Qual foi o ano do acidente nuclear em Chernobyl?', resposta:'1986'},
    {id:30, pergunta:'Em que ano o Homem pisou na Lua pela primeira vez?', resposta:'1969'},
];

const embaralharArrayPerguntas = (colecaoPerguntas) => {
    colecaoPerguntas = questoes.sort(() => Math.random() - 0.5);
    return colecaoPerguntas;
};


const selecionarPerguntasAleatorias = (questoes) => {
    questoes = embaralharArrayPerguntas();
    return questoes.slice(0, 10);
};


let contadorAcertos = 0;

const exibirQuestoes = ((questoes) => {
    questoes = selecionarPerguntasAleatorias()
    validacaoDeDados(questoes)
    ResultadoDoGamer()

    
});

const validacaoDeDados = (questoes) => {
    for(let i = 0; i < questoes.length; i++){
        console.log(`Pergunta ${i + 1}: ${questoes[i].pergunta}`)
        const resposta = respostaUsuario();
        if(resposta === questoes[i].resposta){
            console.log('Resposta Correta!')
            contadorAcertos += 1
        }else if(resposta === ''){
            console.log(`Resposta invalída!`);
        }else{
            console.log('Resposta errada!')
        }
        console.log("\n");
}
};

const ResultadoDoGamer = (() => {
    if(contadorAcertos <= 3){
        console.log(`\nJogador(a): ${nome} \nPontuaçao final: ${contadorAcertos}\nOH NÃO! Tente mais uma vez.`);
    }else if(contadorAcertos <= 6) {
        console.log(`\nJogador(a): ${nome}\nPontuação final: ${contadorAcertos}\nBOM TRABALHO! Pratique um pouco mais.`);
    }else if(contadorAcertos <= 7){
        console.log(`\nJogador(a): ${nome}\nPontuação final: ${contadorAcertos}\nMUITO BOM! Você acertou a maioria.`);
    }else{
        console.log(`\nJogador(a): ${nome}\nPontuação final: ${contadorAcertos}\nEXCELENTE! Você é um verdadeiro expert.`);
    };
    
})

const respostaUsuario = ((resposta) => {
    resposta = entradaDeDados.question('Digite sua resposta (ano): ');
    return resposta;
});




console.log(`........QUIZ DE FATOS HISTÓRICOS........\n
Seja Bem-vindo jogador(a)!`);
const nome = entradaDeDados.question('Digite seu nome: ');
console.log('\n');

exibirQuestoes()






