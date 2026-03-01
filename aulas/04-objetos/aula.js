const produto = {
    nome: "Teclado",
    preco: 150,
    estoque: 10
};

console.log(produto);

produto.estoque = 20;

console.log(produto);

produto.categoria = "Informática";

console.log(produto);

const usuario = {
    nome: "Eliabe",
    senha: "1234",
    login(senhaDigitada) {
        return senhaDigitada === this.senha;
    }
}

console.log(usuario.login("1234"));