// Principais operações em filas:
// 1 ENQUEUE Adiciona um item na fila
// 2 DEQUEUE Retira o primeiro item da fila
// 3 FRONT PEEK Retorna o primeiro item da fila
// 4 isEmpty
// 6 isFull
// 6 Rear:  Retorna o último elemento da fila

// Inicializando a fila de chamadas
let filaDeChamadas = [];

// Função para receber uma nova chamada
function receberChamada(numeroDoCliente) {
    filaDeChamadas.push(numeroDoCliente); // Adiciona no final da fila
    console.log(`Chamada recebida do número: ${numeroDoCliente}. Total de chamadas na fila: ${filaDeChamadas.length}`);
}

// Função para atender a chamada
function atenderChamada() {
    if (filaDeChamadas.length === 0) {
        console.log("Não há chamadas na fila para atender.");
    } else {
        let chamadaAtendida = filaDeChamadas.shift(); // Remove do início da fila
        console.log(`Atendendo chamada do número: ${chamadaAtendida}.`);
    }
}

// Função para exibir o status da fila
function statusDaFila() {
    console.log(`Total de chamadas na fila: ${filaDeChamadas.length}`);
    if (filaDeChamadas.length > 0 ) {
        console.log("Chamadas esperando: " + filaDeChamadas.join(", "));
    }
}

// Simulação de chamadas recebidas
receberChamada("23398923");
receberChamada("9872432");
receberChamada("3338888111");

// Atendendo uma chamada
atenderChamada();

// Verificando o status da fila
statusDaFila();

// Atendendo mais chamadas
atenderChamada();
atenderChamada();

// DESAFIO: MINHA SOLUÇÃO PARA A CAFETERIA DRIVE THROUGH

let filaDeCarros = [];

// Função para carros entrarem na fila
function entrarNaFila(placaNumero){
    filaDeCarros.push(placaNumero);
    console.log(`Carro com placa ${placaNumero}. Total de carros na fila: ${filaDeCarros.length}.`);
} 

// Função para atendimento de cliente no carro via totem eletrônico
function atenderCliente(){
    if (filaDeCarros === 0) {
        console.log("Não há nenhum carro na fila de atendimento.");
    } else {
        let clienteEmAtendimento = filaDeCarros.shift();
        console.log(`Atendendo cliente com carro ${clienteEmAtendimento}.`);
    }
}

// Função para exibir status da fila
function statussDaFila(){
    console.log(`Total de carros na fila: ${filaDeCarros.length}`);
    if (filaDeCarros > 0) {
        console.log("Carros esperando atendimento: " + filaDeCarros.join (", "));
    }
}

// Simulação:

entrarNaFila ("DE562D11");
entrarNaFila ("ABC11A1");
entrarNaFila ("YZW99Y9");

atenderCliente();

statussDaFila();

atenderCliente();
atenderCliente();

// DESAFIO: SOLUÇÃO DOS SÊNIORS PARA A CAFETERIA DRIVE THROUGH

// Inicializando a fila de drive-thru
let filaDriveThru = [];

// Função para um carro entrar na fila
function entrarNaFila(placaDoCarro, pedido) {
    filaDriveThru.push([placaDoCarro, pedido]); // Adiciona ao final da fila
    console.log(`Carro ${placaDoCarro} entrou na fila com o pedido: ${pedido}.`);
}

// Função para atender o carro
function atenderCarro() {
    if (filaDriveThru.length === 0) {
        console.log("Não há carros na fila.");
    } else {
        let carroAtendido = filaDriveThru.shift(); // Remove o carro do início da fila
        console.log(`Carro ${carroAtendido[0]} com o pedido: ${carroAtendido[1]}.`);
    }
}

// Função para exibir o status da fila
function statusDaFila() {
    console.log(`Total de carros na fila: ${filaDriveThru.length}`);
    if (filaDriveThru.length > 0) {
        console.log("Fila atual: " + filaDriveThru.map(carro => carro[0]).join(", "));    }
}

// Simulação de carros entrando na fila
entrarNaFila("ABC1234", "Café");
entrarNaFila("XYZ5678", "Chá");
entrarNaFila("DEF9012", "Sanduíche");

// Atendendo um carro
atenderCarro();

// Verificando o status da fila
statusDaFila();

// Atendendo mais carros
atenderCarro();
atenderCarro();

// Verificando o status da fila
statusDaFila();

