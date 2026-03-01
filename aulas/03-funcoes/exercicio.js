function numeroEhPar(num) {
    return num % 2 === 0 ? "Par" : "Impar";
}

function calcularDobro(a) {
    return a * 2;
}

function frase(nome, idade) {
    console.log(`Olá ${nome} voce tem ${idade} anos`);
};

function login(usuario, senha) {
    return usuario === "admin" && senha === "1234";
}

console.log(numeroEhPar(4));
console.log(calcularDobro(5));
frase("Eliabe", 40)
console.log(login("admin", "1234"));