/*
🟨 Assíncrono (realidade de sistemas)
Agora imagine:
buscar dados de banco demora
chamar API demora
baixar arquivo demora
O programa não pode travar esperando.
Então ele faz assim:
*/

console.log("1");

setTimeout(() => {
    console.log("2");
}, 2000);

console.log("3");





/*🟦 O que é Promise
Promise = promessa de resultado futuro.
Ela diz:
ainda não tenho o resultado, mas vou ter.
Estrutura:
*/
const promessa = new Promise((resolve, reject) => {
    resolve("deu certo");
});

//Consumindo Promise (modo antigo):
promessa
    .then(res => console.log(res))
    .catch(err => console.log(err));




/*
🟩 Forma moderna — async/await
Essa é a forma profissional usada hoje.
Ela faz código assíncrono parecer síncrono.
Exemplo simples
*/

function buscar() {
    return new Promise(resolve => {
        setTimeout(() => resolve("ok"), 2000);
    });
}

async function executar() {
    const resultado = await buscar();
    console.log(resultado);
}

executar();

/*
    Fluxo mental:

espera resultado → continua
🧠 Regra de ouro (decora isso)
await só funciona dentro de função async

Sempre:
*/
async function algo() {
    const r = await outraFuncao();
}

/*
    🎯 Quando usar async na vida real?

Sempre que algo demora:

✔ banco de dados
✔ API
✔ login
✔ upload
✔ arquivos

📦 Visualização mental profissional
Sistema backend real:
request → servidor → banco → resposta
Isso SEMPRE é async.

🧪 Mini exemplo realista
Simulando banco:
*/
function buscarUsuario() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Usuário encontrado");
        }, 2000);
    });
}

async function sistema() {
    console.log("Buscando...");
    const resultado = await buscarUsuario();
    console.log(resultado);
}

sistema();
/*
    Saída:

Buscando...
(espera 2s)
Usuário encontrado
*/

/*
🧠 Resumo que dev sênior tem na cabeça

Se demora → async
Se é instantâneo → síncrono

🧭 Como saber se função é async?

Se tiver:
banco
API
timer
arquivo

👉 então deve ser async
*/

