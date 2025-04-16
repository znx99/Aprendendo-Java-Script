// 1)Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase 
// e a mesma frase com letras maiúsculas.
const frase1 = "Ola alura.com"
const frase_uper = frase1.toUpperCase()
const comprimento_frase = frase1.length
console.log(frase1, frase_uper, comprimento_frase)
// 2)Declare duas variáveis, uma inicializada com valor null e
//  outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
let variavel1;
let variavel_null = null;
console.log(variavel1, variavel_null)
// 3)Crie 3 variáveis de tipos diferentes, utilize template strings para combinar 
// os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
const estudante = "zanella"
const professor = "Mauro"
const materia = "fisica"
const string_unica = `${estudante}, ${professor}, ${materia}`
console.log(string_unica)
// 4)Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string 
// e da string para número. Exiba os tipos de dados resultantes no console.
const numerica = 2
const irma = 'luana'
const numerica_string = toString(numerica)
console.log(typeof numerica_string, typeof irma, typeof numerica)
// 5)Crie uma variável com uma string e utilize métodos de manipulação de strings,
// como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. 
// Exiba os resultados finais no console.
const cachorro = 'tudy'
const cachorro_slice =cachorro.slice(1,4)
console.log(cachorro.toUpperCase(), cachorro.toLowerCase(), cachorro_slice)
const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
let bonusAnual = 3000;
bonusAnual += 1

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;
console.log(resultado)