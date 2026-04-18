function saldoPoupanca() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(150);
        }, 1000);
    });
}

function saldoCDB() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(500);
        }, 1000);
    });
}

function saldoBitcoin() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(1000);
        }, 1000);
    });
}

async function main() {
    const poupanca = await saldoPoupanca();
    const cdb = await saldoCDB();
    const bitcoin = await saldoBitcoin();

    const total = poupanca + cdb + bitcoin;

    console.log("Total investido:", total);
}

main();

//Versão PROFISSIONAL (mais rápida)
async function main() {
    const [poupanca, cdb, bitcoin] = await Promise.all([
        saldoPoupanca(),
        saldoCDB(),
        saldoBitcoin()
    ]);

    const total = poupanca + cdb + bitcoin;

    console.log("Total investido:", total);
}

main();