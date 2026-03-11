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

//--------------------------------------------------------------------

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

function saldoFIIS() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ investimento: "FIIS", saldo: 3000 });
        }, 200);
    })
}

async function verFiis() {
    const fii = await saldoFIIS();
    console.log(fii);
}

verFiis();

//---------------------------------------------------------------
function saldoPoup() {
    return new Promise((resolve, reject) => {
        const sistemaForaDoAr = false;

        setTimeout(() => {
            if (sistemaForaDoAr) {
                reject("Sistema Indidsponivel");
            } else {
                resolve({ investimento: "Poupança", saldo: 800 });
            }
        }, 3000)
    })
}

async function mainTwo() {
    try {
        const poupanca = await saldoPoup();
        console.log(poupanca);
    } catch (error) {
        console.log("Erro: ", error);
    }
}

mainTwo();