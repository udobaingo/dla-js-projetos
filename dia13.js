// Conteúdo Aula 13
// DEQUE (double-ended queue ou lista ligada cabeça cauda)
// Operações básicas são:
// 1 InsertFront
// 2 InsertLast
// 3 deleteFront
// 4 deleteLast
// 5 front
// 6 rear
// 7 isEmpty
// 8 getItems

const itens = []; // Deque

// Inserir no início 
function inserirInicio(item){
    itens.unshift(item);
}

// Inserir no fim
function inserirFim(item){
    itens.push(item);
}

// Remover do início
function removerInicio(){
    return itens.shift();
}

// Remover do fim
function removerFim(){
    return itens.pop();
}

// obter o primeiro elemento
function primeiro(){
    return itens[0];
}

// Obter o último elemento
function ultimo(){
    return itens[itens.length-1];
}

// Verificar se está vazio
function estaVazio(){
    return itens.length === 0;
}

// Obter itens
function obterItens(){
    return itens.slice(); // Retorna uma cópia do array usando o método slice
}

// Teste das funções
console.log(estaVazio());

inserirInicio('Ferrari');
inserirInicio('Fusca');
inserirFim('HB20S');
inserirFim('Meriva');

console.table(obterItens());
console.log(estaVazio());

removerFim();
removerFim();
removerFim();

console.table(obterItens());

console.log(`Primeiro: ${primeiro()}`);
console.log(`Último: ${ultimo()}`);

// DESAFIO: Controle de Tarefas Dinâmicas com Prioridades
// Objetivos: 
// Implementar um deque para tarefas
// Manipulação das prioridades
// Testar com cenários realistas
const tasks = [];

// Insere task at the begin (highest priority)
function insereBegin(task){
    tasks.unshift(task);
    console.log(`Task '${task}' added with highest priority`);
}

// Insere task to the end (lowest priority)
function insereEnd(task){
    tasks.push(task);
    console.log(`Task '${task}' added with lowest priority`);
}

// Remove task from the begin (highest priority)
function removeBegin(){
    if (!isEmpty()){
        console.log(`Task '${tasks.shift()}' with highest priority has been removed.`);
    } else {
    console.log("There are no tasks to be removed.");
    }
}

function removeEnd(){
    if (!isEmpty()){
    console.log(`Task '${tasks.pop()}' with lowest priority has been removed.`);
    } else {
    console.log("There are no tasks to be removed.");
    }
}

function isEmpty(){
    return tasks.length === 0;
}

function getTasks(){
    return tasks.slice();
}

// Quero priorizar algo que está numa posição intermediária, colocando-a uma acima
// Quero despriorizar algo que está numa posição qualquer, colocando-a uma abaixo
// Por exemplo, posição 7 para posição 6 ou 9 para 8

function setHigherPriority(task) {
    let index = tasks.indexOf(task);
    if (index > 0) {
    let temp = tasks[index-1];
    tasks[index - 1] = tasks[index];
    tasks[index] = temp;
    console.log(`Priority of task '${task}' has been set higher.`);
    } else {
     console.log("The task has already the highest priority or does not exist");
    }
}

function setLowerPriority(task) {
    let index = tasks.indexOf(task);
    if (index !== -1 &&  index < tasks.length - 1) {
        let temp = tasks[index + 1];
        tasks[index + 1] = tasks[index];
        tasks[index] = temp;
        console.log(`Priority of task '${task}' has been set lower.`);
        } else {
         console.log("The task has alredy the lowest priority or does not exist");
    }
}

insereEnd("Buy Coffee");
insereBegin("Reply E-Mails");
insereEnd("Meeting");

console.log("Actual tasks: " , getTasks());

setHigherPriority("Buy Coffee");

setLowerPriority("Reply E-Mails");

console.log("Tasks after reorganization: ", getTasks());

removeBegin();

console.log("Tasks after removing:", getTasks());