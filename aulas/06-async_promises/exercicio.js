function saldoPoupanca() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ investimento: "Poupança", saldo: 150 });
        }, 5000);
    });

}

async function main() {
    const poupanca = await saldoPoupanca();
    console.log(poupanca);
}

main();

function saldoCDB() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ investimento: "CDB", saldo: 200 });
        }, 2000)
    });
}

async function extrato() {
    const cdb = await saldoCDB();
    console.log(cdb);
}

extrato();

function sadoFIIS() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ investimento: "FIIS", saldo: 3000 });
        }, 200);
    })
}

