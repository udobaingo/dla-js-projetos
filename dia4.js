// RENOVAÇÃO CNH
let primeira = true;
let idade = 2;
if (primeira == true) {
  console.log('A sua idade é ' + idade + '. O vencimento da sua CNH é de um ano, por ser a sua primeira CNH.');
} else {
  if (idade < 50) {
    console.log(
      'A sua idade é ' + idade + '. O vencimento da sua CNH é de 10 anos.'
    );
  } else if (idade >= 50 && idade < 70) {
    console.log(
      'A sua idade é ' + idade + '. O vencimento da sua CNH é de 5 anos.'
    );
  } else {
    console.log(
      'A sua idade é ' + idade + '. O vencimento da sua CNH é de 3 anos.'
    );
  }
}
// PERFORMANCE DE ALUNO
let nota_aluno = 10;
if (nota_aluno >= 0 && nota_aluno < 5) {
  console.log ("Sua nota é " + nota_aluno + ": Insuficiente");
}
else if (nota_aluno >= 5 && nota_aluno < 6) {
  console.log ("Sua nota é " + nota_aluno + ": Regular");
}
else if (nota_aluno >= 6 && nota_aluno < 7.5) {
  console.log ("Sua nota é " + nota_aluno + ": Bom");
}
else if (nota_aluno >= 7.5 && nota_aluno < 9) {
  console.log ("Sua nota é " + nota_aluno + ": Muito bom");
}
else if (nota_aluno >= 9 && nota_aluno <=10) {
  console.log ("Sua nota é " + nota_aluno + ": Excelente");
}
else {
  console.log ("Sua nota é " + nota_aluno + ": Nota fora da faixa de 0 a 10")
}
// TRANSFORMAR CÓDIGO EM CONDIÇÃO TERNÁRIA
let nota = 69.999999999;
let situacao = nota >= 70 ? "aprovado" : "reprovado";
console.log("Sua nota foi " + nota.toFixed(2) + ". Você foi " + situacao + ".");
// CONDIÇÃO TERNÁRIA EXPRESSÃO MAIS COMPLEXA
let conta = 500;
let ativo = false;
let compras_habilitadas = conta > 500 && ativo == true ? "Parabéns! Você pode comprar!" : "Você não pode comprar. Compra negada";
console.log(compras_habilitadas)
//CONDIÇÃO TERNÁRIA EXPRESSÃO MAIS COMPLEXA 2
let saldo = 600.00;
let clienteInativo = false;
let podeComprar = (!clienteInativo && saldo > 500) ? true : false;
console.log (podeComprar);
// CANCELA DE ESTACIONAMENTO
let estado = 1;
let estado_nome = "";
switch (estado) {
  case 1:
    estado_nome ="Aberta";
    break;
  case 2: 
    estado_nome = "Fechada";
    break;
  case 3:
    estado_nome = "Manutenção";
    break;
   default:
    estado_nome = "Estado inválido";
    }
    console.log("A cancela está " + estado_nome);
// SISTEMA DE PDV
let produto = "Alimentos";
let preco = 100.00;
let desconto = 0;

switch (produto) {
  case "Alimentos":
    desconto = 0.05;
    break;
  case "Eletrônicos":
    desconto = 0.10;
    break;
  case "Roupas":
    desconto = 0.20;
    break;
  case "Livros":
    desconto = 0.50;
    break;
  default: 
    desconto = 0;
    }
    let valor_final = preco * (1 - desconto);
    console.log("Valor final do produto: " + valor_final);
