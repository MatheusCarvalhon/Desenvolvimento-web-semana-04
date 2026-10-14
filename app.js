// =======================================================
// BLOCO 1 – Arrays e Métodos (map, filter, reduce, forEach)
// =======================================================
console.log("--- BLOCO 1: Arrays e Métodos ---");

// 1. Array de nomes
const nomes = ["Alan", "Alvaro", "John Peter"];
nomes.forEach(nome => console.log(`Olá, ${nome}!`));

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log("Nomes em maiúsculas (map):", nomesMaiusculos);

// 2. Array de preços
const precos = [10, 25, 40, 5, 60];
const precosAcimaDe20 = precos.filter(preco => preco > 20);
console.log("Preços acima de 20 (filter):", precosAcimaDe20);

const somaDosPrecos = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log("Soma de todos os preços (reduce):", somaDosPrecos);

// 3. Array de objetos produtos
const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 120 },
    { nome: "Borracha", preco: 4 },
    { nome: "Estojo", preco: 35 }
];

const nomesDosProdutos = produtos.map(produto => produto.nome);
console.log("Nomes extraídos dos produtos (map):", nomesDosProdutos);

const produtosAbaixoDe50 = produtos.filter(produto => produto.preco < 50);
console.log("Produtos com preço menor que 50 (filter):", produtosAbaixoDe50);

const somaPrecoProdutos = produtos.reduce((acc, produto) => acc + produto.preco, 0);
console.log("Soma total dos produtos (reduce):", somaPrecoProdutos);

console.log("Lista de Produtos:");
produtos.forEach(produto => console.log(`Nome: ${produto.nome} - R$ ${produto.preco}`));


// =======================================================
// BLOCO 2 – Manipulação do DOM
// =======================================================
console.log("\n--- BLOCO 2: Manipulação do DOM ---");

// 1. Seleção e alteração do H1
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Estudante de Engenharia"; // Fique à vontade para colocar o seu nome aqui

// 2. Seleção de parágrafos
const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach((p, index) => console.log(`Parágrafo ${index + 1}: ${p.textContent}`));

// 3. Inserindo itens na lista via innerHTML (usando += para manter os do HTML)
const lista = document.querySelector("#lista");
lista.innerHTML += `
    <li>Item innerHTML 1</li>
    <li>Item innerHTML 2</li>
`;

// 4 e 5. Criação via createElement e uso de classList
const novoItem = document.createElement("li");
novoItem.textContent = "Terceiro item";
lista.append(novoItem);

novoItem.classList.add("destaque");
console.log("O novo item contém a classe 'destaque'?", novoItem.classList.contains("destaque"));

// 6. Criando itens a partir de um array
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
tarefas.forEach(tarefa => {
    const liTarefa = document.createElement("li");
    liTarefa.textContent = tarefa;
    lista.append(liTarefa);
});

// Aplicando classe ao primeiro <li> da página
const primeiroLi = document.querySelector("li");
if (primeiroLi) {
    primeiroLi.classList.add("feito");
}

// Contagem total de itens
const totalDeItens = document.querySelectorAll("li").length;
console.log("Quantidade total de itens na lista:", totalDeItens);


// =======================================================
// BLOCO 3 – Eventos e Event Delegation
// =======================================================
console.log("\n--- BLOCO 3: Eventos --- (Interaja com a página para ver os logs)");

const botao = document.querySelector("#botao");

// 1 e 2. Eventos no botão
botao.addEventListener("click", () => {
    console.log("Clicou!");
});

botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

// 3. Evento no input de nome (keyup)
const campoNome = document.querySelector("#nome");
campoNome.addEventListener("keyup", (e) => {
    console.log("Valor atual:", e.target.value);
});

// 4. Event Delegation na lista
lista.addEventListener("click", (e) => {
    // Verifica se o alvo clicado foi de fato um <li>
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log("Item clicado/alternado:", e.target.textContent);
    }
});

// 5. Formulário e e.preventDefault()
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita recarregamento da página
    
    const textoTarefa = campoTarefa.value.trim();
    
    if (textoTarefa !== "") {
        const liNovo = document.createElement("li");
        liNovo.textContent = textoTarefa;
        lista.append(liNovo); // Event Delegation já cobre este elemento novo automaticamente!
        
        campoTarefa.value = ""; // Limpa o campo
        console.log(`Nova tarefa adicionada: "${textoTarefa}"`);
    } else {
        console.log("Tentativa de adicionar tarefa vazia bloqueada.");
    }
});