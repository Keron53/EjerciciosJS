/*
map:
el metodo map() crea una nueva matriz con los resultados de llamar a una funcion proporcionada en cada elemento de la matriz de llamadas
*/

//Se pide duplicar cada elemento del array numeros. Este resultado debe almacenarse en un nuevo array

const numeros = [2,3,10,22,5,6,11,1]
const numerosDuplicados = numeros.map(elemento => {
    return elemento*2
})
console.log("vector original: ", numeros)
console.log("Nuevo vector: ", numerosDuplicados)

//Diseñe la funcióm que devuelve cada elemento del vector elevado al cuadrado
//haga dos llamadas a la función
// => lambda, funcion de flecha, flechaguda
const cuadrado = (vector => {
    return vector.map(item => item*item)
})
console.log("vector original: ", cuadrado([1,2,3]))
console.log("Nuevo vector: ", cuadrado(numeros))

//const cuadrado = function (vector) { return vector.map(item => item*item)}