/*
    Assim como o while, a construção lógica for executa
    uma ação um determinado número de vezes
*/

console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")

// Ação executada n vezes com o for
for (let index = 0; index < 9; index++) {
    console.log("Hello World")
}

// Versão dos números pares com o for
let pares = 0
for(let contador = 0; contador <= 50; contador++) {
    if (contador % 2 == 0) {
        pares += contador
        console.log("Contador: " + contador + " Soma: " + pares)
    }
}

// Efetua a soma dos números pares entre 0 e 50 com While
// let contador = 0
// pares = 0
// while (contador <= 50) {
//     if (contador % 2 == 0) {
//         pares += contador
//         console.log("Contador: " + contador + " Soma: " + pares)
//     }
//     contador++
// }

// Pra que serve esse for?
let start = new Date()
let enrolation = 0
for (let count = 0; count < 1000000000; count++) {
    enrolation += count
}
let end = new Date()
console.log("Terminou em: ", (end - start) / 1000, " segundos")
