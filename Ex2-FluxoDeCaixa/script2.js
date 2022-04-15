/* 
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
* receitas: [] 
* despesas: []
Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.
*/

let familia ={
    receitas: [2300, 4500, 1200, 800],
    despesas: [2300, 4500, 1200, 800, 300]
}

 function sum(array) {
     let total = 0;

     for(let value of array) {
        total += value
     }

     return total
 }

function calculoTotal() {
    const calculoReceita = sum(familia.receitas)
    const calculoDespesa = sum(familia.despesas)

    const total = calculoReceita - calculoDespesa

    if (total > 0){
        console.log(`Saldo Positivo: R$ ${total.toFixed(2)}`)
    }else if (total < 0) {
        console.log(`Saldo Negativo: R$ ${total.toFixed(2)}`)
    }else{
        console.log(`Saldo Zerado: R$ ${total.toFixed(2)}`)
    }
}

calculoTotal()