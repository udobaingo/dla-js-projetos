// Saldo das contas
let saldo1 = 0;
let saldo2 = 0;

// Limite inicial, juros e configurações de limite
let limite = 0;
let jurosLimite = 0;
const saldoMinLimite = 1000;
const percentualLimite = 0.1;

// Taxa de conversão de dólar para real
const taxaConversaoDolar = 5.23;
// 1. Calcular salto total das contas
function saldoTotal(){
    let total = saldo1 + saldo2;

    if (total >= saldoMinLimite) {
        limite = total * percentualLimite;
    }

    return total;
}
// 2. Exibir alerta se alguma conta estiver sem saldo ou utilizando o limite
function alertaSaldo1 (){
    if (saldo1 <= 0){
        console.log('Conta 1 está sem saldo ou utilizando o limite.');
    }
    if (saldo2 <= 0){
        console.log('Conta 2 está sem saldo ou utilizando o limite.');
    }
}
// 3. e 8. Permitir depósitos em uma das contas e se a conta estiver usando limite, descontar 15% do valor a ser depositado
function depositar(conta, valor){
    if (conta === 1){
        if (saldo1 < 0){
            jurosLimite += valor * 0.15;
            valor *= 0.85;
        }
        saldo1 += valor;
    }
    else if (conta === 2) {
        if (saldo2 < 0) {
            jurosLimite += valor * 0.15;
            valor *= 0.85;
        }
        saldo2 += valor;
    }

}
// 4. Permitir débitos em uma das contas
function debitar(conta,valor){
    if (conta === 1 && valor <= (saldo1 + limite)){
        saldo1 -= valor;
    }
    else if (conta === 2 && valor <= (saldo2 + limite)){
        saldo2 -= valor;
    }
    else {
        console.log('Saldo insuficiente para débito na conta ' + conta);
    }
}
// 5. Permitir transferências de uma conta para a outra, desde que haja saldo disponível
function transferir(contaOrigem, contaDestino, valor){
    if (contaOrigem === 1 && valor <= saldo1){
        debitar(1, valor);
        depositar(contaDestino, valor);
    }
    else if (contaOrigem === 2 && valor <= saldo2){
        debitar(2, valor);
        depositar(contaDestino, valor);
    }
    else {
        console.log('Saldo insuficiente transferência na conta ' + contaOrigem);
    }
}
// 6. Converter o saldo de reais R$ para dólares US$
function converterSaldoParaDolar(Conta){
    if (conta === 1){
        return saldo1 / taxaConversaoDolar;
    }
    else if (conta === 2){
        return saldo2 / taxaConversaoDolar;
    }
}
// 7. Exibir o limite disponível das contas
function exibirLimite(){
    return limite;
}
// Exibir os juros devido ao uso do limite
function exibirJurosLimite(){
    return jurosLimite;
}