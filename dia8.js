// Aula Ex. 1
// const saldoContas = [1000, 10000, 500, 30, 78.10, 65, 9.99];

// function calcularSaldoTotal(contas) {
//     let total = 0;
//     for (let i = 0; i < contas.length; i++){
//         total += contas[i];
//     }
//     return total;
// }

// const saldoTotal = calcularSaldoTotal(saldoContas);
// console.log(saldoTotal);

// Aula Ex. 2
const saldoContas = [
    ["Banco 1", "Agencia 1", "Conta 1", 1000],
    ["Banco 1", "Agencia 1", "Conta 2", 10000],
    ["Banco 2", "Agencia 1", "Conta 3", 500],
    ["Banco 2", "Agencia 2", "Conta 4", 30],
    ["Banco 3", "Agencia 1", "Conta 5", 78.10],
    ["Banco 4", "Agencia 1", "Conta 6", 65],
    ["Banco 4", "Agencia 1", "Conta 7", 9.99]
];

function calcularSaldoPorBanco(contas, nomeBanco){
    let saldoTotal = 0;

    for (let i = 0; i < contas.length; i++){
        const banco = contas[i][0];
        const saldoConta = contas[i][3];

        if (banco === nomeBanco){
            saldoTotal += saldoConta;
}
    }
    return saldoTotal;
}

const saldoBanco1 = calcularSaldoPorBanco(saldoContas, "Banco 1");
console.log(`Saldo total do Banco 1: R$ ${saldoBanco1.toFixed(2)}`);

const saldoBanco2 = calcularSaldoPorBanco(saldoContas, "Banco 2");
console.log(`Saldo total do Banco 2: R$ ${saldoBanco2.toFixed(2)}`);

const saldoBanco3 = calcularSaldoPorBanco(saldoContas, "Banco 3");
console.log(`Saldo total do Banco 3: R$ ${saldoBanco3.toFixed(2)}`);

const saldoBanco4 = calcularSaldoPorBanco(saldoContas, "Banco 4");
console.log(`Saldo total do Banco 4: R$ ${saldoBanco4.toFixed(2)}`);