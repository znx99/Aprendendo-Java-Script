const nota1 = 6;
const nota2 = 9.92;
const nota3 = '3';
const string ="abcd"
const nota4 = -2
const numero = 10;
const nome = 'Ana';
const result_1 = Number.isNaN(numero)
console.log(result_1) // false
Number.isNaN(nome) // false
const result = Number.isNaN(NaN)
console.log(result) // true   
isNaN(10) // false
isNaN(nome) // true
isNaN(NaN) // true
const total = (nota1+nota2+parseInt(nota3)+nota4)
const total_sem = total.toFixed(1)
console.log(total, total_sem)