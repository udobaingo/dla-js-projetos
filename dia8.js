// Aula Ex. 1
const NUMERO_CONTAS = 10;
let saldos = new Array(NUMERO_CONTAS).fill(0);
// Saldo da conta 5
console.log( saldos[4]);
// Total de contas
console.log( saldos.length );

// Aula Ex. 2
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

// Aula Ex. 3
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

// DESAFIO 1: Identifique 4 tipos diferentes de filas da vida real e escreva em topicos seu funcionamento com suas palavras

// FILA 1: Fila no caixa do supermercado. 
// O primeiro a chegar na fila passa primeiro as suas compras. 
// Os proximos aguardam atras do primeiro, na sequencia, com seus carrinhos de compras.
// As compras do primeiro da fila sao colocadas sobre uma esteira
// O atendente escaneia seus codigos de barras ate concluir todos os itens que estavam na esteira. 
// Caixa diz o valor da compra e pergunta a forma de pagamento.
// Pagamento concluido. 
// Depois, o proximo na fila coloca as compras na esteira e repete o procedimento.

// FILA 2: Fila no caixa eletronico. 
// O primeiro da fila insere seu cartao ou faz verificacao por biometria para entrar no seu ambiente de atendimento. 
// Escolhe o atendimento desejado, insere dados, se necessario, e conclui o atendimento recebendo um extrato, dinheiro ou
// outro documento comprobatorio

// FILA 3: Fila para atendimento na UPA. 
// Entrada 
// Recebimento de uma senha a depender da idade e da gravidade 
// Aguardar a senha ser chamada para a triagem. 
// Triagem com o atendente de triagem. 
// Retorno ao guiche para coletar documentos e recebimento de uma senha nova. 
// Aguardar nova senha ser chamada pelo medico atendente. 
// Atendimento pelo medico, expedicao de receitas e demais documentos. 
// Aguardar atendimento pela enfermaria. 
// Atendimento enfermaria. 
// Saida da UPA com guia de liberacao assinado.

// FILA 4: Fila na entrada de um jogo da Copa. 
// Compra de tiquete online. 
// Escaneamento de tiquete no computador local. 
// Expedicao de documento para triagem. 
// Triagem para a fila de entrada certa. 
// Entrada na sequencia de entrada na fila de entrada certa.
// Escaneamento do codigo de barras na entrada do estadio.
// 
// DESAFIO 2: FILA DO CAIXA DE SUPERMERCADO - Quantas operações podem haver no caixa 
// Funcao entrarFila
// Funcao iniciarAtendimento (de um cliente ou de mais do que um cliente?)
// Funcao iniciarContagemDeCompra
// Funcao adicionarValores (dos itens ou quantidade x valores de itens)
// Funcao fecharNota
// Funcao concluirAtendimento 
// DESAFIO 2: Cópia da resolucao oferecida por Vanessa e 
// 1 CRIAR ARRAY VAZIO
let fila = [];
// 2 ADICIONAR UM ELEMENTO AO FINAL DA FILA
function entrarNaFila (nome) {
fila [fila.length] = nome; // isso é equivalente a fila.push(nome); 
console.log(`${nome} entrou na fila.`);
}
// 
//Atende o primeiro cliente da fila
function atenderCliente() { 
if [fila.length > 0) {
let clienteAtendido = fila [0]; 
//    Agora, vamos remover o primeiro elemento manualmente
    for(let i = 1; i < fila.length; i++) {
   fila[i-1] = fila [i];
}
    fila.length = fila.length - 1; // Isso é equivalente a fila.shift();
   console.log(`${clienteAtendido} foi atendido.`);
} else {
   console.log("Não há clientes na fila para atender.");
}
// 
function mostrarFila() {
 if (fila.length > 0) {
    console.log("Clientes na fila: " + fila.join(", "));
 } else {
        console.log("A fila está vazia.");
     }
 }
//
// Vamos testar as funções: 
entrarNaFila("João");
entrarNaFila("Maria");
entrarNaFila("Udo");
