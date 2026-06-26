function cadastroFilme() {
    let filme= document.getElementById ("nome-do-filme").value;
    let genero= document.getElementById ("genero-do-filme").value;
    let lancamento= document.getElementById("ano-de-lancamento").value;

    let item = document.createElement("li");
    item.innerText = filme;
    document.getElementById("lista").appendChild(item);

    let item2 = document.createElement("li");
    item2.innerText = genero;
    document.getElementById("lista").appendChild(item2);

    let item3 = document.createElement("li");
    item3.innerText = lancamento;
    document.getElementById("lista").appendChild(item3);
}