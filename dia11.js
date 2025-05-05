// DESAFIO BOTÕES VOLTAR, AVANÇAR DE UM NAVEGADOR
let pilhaVoltar = [];
let pilhaAvancar = [];
let paginaAtual = null;

 // Função para navegar até uma página
 function navegarPara(pagina) {

    if (paginaAtual) {
        pilhaVoltar.push(paginaAtual);
        pilhaAvancar = [];
    }
    // A nova página se torna a página atual.
    paginaAtual = pagina;
    console.log("Navegando para:", paginaAtual);
 }

 // Função para voltar para a página anterior.
 function voltar() {
    if(!pilhaVoltar.length) {
        console.log("Não há páginas anteriores.");
        return;
    }
    pilhaAvancar.push(paginaAtual);

    paginaAtual = pilhaVoltar.pop();
    console.log("Voltando para:", paginaAtual);
 }

 // Função para avançar para a próxima página.
 function avancar() {

    if (!pilhaAvancar.length) {
        console.log("Não há páginas à frente.");
        return;
    }

    pilhaVoltar.push(paginaAtual);

    paginaAtual = pilhaAvancar.pop();
    console.log("Avançando para:", paginaAtual);
}

// Testando as funções:
navegarPara("A");
navegarPara("B");
navegarPara("C");
voltar(); // Voltando para B
voltar(); // Voltando para A
avancar(); // Avançando para B
navegarPara("D"); // Navegando para uma outra página nunca navegada
voltar(); // Voltando para a última página navegada antes dessa última página (de D para B)