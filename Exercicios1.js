// 1)Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) 
// e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
const estudante = "zanella"
const inteiro = 1
const adm = false

console.log(typeof estudante)
console.log(typeof inteiro)
console.log(typeof adm)
// 2)Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. 
// Em seguida, combine-as em uma terceira variável usando o operador + e 
// em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.
const primeiro_nome = "Guilherme"
const ultimo_nome = "Zanella"
const nome_soma = primeiro_nome+ultimo_nome
const nome_String = `${primeiro_nome} ${ultimo_nome}`
console.log("Usando o operador de soma:",nome_soma)
console.log("Usando o template string:", nome_String)
// 3)Declare duas variáveis, uma contendo um número e outra contendo uma string. 
// Em seguida, combine-as em uma terceira variável usando template strings 
// para montar uma frase e exiba o resultado no console.
const numero = 51997
const string_declare = "Znx99"
const amd = false
console.log(`Sua senha é: ${numero}\nSeu nome é: ${string_declare}\nAdm: ${adm}`)
// 4)Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, 
// reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
let nome_4 = "Znx99"
console.log(nome_4)
nome_4 = "Zanella"
console.log(nome_4)
// 5)Declare uma variável usando var fora de um bloco de código (por exemplo, if) 
// e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco 
// e fora dele utilizando console.log e analise os resultados. 
// Faça o mesmo processo utilizando let e compare com os resultados anteriores.
var livro = "Matematica"
if(1>0){
    var elogio = "Bom"
}
let livro_2 = "Matematica LET"
if(1>0){
    let elogio_2 = "Bom LET"
}
//console.log(`Var: ${livro} , ${elogio}\nLet: ${livro_2}, ${elogio_2}`) IRA OCORRER UM ERRO

// 6)Declare uma variável booleana que informa se está chovendo 
// e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando 
// se é preciso levar um guarda-chuva ou não dependendo do valor da variável.
const chovendo = false
if (chovendo===true){
    console.log("Levar Guarda Chuva")
}else{
    console.log("Não Precisa Levar Guarda Chuva")
}