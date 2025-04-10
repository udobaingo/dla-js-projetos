// RENDIMENTO DE APLICAÇÃO FINANCEIRA
let investimento = 1000;
let tempo = 10;
let juros = 0.12;
for (let i = 1; i <= tempo; i++) {
  investimento += investimento * juros;
console.log("O montante ao final do ano " + i + " é de " + investimento.toFixed(2));
}
// CONTAGEM REGRESSIVA DO FOGUETE
let segundo = 10;
let contagemRegressiva = true;

while (contagemRegressiva) {
  if (segundo >= 4) {
  console.log (segundo);
  }
  segundo--;
  if (segundo < 4 && segundo != 0) {
    console.log ('Atenção ' + segundo);
  }
  if (segundo === 0) {
    console.log ('Lançamento do foguete!');
    contagemRegressiva = false;
  }
  }
 // CÁCULO DE JUROS - INVESTIMENTO DOBRADO
let valor_investido = 1000
let taxa_juros_anual = 0.05
let valor_meta = valor_investido * 2
let anos_investimento = 0

while (valor_investido < valor_meta) {
  valor_investido += valor_investido * taxa_juros_anual
  anos_investimento++
}

console.log(
  `O valor investido será de R$${valor_investido.toFixed(
    2
  )} em ${anos_investimento} anos`
)
// CÁCULO DE JUROS - INVESTIMENTO DOBRADO 2
let inv = 1350;
let invMeta = 2 * inv;
let jurosAno = 0.05;
let anos = 0;

while (inv < invMeta) {
    inv += inv * jurosAno;
    anos++;
}

// COMPRA PARCELADA
let valor_compra = 1000
let numero_parcelas = 12
let valor_parcela = valor_compra / numero_parcelas

for (let i = 0; i < numero_parcelas; i++) {
  console.log(
    `Parcela ${i + 1}: R$${valor_parcela.toFixed(2)}, resta pagar ${
      numero_parcelas - i
    } parcelas e a divida é no total de R$${(
      valor_compra -
      valor_parcela * i
    ).toFixed(2)}`
  )
}
// COMPRA PARCELADA 2
let valorCompra = 1000;
let nParcelas = 12;
let valorParcela = valorCompra / nParcelas;

for (let i = 0; i < nParcelas; i++) {
    console.log ("Parcela " + (i+1) + ": R$" + valorParcela.toFixed(2) + ", resta pagar " + (nParcelas - i) + " parcelas e a dívida total é de R$ " + (valorCompra - valorParcela * i).toFixed(2));
}