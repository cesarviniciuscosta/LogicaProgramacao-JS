/*
    Em lógica de programação, é muito comum trabalharmos com
    listas de objetos.
    Chamamos essas listas de arrays
*/

// Lista de compras
let listaCompras = ["ovos", "leite"]
console.log(listaCompras)
console.log(listaCompras[0])
console.log(listaCompras.length)

// Em javascript, as listas são
//  dinâmicas
listaCompras[2] = "queijo"
listaCompras[3] = 4
console.log(listaCompras)

// Adicionar um elemento na lista
listaCompras.push("pão de forma")
console.log(listaCompras)

// Remover o último elemento
let itemRemovido = listaCompras.pop()
console.log(itemRemovido)

// Remover um item específico
listaCompras.splice(3, 1)
console.log(listaCompras)

// Loop para visualizar os elementos
//  do array
let contador = 0
while (contador < listaCompras.length) {
    console.log("Item: " + listaCompras[contador])
    contador++
}



