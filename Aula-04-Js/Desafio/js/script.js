// (1) Decisão com if/else: Crie uma variável com idade e use if/else para decidir se é maior de idade ou não

let idade=Number (prompt ("Informe a sua idade"));

if (idade >= 18) {
    alert ("Você é maior de idade")
} else {
    alert ("Você é menor de idade")
}

// (2) Múltiplos casos com switch: Crie um switch que classifique um número de 1 a 3 como "Baixo", "Médio" ou "Alto"

let numero= Number (prompt ("Digite um número de 1 a 3"));

switch (numero) {
    case 1: alert ("Baixo") 
    break;
    case 2: alert ("Médio") 
    break;
    case 3: alert ("Alto") 
    break;
    default: alert ("ERRO! Digite novamente um número de 1 a 3")
}

// (3) Ternário: Use operador ternário para verificar se um número é positivo ou negativo

let number= Number (prompt ("Informe um número"));

let climaNumero= number > 0 ? "Positivo" : "Negativo"; alert (climaNumero)

// (4) Lógica combinada: Use if com && para verificar se uma pessoa pode votar (idade >= 16 E nacionalidade brasileira)

let podeVotar= Number (prompt ("Informe a sua idade"));
let nacionalidade= prompt ("Digite sua nacionalidade").toLowerCase ();

if (podeVotar >= 16 && nacionalidade=="brasileiro") {
    alert ("Pode votar")
} else {
    alert ("Não pode votar")
}