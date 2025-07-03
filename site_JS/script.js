let itens = JSON.parse(localStorage.getItem("itens")) || [];

const input = document.getElementById("novoItem");
const btnAdicionar = document.getElementById("botaoAdicionar");
const lista = document.querySelector("#listaCompras");
const btnTema = document.querySelector("#botaoTema");
const body = document.body;

itens.forEach(item => adicionarNaTela(item));

botaoAdicionar.addEventListener("click", () => {
    const texto = input.value.trim();
    if (texto) {
        itens.push(texto);
        localStorage.setItem("itens", JSON.stringify(itens));
        adicionarNaTela(texto);
        input.value = "";
    }
});

function adicionarNaTela(texto) {
    const li = document.createElement("li");
    li.textContent = texto;

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir Item";
    botaoExcluir.style.marginLeft = "10px";
    botaoExcluir.style.cursor = "pointer";

    botaoExcluir.addEventListener("click", () => {
        li.remove(); 
        itens = itens.filter(t => t !== texto); 
        localStorage.setItem("itens", JSON.stringify(itens)); 
    });

    li.appendChild(botaoExcluir);
    lista.appendChild(li);
}


botaoTema.addEventListener("click", () => {
    body.classList.toggle("tema-alternativo");
});

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        botaoAdicionar.click(); 
    }
});
