// Exemplo de empillhamento
let deck = [];

function adicionarCarta(carta) {
    deck.push(carta);
    console.log(`Carta ${carta} adicionada ao deck`);
}

function jogarCarta() {
    if(deck.length === 0){
        console.log("O deck está vazio.");
        return null;
    }
    const cartaJogada = deck.pop();
    console.log(`Carta ${cartaJogada} jogada`);
    return cartaJogada;
}

// Adicionando cartas ao deck
adicionarCarta('Às de Espadas');
adicionarCarta('Rei de Copas');
adicionarCarta('Dama de Paus');
jogarCarta();
jogarCarta();
jogarCarta();
jogarCarta();

// Braço mecânico que empillha 10 produtos numa caixa e depois despacha essa caixa e disponibiliza outra caixa e outra etc.
let pilhaDeProdutos = [];
const produtosPorCaixa = 10;

function empilharProdutos(produto) {
    if(pilhaDeProdutos.length < produtosPorCaixa) {
        pilhaDeProdutos.push(produto);
        console.log(`Produto ${produto} empilhado.`);
    } else {
        console.log("Caixa cheia. Enviando para selagem e despacho.");
        pilhaDeProdutos = [];
        pilhaDeProdutos.push(produto);
        console.log(`Produto ${produto} empilhado na nova caixa.`);
    }
}

// Simulando a função com 40 produtos
const TOTAL_DE_PRODUTOS_ESTEIRA = 40;
for (let i = 1; i <= TOTAL_DE_PRODUTOS_ESTEIRA; i++) {
    empilharProdutos(`${i}`);
}
