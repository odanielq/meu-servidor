document.addEventListener("DOMContentLoaded", function(){

const titulo = document.getElementById("mensagem");
const botao = document.getElementById("meuBotao");
const contador = document.getElementById("contador");

const mensagens = [

"Servidor funcionando!",
"Requisição recebida!",
"Servidor respondeu!",
"Conexão ativa!",
"Interação registrada!"

];

botao.addEventListener("click", async function(){

const resposta = await fetch("/interagir");

const dados = await resposta.json();

contador.textContent = dados.contador;

const msg = mensagens[Math.floor(Math.random()*mensagens.length)];

titulo.innerText = msg;

});

});