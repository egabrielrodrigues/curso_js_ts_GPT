//🧠 Conceito 1 — Operadores

const a = 10;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a > b);
console.log(a < b);
console.log(a === b);
console.log(a !== b);

// sempre use ===
// nunca use ==



// Operadores lógicos 

const idade = 18;
const temCarteira = true;

console.log(idade >= 18 && temCarteira);



//🧠 Conceito 2 — IF / ELSE (decisão)

const idade_if = 17;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// 🧠 Conceito 3 — ELSE IF

const nota = 7;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
