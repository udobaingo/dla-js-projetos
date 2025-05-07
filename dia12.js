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
    console.log(`Total de chamadasna fila: ${filaDeChamadas.length}`);
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