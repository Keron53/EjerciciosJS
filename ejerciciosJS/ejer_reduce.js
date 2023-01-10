/*
el método reduce() ejecuta una función de devolución de llamada "reductora " 
proporcionada por el usuario en cada elemento de la matriz, en orden, pasando el valor 
de retorno del cálculo en el elemento anterior. El resultado final de ejecutar el reductor en todos los elementos de
 la matriz es un valor único
 */

 const vector=[1,4,10,20,33,45,4,2,15]
 const valInicial=0
 const sumatoria = vector.reduce ( (ac,va) =>{
    return ac+va
 }, valInicial)

 console.log("La sumatoria del vector es: ", sumatoria)

 //Diseñe la función que devuelve el producto de los elementos de un vector
 //llamar 2 veces a la función
 const producto = function (vector){
const x = vector.reduce(( ac, va) => { 
    return ac*va
}, 1)
return x}
console.log(producto([1,2,3]))
console.log(producto(vector))

//Foreach: recorre todos los elementos del vector
vector.forEach( (num, index )=>{
    console.log("elemento: ", num, index)
})



// Se tiene una cadena de caracteres se pide diseñar la función que devuelve la cadena sin consonantes(devuelve solo las vocales)
//Ejemplos: Hola Esmeraldas"
//RESULTADO ESPERADO: "OA eaaa"
//utilice filter
const cadenacaracter = "Buenas Tardes, Señorita"
const vocales = function (cadena){
    const y = cadena.split("")
    return y.filter(items => items == "a"||items =="e"||items =="i"||items=="o"||items=="u")
}
console.log("texto original: ",cadenacaracter)
console.log(vocales(cadenacaracter))
