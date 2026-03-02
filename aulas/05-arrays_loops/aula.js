/*
Agora começa uma das partes mais importantes do backend.
Sistemas reais trabalham com LISTAS o tempo todo.

Exemplos reais:

lista de usuários
lista de pedidos
lista de produtos
lista de mensagens
Tudo isso são arrays.
*/


//🧠 O que é Array
//Array = lista de valores.

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

const usuarios = [
    { nome: "Eliabe", idade: 40 },
    { nome: "Camila", idade: 35 },
    { nome: "Isabelly", idade: 12 },
    { nome: "Mariany", idade: 10 }
]

console.log(usuarios);



//🔁 Loop — percorrer lista
//For clássico
for (i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i].nome);
}


//For moderno (profissional)
//📌 Dev moderno usa mais esse.
for (const usuario of usuarios) {
    console.log("For Moderno " + usuario.nome);
}


//🧠 Método importante — push()
//Adicionar item:
usuarios.push({ nome: "Maria - Adicionada Push", idade: 29 });
console.log(usuarios);

//🧠 Buscar item
const enscontrado = usuarios.find(u => u.nome === "Isabelly");
console.log("Encontrado = " + enscontrado);
