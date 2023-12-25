import * as React from 'react';
import { useState } from 'react'

import { Header } from './components/header/header'
import { FcDoughnutChart} from "react-icons/fc";
import { HiArrowCircleDown,HiArrowCircleUp} from "react-icons/hi";
import Card from './components/card/card'
import Input from './components/input/input';

import Resumo from './components/resumo/resumo';
import { EntradaContext, SaidaContext, TotalContext, TransationContext } from './contexts/context';
import { somarValorTransations } from './utils/utils';


function App() {
  const {transation}=React.useContext(TransationContext)
  const {entradas,setEntrada}=React.useContext(EntradaContext)
  const {saidas,setSaida}=React.useContext(SaidaContext)
  const {total,setTotal}=React.useContext(TotalContext)

React.useEffect(()=>{
  
 const totalEntrada= somarValorTransations(transation,"Entrada")
 const totalSaida= somarValorTransations(transation,"Saída");
 const saldoTotal=totalEntrada-totalSaida
  setEntrada(totalEntrada)
  setSaida(totalSaida)
  setTotal(saldoTotal)
})


  return (
    <>
     <Header/>
     <div  style={{
      top:"85px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
     }}>


      <Card
        titulo={"Entrada"}
        valor={entradas}
        icons={<HiArrowCircleDown   color='#2dd4bf' size={30} />}
      />

        <Card
        titulo={"Saidas"}
        valor={saidas}
        icons={<HiArrowCircleUp  color='#fb7185' size={30} />}
        
      
      />

      <Card
        titulo={"Total"}
        valor={total}
        icons={<FcDoughnutChart  size={30} />}
      
      />  
     </div>

    <div 
     style={{
      marginTop:20,
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
     }}
    >
    <Input/>
    </div>
       
       <div
        style={{
          marginTop:20,
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column"
         
         }}
       >
            <div>
                <h2 style={{fontSize:20,fontWeight:"500"}} >Resumo</h2>
            </div>

          <Resumo />

          <div>
          
          </div>
       </div>
    </>
  )
}

export default App
