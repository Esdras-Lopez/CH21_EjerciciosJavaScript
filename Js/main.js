
//Ejercicio #1
//Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. 
//Ejemplo del arreglo : [3, 5, 7, 1, 6]

let lista = document.getElementById("lista");


const numeros = [3 ,5 ,7 ,1 ,6];
let numMayor = 0;

for (let contador = 0 ; contador < numeros.length; contador ++ )
{
    if(numMayor < numeros[contador]){
        numMayor = numeros[contador];
    }
}

console.log("El número mayor es: "+ numMayor);

/*Ejercicio #2

María llega a su entrevista de trabajo para el rol de Desarrollador Junior 
y se le pide que resuelva este problema:
 Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript 
 para calcular el número más pequeño.

*/

 const numeros2 = [-1 ,3 ,4 ,2 ,6];
let numMenor = 0;

for (let contador = 0 ; contador < numeros.length; contador ++ )
{
    if(numMenor > numeros2[contador]){
        numMenor = numeros2[contador];
    }
}

console.log("El número menor es: "+ numMenor);


/*Ejercicio #3

Escribir una función que permita saber si un número se repite dentro de un arreglo.

    Blockquote Casos de prueba:

Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]
 */

const numeros3 = [1, 22, 5, 17, 10, 5, 40, 5];
let num = 5 ;
let repeticiones = 0;

for (let contador = 0 ; contador < numeros3.length; contador ++ )
{

    if(num == numeros3[contador]){
      repeticiones++;
    }
}

if (repeticiones > 0){
    console.log("El número " + num + " Se repite "+ repeticiones +" veces");

}else console.log(" No hay números repetidos");


//Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]

const numeros4 = [7, 41, 5, 7, 10, 13, 2];
 num = 7 ;
repeticiones = 0;


for (let contador = 0 ; contador < numeros4.length; contador ++ )
{

    if(num == numeros4[contador]){
        repeticiones++;
        
      }
}
if (repeticiones > 0){
    console.log("El número " + num + " Se repite "+ repeticiones +" veces");

}else console.log(" No hay números repetidos");


//Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]

const numeros5 = [1, 22, 5, 14, 24, 31, 27, 15, 105];
 num = 12 ;
repeticiones = 0;


for (let contador = 0 ; contador < numeros5.length; contador ++ )
{

    if(num == numeros5[contador]){
      repeticiones++;
      
    }
}

if (repeticiones > 0){
    console.log("El número " + num + " Se repite "+ repeticiones +" veces");

}else console.log(" No hay números repetidos");


/* 
Ejercicio #4

Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado 
Entrada: [1, 2, 5, 14, 24, 31, 50, 105] Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]
*/

let nums5 = [1, 2, 5, 14, 24, 31, 50, 105];

console.log(nums5.sort(()=>Math.random()-0.5));
