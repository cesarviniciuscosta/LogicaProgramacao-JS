/*
    As condicionais avaliam se determinadas condições
    são verdadeiras ou falsas
*/

/* 
    Cálculo de Média
    Estudante terá aprovação se sua média for maior ou igual a seis
    Para o cálculo, considere a média aritmética de 2 notas
    Para estudante ter aprovação, o número de faltas não pode
    ultrapassar 25
*/
let nota1 = 5.0
let nota2 = 6.0
let faltas = 26
let media = (nota1 + nota2) / 2

if (media >= 6 && faltas <= 25) {
    console.log("Estudante teve aprovação")
} else {
    console.log("Estudante teve reprovação")
}

// Exercício
//  Se a hora estiver entre 6am e 12pm: Bom dia!
//  Se a hora estiver entre 12p e 6pm: Boa tarde!
//  Caso contrário: Boa noite!
let hora = 4

if (hora >= 6 && hora <= 12) {
    // Bom dia
    console.log("Bom dia!")
} else if (hora > 12 && hora <= 18) {
    // Boa tarde
    console.log("Boa tarde!")
} else {
    // Boa noite
    console.log("Boa noite!")
}

// if (hora >= 6 && hora <= 12) {
//     // Bom dia
//     console.log("Bom dia!")
// }

// if (hora > 12 && hora <= 18) {
//     // Boa tarde
//     console.log("Boa tarde!")
// }

// if (hora > 18 || hora < 6) {
//     // Boa noite
//     console.log("Boa noite!")
// }