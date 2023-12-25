/*
Juelma essa função somarValorTransations, foi criada com a 
finalidade de somar todos os valor do tipo entrada e também 
todos valores do tipo saídas.
Primeiramente tive que pensar em uma funçao que faça que receba dois parametros
 (transation: a lista onde irá percorrer e tipo: entrada ou saida como os agurmento);
Depois da função receber os agurmentos, elá irá filtrar dentro da transation, os que são tipo que recebeu 
 como argumento; 
 Usei dois metodos do array: filter, reduce

 Reduce foi usado com a finalidade de somar todos os valores, das transations
 que foram filtrada
 Espero que o ajudei a entender.....

*/
 export function somarValorTransations(transation,tipo){

    const filtrarValorTipoEntrada=transation.filter((transation)=>transation.tipo===tipo)
    
    const total=filtrarValorTipoEntrada.reduce((prev,element)=>{
       let totalEntrada=prev+element.valor;
       return totalEntrada
    },0)
    return total
}

 // Uma função para formatar meodas
export function formatarMoeda(value){
    const moeda =new Intl.NumberFormat("pt-br",{currency:"AOA",style:"currency"}).format(value);
    return moeda
}