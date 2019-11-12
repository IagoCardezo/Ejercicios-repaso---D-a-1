"use strict";
//#######################################################################################################################################################
// ####### Ejercicios De Clase :  #######################################################################################################################
//#######################################################################################################################################################

//Ejercicio 1 :

// // Mirar se hai algún numero repetido

// let num = [1, 2, 3, 1];

// function isRepeat(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = 0; j <= arr.length; j++) {
//       if (arr[i] === arr[j] && i !== j) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(isRepeat(num));

// ################################################
// function repeated(arr) {
//   for (let i = 0; i < num.length; i++) {
//     for (let j = i + 1; j < num.length; j++) {
//       if (arr[i] === arr[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(repeated(num));

// ###########################################################################################################################################################

//Ejercicio 2 :

//Mirar cantos nums 1 hai repetidos, decir cantos 1 repetidos hai (max =3)

// let input = [1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// function oneRepeated(arr) {
//   let howManyOnes = 0;
//   let biggestAmount = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       howManyOnes++;

//       // Ésto é necesário para que non me reinicie tamén biggestAmount
//       if (howManyOnes > biggestAmount) {
//         biggestAmount = howManyOnes;
//       }
//     }

//     if (arr[i] !== 1) {
//       howManyOnes = 0;
//     }
//   }
//   return biggestAmount;
// }

// console.log(oneRepeated(input));

// Necesitamos dous contadores, un que vaia contando os 1s seguidos
//  e que se reinicie cando non haxa un 1, e outro que almacene a cantidad
//  de 1s mais grande.
// ###########################################################################################################################################################

//Ejercicio 3 :

// let arr = [1, 0, 0, 1, 0, 1, 0, 0, 3, 0, 0, 12];

// function manageZeros(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] === arr[i + 1] && arr[i] === 0) {
//       arr.splice(i, 1);
//       arr.push(0);
//     }

//     if (arr[i] === 0) {
//       arr.splice(i, 1);
//       arr.push(0);
//     }
//   }
//   return arr;
// }

// console.log(manageZeros(arr));

//#######################################################################################################################################################
// ####### Ejercicios de Repaso(para casa) :  ###########################################################################################################
//#######################################################################################################################################################

/**
 * ###################################
 * ###### E J E R C I C I O   1 ######
 * ###################################
 *
 * Sara y Laura juegan al baloncesto en diferentes equipos. En los
 * últimos 3 partidos, el equipo de Sara anotó 89, 120 y 103 puntos,
 * mientras que el equipo de Laura anotó 116, 94, y 123 puntos.
 *
 * `1.` Calcula la media de puntos para cada equipo.
 *
 * `2.` Muestra un mensaje que indique cuál de los dos equipos
 *      tiene mejor puntuación media. Incluye en este mismo mensaje
 *      la media de los dos equipos.
 *
 * `3.` María también juega en un equipo de baloncesto. Su equipo
 *      anotó 97, 134 y 105 puntos respectivamente en los últimos
 *      3 partidos. Repite los pasos 1 y 2 incorporando al equipo
 *      de María.
 */

// SOLUCIÓN :

// let Sara = [89, 120, 103];
// let Laura = [116, 94, 123];
// let Maria = [97, 134, 105];
// // 1##########################################################
// function media(a) {
//   let sumA = a.reduce((one, another) => another + one);
//   let mediaA = sumA / a.length;
//   return mediaA;
// }

// // 2##########################################################
// function biggestMedia(a, b, c) {
//   return Math.max(a, b, c);
// }

// console.log(biggestMedia(media(Sara), media(Laura), media(Maria)));

// let aviso = alert(
//   `Las medias de los equipos son: ${media(Sara)} , ${media(Laura)}, ${media(
//     Maria
//   )} siendo la media más alta la de ${biggestMedia(
//     media(Sara),
//     media(Laura),
//     media(Maria)
//   )}`
// );

/**
 * ###################################
 * ###### E J E R C I C I O   2 ######
 * ###################################
 *
 * Jorge y su familia han ido a comer a tres restaurantes distintos.
 * La factura fue de 124€, 58€ y 268€ respectivamente.
 *
 * Para calcular la propina que va a dejar al camarero, Jorge ha
 * decidido crear un sistema de calculo (una función). Quiere
 * dejar un 20% de propina si la factura es menor que 50€, un 15%
 * si la factura está entre 50€ y 200€, y un 10% si la factura es
 * mayor que 200€.
 *
 * Al final, Jorge tendrá dos arrays:
 *
 * - `Array 1` Contiene las propinas que ha dejado en cada uno de
 *    los tres restaurantes.
 *
 * - `Array 2` Contiene el total de lo que ha pagado en cada uno de
 *    los restaurantes (sumando la propina).
 *
 * `NOTA` Para calcular el 20% de un valor, simplemente multiplica
 *  por `0.2`. Este resultado se obtiene de dividir `20/100`. Si
 *  quisieramos averiguar el 25% de un valor lo multiplicaríamos
 *  por 0.25.
 *
 * `25 / 100 = 0.25`.
 *
 */
// SOLUCIÓN

// let pagos = [124, 58, 268];

// function getTips(pagos) {
//   for (let i = 0; i < pagos.length; i++) {
//     if (pagos[i] < 50) {
//       pagos[i] = pagos[i] * 0.2;
//     } else if (pagos[i] > 50 && pagos[i] < 200) {
//       pagos[i] = Math.round(pagos[i] * 0.15 * 100) / 100;
//     } else if (pagos[i] > 200) {
//       pagos[i] = pagos[i] * 0.1;
//     }
//   }

//   return pagos;
// }

// // Esto non funciona como debería.
// function sum(a, b) {
//   let c = [];
//   for (let i = 0; i < a.length; i++) {
//     c[i] = a[i] + b[i];
//   }
//   return c;
// }

// console.log(getTips(pagos));

// console.log(sum(pagos, getTips(pagos)));

/**
 * ###################################
 * ###### E J E R C I C I O   3 ######
 * ###################################
 *
 * Dado el siguiente array de números:
 *
 * `nums = [100, 3, 4, 2, 10, 4, 1, 10]`
 *
 * `1.` Recorre todo el array y muestra por consola cada uno de sus
 *      elementos con la ayuda de un `for`, con la ayuda de un `map`
 *      y con la ayuda de un `for...of`.
 *
 * `2.` Ordena el array de menor a mayor sin emplear `sort()`.
 *
 * `3.` Ordena el array de mayor a menor empleando `sort()`.
 *
 */
// SOLUCIÓN

// let nums = [100, 3, 4, 2, 10, 4, 1, 10];
// // 1##########################################################

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// // La parte del map no está correcta.
// let numMap = nums.map(function(value, i, array) {
//   value[i];
//   console.log(value[i]);
// });
// console.log(numMap);

// for (let num of nums) {
//   console.log(num);
// }

// nums.forEach(function(value) {
//   console.log(value);
// });

/**
 * ###################################
 * ###### E J E R C I C I O   4 ######
 * ###################################
 *
 * Crea una `arrow function` que reciba dos números por medio del
 * `prompt`, reste ambos números, y nos devuelva el resultado.
 * En caso de que el resultado sea negativo debe cambiarse a
 * positivo. Este resultado se mostrará por medio de un `alert`.
 *
 */

let numOne = prompt("Give me a number", 0);
let numTwo = prompt("Give me another number", 0);

let resta = (numOne, numTwo) => {
  let solution = numOne - numTwo;
  if (solution < 0) {
    solution = -solution;
  }
  return solution;
};

alert(resta(numOne, numTwo));
//#######################################################################################################################################################
// ####### Ejercicios Complementarios :  ################################################################################################################
//#######################################################################################################################################################

//Ejercicio 2
// Valid Anagram

// let s = "anagram";
// let t = "nagaram";

// function proveAnagram(a, b) {
//   let y = a.split("").sort();
//   let x = b.split("").sort();

//   console.log(y);
//   console.log(x);

//   for (let i = 0; i < y.length; i++) {
//     if (y[i] != x[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(proveAnagram(s, t));

//#############################################################
// Ejercicio:3
// Sort Array by Parity

// let arr = [3, 2, 1, 4, 5, 6];

// function sortByParity(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let x = arr[i] % 2;

//     if (x !== 0) {
//       arr.push(arr[i]);
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// }

// console.log(sortByParity(arr));

//#############################################################
// Ejercicio:4
// N-Repeated Element in Size 2N Array

// let arr = [5, 1, 5, 2, 5, 3, 5, 4];

// function sayIfRepeated(arr) {
//   arr.sort(function(a, b) {
//     return a - b;
//   });

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       return arr[i];
//     }
//   }
// }

// console.log(sayIfRepeated(arr));
