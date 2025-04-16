// 1)Crie variáveis que armazenem o valor do saldo, de depósito 
// e de um saque de uma conta bancária, depois realize operações de adição 
// e subtração entre eles utilizando uma variável chamada operacao, 
// considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
let saldo = 1000;
const saque = 50;
const deposito = 500;
const operacao = saldo - saque;

console.log('Saldo:', saldo); 
console.log('Saldo após saque:', operacao);
// 2)Crie uma variável numérica com um valor. Utilize um operador ternário para verificar 
// se esse valor é par ou ímpar. Exiba o resultado no console.
let valor = 2
if (valor %2 === 0){
    console.log("PAR")
}else{
    console.log("IMPAR")
}