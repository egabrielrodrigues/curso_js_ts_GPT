/*🧠 Conceito — Funções

Função = bloco de código reutilizável.
*/

//Exemplo:

function saudacao() {
    console.log("Olá");
}

saudacao();

//Parâmetros
function somar(a, b) {
    return a + b;
}

console.log(somar(2, 3));
//Arrow function (padrão moderno)
const multiplicar = (a, b) => {
    return a * b;
};