/*
    While é um tipo de loop em Javascript
    onde um conjunto de instruções é executado 
    enquanto (while) uma condição é verdadeira (true)
*/

/*
    1-While
    Testa a condição no início
    Pode não executar nenhuma vez
*/

// Efetua a soma dos números pares entre 0 e 50
let contador = 0
let pares = 0
while (contador <= 50) {
    if (contador % 2 == 0) {
        pares += contador
        console.log("Contador: " + contador + " Soma: " + pares)
    }
    contador++
}

/*
    2. Do While
    Testa a condição no final
    Executa o conjunto de instruções pelo menos uma vez
*/
contador = 0
pares = 0
do {
    if (contador % 2 == 0) {
        pares += contador
        console.log("Contador: " + contador + " Soma: " + pares)
    }
    contador++
} while (contador <= 50)
