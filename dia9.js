// AULA PARTE 1
const redesSociais = [
    'Instagram',
    'YouTube',
    'Facebook',
    'TikTok',
    'Twitter',
    'LinkedIn',
    'Pinterest',
];

const tiktokPos = redesSociais.indexOf('TikTok');
console.log(tiktokPos); // 3 

const existeThreads = redesSociais.includes('Threads');
console.log(existeThreads); // false

// DESAFIO 1: RECRIAR indexOf, includes e lastIndexOf
// 1.1 Recriar indexOf
function indexOf (array, item) {
    for (let i = 0; i < array.length; i++){
        if (array[i] == item){
            return i;
        }
    }
    return -1;
}
// 1.2 Recriar includes
function includes (array, item) {
    for (let i = 0; i < array.length; i++){
        if (array[i] == item){
            return true;
        }
    }
    return false;
}
// 1.3 Recriar lastIndexOf
function lastIndexOf (array, item) {
    for (let i = array.length - 1; i > 0 ; i--){
        if (array[i] == item){
            return i;
        }
    }
    return -1;
}

let array =  ["a", "b", "c", "d", "e", "b", "e", "d", "e"];
let item = "d";

console.log('Index of ${item}: ' + indexOf(array, item));
console.log('Includes of ${item}: ' + includes(array, item));
console.log('lastIndexOf ${item}: ' + lastIndexOf(array, item));

// AULA PARTE 2
const carrosMaisVendidos = [
    'Fiat Strada',
    'Fiat Argo',
    'Hyunday HB20',
    'Chevrolet Onix',
    'Volkswagen Gol',
    'Renault Kwid',
    'Fiat Mobi',
    'Jeep Renegade',
    'Volkswagen T-Cross',
    'Toyota Corolla'
];

const top5Carros = carrosMaisVendidos.slice(0,5);

console.log("Top 5 Carros Mais Vendidos no Brasil:");
for (let i = 0; i < top5Carros.length; i++){
    console.log(`${i + 1}. ${top5Carros[i]}`);
}

// DESAFIO 2

function slice(array, begin = 0, end = array.length){
    let newArray = [];

    for (let i = begin; i < end; i++) {
        newArray.push(array[i]); // equivale a newArray[newArray.length] = array[i];
    }
    return newArray;
}

const frutas = ['maçã', 'pera', 'banana', 'ameixa', 'amora'];

let compra = slice(frutas, 1, 4);

console.log(`Você comprou: ${compra.join(', ')}`);
