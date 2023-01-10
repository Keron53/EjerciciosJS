/*
some: devuelve verdadero si almenos uno de los elementos del vector cumple con la condición.
Si ninguno la cumple, devuelve falso
*/



const vector = [1,2,3,4,5,6,7,8,9, -10]

//verificar si el array tiene valores negativos
const negativos = vector.some ( elemento =>{
    return elemento<0
})
console.log ("Hay algún negativo? ", negativos)