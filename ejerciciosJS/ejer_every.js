//filter: devuelve dos elementos de un array que cumplen una condición
//every: devuelve verdadero si todo el vector cumple con la condición
//some: si alguno de los elementos del vector cumple con la condición, devuelve verdadero

//npm install nodemon
//npx nodemon ejer_every.js

//nhttps://www.npmjs.com/package/nodemon

console.log("Ejemplo every - para arrays")
const numeros = [11,2,33,45,1,110,12,55,17]

//verificar si el array tiene elementos positivos
const positivos = numeros.every (elemento => {
    return elemento >0
})
console.log("El array tiene solo elementos positivos ?", positivos)

//diseñe la función que determine si todos los elementos del vector son multiplos de 5
//mi trabajo en clase
const multiplos = numeros.every (elemento => {
    return elemento%5==0
})
console.log("Todos los elementos del array son multiplos de 5?", multiplos)
//trabajo del profesor, es una funcion para llamar
const multiplosde5 = function (vector)
{
    return vector.every (elemento => elemento %5 ==0)
}
console.log("multiplos de 5: ", multiplosde5(numeros))

