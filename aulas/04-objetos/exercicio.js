const produto = {
    nome: "Notebook",
    preco: "3000",
    estoque: "5"
}

console.log(`Produto ${produto.nome} custa ${produto.preco} e tem ${produto.estoque} unidades`);

const usuario = {
    nome: "Eliabe",
    senha: "1234",
    login(senhaDigitada) {
        return senhaDigitada === this.senha;
    }
}

console.log(usuario.login("1234"));