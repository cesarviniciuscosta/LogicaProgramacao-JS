// Conceito de Funções

// 1. Funções que executam tarefas
//  As funções podem ter parâmetros
function hello(nome, sobrenome) {
    console.log("Bom dia, " + nome + " " + sobrenome + "!")
    console.log("Você sabe o que são funções?")
}

let nome = prompt("Qual o seu nome:")
let sobrenome = prompt("Qual o seu sobrenome:")
hello(nome, sobrenome)

// 2. Funções que calculam um valor
//  e devolvem um resultado
function soma(numero1, numero2) {
    return numero1 + numero2
}

let operando1 = 10
let operando2 = 20
let resultado = soma(operando1, operando2)
console.log("O resultado da soma entre " +
    operando1 + " e " + operando2 +
    " é: " + resultado)
