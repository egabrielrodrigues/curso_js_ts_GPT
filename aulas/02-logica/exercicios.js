/*
  🧪 Exercício

No exercicio.js

Faça um programa que:

receba idade

diga se pode votar

Regras:

menor que 16 → não vota

16 ou 17 → opcional  
*/

const idade = 7;

if (idade < 16) {
    console.log("não vota");
} else if (idade === 16 || idade === 17) {
    console.log("opcional");
} else {
    console.log("obrigatório");
}

/* 🏆 Desafio (nível júnior real)

Crie sistema de login simples:

const usuario = "admin";
const senha = "1234";

Se acertar → login ok
Se errar → acesso negado
*/



const usuario = "admin";
const senha = "1234";

if (usuario === "admin" && senha === "1234") {
    console.log("login ok");
} else {
    console.log("acesso negado")
}
