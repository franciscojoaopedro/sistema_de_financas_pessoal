



 export function somarValorTransations(transation,tipo){

    const filtrarValorTipoEntrada=transation.filter((transation)=>transation.tipo===tipo)
    const total=filtrarValorTipoEntrada.reduce((prev,element)=>{
       let totalEntrada=prev+element.valor;
       return totalEntrada
    },0)

    return total
}

export function formatarMoeda(value){
    const moeda =new Intl.NumberFormat("pt-br",{currency:"AOA",style:"currency"}).format(value);
    return moeda
}