// 🎮 FOR

// 🚀 Desafio 1:

/* for (let i = 0; i <= 10; i++) {
    console.log (i)
} */

// 🚀 Desafio 2:

/* for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log (i)
    }
} */

// 🚀 Desafio 3:

/* for (let i = 5; i > 0; i--) {
    console.log (i)
} console.log ("LANÇAMENTO!") */

// 🎮 Aplicação prática: Tabuada:

/* let numero=7;

for (let i = 0; i <=10; i++) {
    console.log (numero + " x " + i + " = " + (numero * i));
} */

// 🔄 WHILE

// Exemplo:

/* let bateria=100;

while (bateria >= 0)  {
    console.log ("Bateria: " + bateria + "%")
    bateria -=20
} */

// 🎮 Exemplo: Sistema de Senha:

/* let senha= "";

while (senha !== "123") {
    senha= prompt ("Digite a sua senha:")
} alert ("Acesso liberado!") */

// 🚀 Desafio 4:

/* let energia=100;

while (energia >= 0) {
    console.log ("Energia: " + energia + "%")
    energia -= 10
} */

// 🔄 DO WHILE

// Exemplo:

/* let credito=0;

do {
    console.log ("Tentando jogar...")
} while (credito > 0) */

// 🚀 Desafio 5:

/* let opcao;

do {
    opcao=Number (prompt ("Digite: 1. Jogar - 2. Ver ranking - 3. Sair"))
    switch (opcao) {
        case 1: alert ("Iniciando o jogo...")
        break;
        case 2: alert ("Acessando o ranking...")
        break;
        case 3: alert ("Sair")
        break;
        default: alert ("Digite novamente");
    } 
} while (opcao !== 3) */

// 📦 Vetores (Arrays)

// Exemplo:

/* let playlist= [
    "Música 1",
    "Música 2",
    "Música 3",
    "Música 4",
    "Música 5"
];

for (let i = 0; i < playlist.length; i++) {
    console.log (playlist[i]); 
} */

// 🎮 Exemplo: Lista de Jogos:

/* let jogos = [
    "Minecraft",
    "Fifa",
    "Clash Royale",
    "Roblox",
    "Fórmula 1"
]

for (i = 0; i < jogos.length; i++) {
    console.log (jogos[i])
} */

// 🚀 Desafio 6:

/* let filmes = [
    "Vingadores",
    "Homem-aranha",
    "Toy story",
    "Carros",
    "F1"
]

for (i = 0; i < filmes.length; i++) {
    console.log (filmes[i])
} */

// 🚀 Desafio 7 e Desafio 8:

/* let notas = [7, 8, 10, 5, 10] 

let soma=0;

for (let i = 0; i < notas.length; i++) {
    soma= soma + notas[i]
} console.log ("Valor total: " + soma)

let media= soma / notas.length;

console.log (media); */

// 🚀 Desafio 9:

/* let idades= [15, 18, 22, 13, 30];

let maior= idades[0];

for (let i= 0; i < idades.length; i++) {
    if (idades[i] > maior) {
        maior= idades[i]
    }
} console.log (maior); */

// 🚀 Desafio 10:

/* let precos= [10.50, 25.00, 8.99, 12.75];

let menor=precos[0];

for (i=0; i < precos.length; i++) {
    if (precos[i] < menor) {
        menor=precos[i]
    }
} console.log (menor) */

// 🏆 Projeto Final da Aula:

/* let jogadores= [];
let pontuacao= [];

for (let i= 0; i < 3; i++) {

    let nome= prompt ("Digite o seu nickname:");
    let pontos= Number (prompt ("Digite a sua pontuação:"));

    jogadores.push(nome);
    pontuacao.push(pontos);
}

let ranking= "Ranking dos jogadores: "

for (let i= 0; i < jogadores.length; i++) {
    ranking += jogadores[i] + " - " + pontuacao[i] + " pontos. "
}

alert (ranking); */