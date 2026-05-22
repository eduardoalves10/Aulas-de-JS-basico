//PRATICA GUIADA

//notas e soma da média
let nota1=10;
let nota2=8;
let nota3=9;

let soma=(nota1+nota2+nota3);
console.log(soma);

let media=(soma/3);
console.log(media);

//análise se o número é par ou não

let numero=9;
let resto=numero%2;
let resultado=resto===0;

console.log(resultado);

//maior idade e tem ingresso

let maiorIdade=true;
let temIngresso=true;
let podeEntrar=maiorIdade && temIngresso;

console.log(podeEntrar);

//se nome estiver vazio, o console pega "Visitante". Mas se exisir um nome na variável "nome", o console pega o que tem dentro dela 

let nome="Eduardo"; 
let usuario = nome || "Visitante"; 

console.log(usuario);

//temperatura

let temperatura=30;
let clima=temperatura > 25 ? "Quente" : "Frio";

console.log(clima);

//questão de matemática

let comParenteses=5*(10+7)-4;
let semParenteses=5*10+7-4;

console.log(comParenteses, semParenteses);

//DESAFIO

//Soma

let num1=10;
let num2=5;
let soma2=num1 + num2;

console.log(soma2);

//Igual ou não

let n1=10;
let n2=5;
let comparaçao=(n1>n2);
let comparaçao2=(n1<=n2);

console.log(comparaçao);
console.log(comparaçao2);