// DESAFIO 1: IMC POR MEIO DE FUNÇÃO
function imc(pesoKg, alturaM) {
    return pesoKg/(alturaM*alturaM);
}
console.log (imc(97, 1.87).toFixed(2));
console.log (imc(15, 1).toFixed(2));
console.log (imc(72, 1.70).toFixed(2));

// DESAFIO 2: OBTER DIA DA SEMANA POR EXTENSO A PARTIR DO NÚMERO DA SEMANA
function diaExtenso(numeroDia){
    const diasDaSemana = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];
    if (numeroDia >= 1 && numeroDia<=7){
        const indice = numeroDia - 1;
        return diasDaSemana [indice];
    } else {
        return "Número de dia inválido. Por favor insira um número entre 1 e 7.";
    }
}
console.log(diaExtenso(1)); // Deve retornar "Domingo"
console.log(diaExtenso(3)); // Deve retornar "Terça-feira"
console.log(diaExtenso(7)); // Deve retornar "Sábado"
console.log(diaExtenso(0)); // Deve retornar "Número de dia inválido. Por favor insira um número entre 1 e 7."
console.log(diaExtenso(8)); // Deve retornar "Número de dia inválido. Por favor insira um número entre 1 e 7."
console.log(diaExtenso(4)); // Deve retornar "Quarta-feira"

// DESAFIO 3: RENDIMENTO DE APLICAÇÃO FINANCEIRA MEDIANTE FUNÇÃO
function calcularRendimento(investimento, tempo, juros){
    let investimentoAtual = investimento;

    for (let i=1; i <= tempo; i++) {
        investimentoAtual += investimentoAtual * juros;
        console.log("O montante ao final do ano " + i + " é de " + investimentoAtual.toFixed(2));
    }
}
calcularRendimento(1000, 10, 0.12);
calcularRendimento(5500, 5, 0.12);