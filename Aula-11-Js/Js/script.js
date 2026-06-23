// 9. Exemplo prático: Alterando título com botão

function alterarTitulo () {
    document.getElementById("titulo").innerText= "Título alterado com JavaScript!"
} 

function  mostrarMensagem() {
    alert ("Você clicou no botão!")
}

// 10. Capturando valores de campos input

function mostrarNome () {
    let nome= document.getElementById ("nome").value;
    document.getElementById ("resultado").innerText= "Olá, " + nome + "!";
}

// 11. Exemplo prático: Verificando maioridade

function verificarIdade () {
    let idade= Number (document.getElementById ("idade").value);

    if (idade >= 18) {
        document.getElementById ("resultadoIdade").innerText= "Você é maior de idade. ";
    } else {
        document.getElementById ("resultadoIdade").innerText= "Você é menor de idade. ";
    }
}

// 12. Alterando imagens com DOM

function trocarImagem () {
    document.getElementById ("imagem").src="img/imagem-tec-2.webp";
}

// 13. Mostrar e esconder elementos

function esconderTexto () {
    document.getElementById ("texto").style.display="none";
}
function mostraTexto () {
    document.getElementById ("texto").style.display="block";
}

// 14. Criando elementos com JavaScript

function criarParagrafo () {
    let novoParagrafo = document.createElement ("p");
    novoParagrafo.innerText = "Este parágrafo foi criado com JavaScript.";

    document.getElementById ("area").appendChild(novoParagrafo);
}

// 15. Removendo elementos

function removerAviso () {
    document.getElementById ("aviso").remove();
}

// 16. Projeto prático: Calculadora de IMC

function calcularIMC () {
    let peso= Number (document.getElementById("peso").value);
    let altura= Number (document.getElementById ("altura").value);

    let imc= peso / (altura * altura);

    document.getElementById ("resultado-peso").innerText = "Seu IMC é: " + imc.toFixed(2);
}

// 17. Projeto prático: Lista de tarefas simples

function adicionarTarefa () {
    let textoTarefa = document.getElementById ("tarefa").value;

    let item = document.createElement ("li");
    item.innerText = textoTarefa;

    document.getElementById ("lista").appendChild (item);

    document.getElementById ("tarefa").value = "";

    let botaoExcluir = document.createElement ("button");
    botaoExcluir.innerText = "Excluir";

    botaoExcluir.onclick = function () {
        item.remove ();
    }

    item.appendChild (botaoExcluir);
    document.getElementById ("lista").appendChild (item);

    document.getElementById ("tarefa").value = "";
}