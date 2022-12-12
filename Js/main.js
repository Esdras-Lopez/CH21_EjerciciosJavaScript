
//Ejercicio #1
//Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. 
//Ejemplo del arreglo : [3, 5, 7, 1, 6]

let lista = document.getElementById("lista");


const numeros = [5 ,2 ,6 ,7 ,10 ,9];
let numMayor = 0;

for (let contador = 0 ; contador < numeros.length; contador ++ )
{
    if(numMayor < numeros[contador]){
        numMayor = numeros[contador];
    }
}

console.log(numMayor);