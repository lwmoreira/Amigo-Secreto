//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value;

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  nomeAmigos.push(nome);
  input.value = "";

  atualizarLista();
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  nomeAmigos.forEach(function (nome) {
    let item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  if (nomeAmigos.length === 0) {
    alert("Alista de amigos está vazia!");
    return;
  }

  let nomeSorteado = Math.floor(Math.random() * nomeAmigos.length);
  let amigoSorteado = nomeAmigos[nomeSorteado];

  let resultadoDoSorteio = document.getElementById("resultado");
  resultadoDoSorteio.textContent = `O amigo sorteado é: ${amigoSorteado}`;
}
