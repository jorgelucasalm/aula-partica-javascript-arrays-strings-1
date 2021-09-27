/*
2)      Dada as strings: valorA e valor B.

a) valorA = "casa"
b) valorB = "asa"
c) Transformar todas as letras em maiúsculas usando toUpperCase().
d) Exibir no console.
e) Comparar se a string valorB tem todos os caracteres contidos na string valorB.
f) Exibir no console.
*/

var valorA = "casa";
var valorB = "asa";

valorA = valorA.toUpperCase();
valorB = valorB.toUpperCase();

console.log(valorA)
console.log(valorB)

var resultado = valorB.localeCompare(valorB)

console.log(resultado)