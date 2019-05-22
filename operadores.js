/*
    Operadores em Javascript são utilizados para 
    criar expressões e construir lógica e 
    algoritmos
*/
console.log("Operadores")

// 1. Aritméticos
let oper1 = 10
let oper2 = 3

console.log(oper1 + oper2)
console.log(oper1 - oper2)
console.log(oper1 * oper2)
console.log(oper1 / oper2)
console.log(oper1 % oper2)
console.log(oper1 ** oper2)

// Incremento
oper1 = oper1 + 1
oper1++
oper1 += 1

// Decremento
oper1--
oper1 -= 5

console.log(oper1)

// 2. Operadores de Comparação
let operComp = 1

console.log(operComp > 1)
console.log(operComp >= 1)
console.log(operComp < 1)
console.log(operComp <= 1)
console.log(operComp == 1)
console.log(operComp != 1)

// 3. Operadores Lógicos

// && - Operadro AND (E lógico)
//  Retornar verdadeiro se ambas as condições forem verdadeiras
let cartaoValido = true
let codigoPorta = true
let entradaLiberada = cartaoValido && codigoPorta
console.log(entradaLiberada)

// || - Operador OR (OU lógico)
//  Retornar verdadeiro se uma das condições for verdadeira
let retina = true
let digital = false
entradaLiberada = retina || digital
console.log("Entrada Liberada: " + entradaLiberada)

// ! - Operador NOT (NÃO LÓGICO)
// Indica o oposto da condição verificada
let entradaRecusada = !entradaLiberada
console.log("Entrada Recusada: " + entradaRecusada)


