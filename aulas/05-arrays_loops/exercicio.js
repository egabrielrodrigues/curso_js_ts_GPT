const produtos = [
    { nome: "mesa", preco: 100 },
    { nome: "bola", preco: 20 },
    { nome: "cadeira", preco: 45 }
]

for (const produto of produtos) {
    console.log(produto.nome);
}

const usuarios = [
    { nome: "Camila", senha: 1234 },
    { nome: "Isa", senha: 1234 },
    { nome: "Mari", senha: 1234 }
]

function cadastrarUsuario(nome, senha) {
    usuarios.push({ nome: nome, senha: senha })
}

function listar() {
    for (const user of usuarios) {
        console.log(user.nome)
    }
}

function buscarNome(nome) {
    return usuarios.find(u => u.nome === nome);
}

cadastrarUsuario("Bibi", 4321);
listar();
console.log(buscarNome("Camila"));

