function cadastroFilme() {
    let filme= document.getElementById ("nome-do-filme").value;
    let genero= document.getElementById ("genero-do-filme").value;
    let lancamento= document.getElementById("ano-de-lancamento").value;

    if (filme === "" || genero === "" || lancamento === "") {
        alert("Preencha todos so campos.")
        return;
    };

    let card= document.createElement("div")
    card.classList.add("card");

    card.innerHTML = `
        <p><strong>Nome do filme:</strong> ${filme}</p>
        <p><strong>Gênero:</strong> ${genero}</p>
        <p><strong>Ano de lançamento:</strong> ${lancamento}</p>
    `;

    let botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "Excluir fime";
    
    botaoExcluir.onclick = function() {
        card.remove ();
    };

    card.appendChild(botaoExcluir);

    document.getElementById("lista").appendChild(card);

    document.getElementById("nome-do-filme").value= "";
    document.getElementById("genero-do-filme").value= "";
    document.getElementById("ano-de-lancamento").value= "";
};