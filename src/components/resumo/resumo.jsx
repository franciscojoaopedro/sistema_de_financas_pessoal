import React, { useContext, useEffect, useState } from "react";

import { HiArrowCircleDown,HiArrowCircleUp} from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import styles from "./resumo.module.css"
import { TransationContext } from "../../contexts/context";
import { formatarMoeda } from "../../utils/utils";



const Resumo = () => {
    const {transation,buscarTodasTransacao,deletarTransation}=useContext(TransationContext);

    useEffect(()=>{
        buscarTodasTransacao()
    },[])
  return (
        <table key={"table"}  className={styles.table}   >
              <thead className={styles.thead} >
                <th key={"1"}>
                  Descrição
                </th  >
                <th key={"2"} >
                  Valores
                </th>
                <th key={"3"} >
                  Tipo
                </th>
                <th>
                  
                </th>
              </thead>
              <tbody className={styles.tbody}>
                {transation.map((element,index)=>(

                   <tr  className={styles.infoContent} key={index}>
                      <td>{element.descricao}</td>
                      <td>{formatarMoeda(element.valor)}</td>
                      <td className={styles.icons}   >{element.tipo==="Saída"?<HiArrowCircleUp  color='#fb7185' size={24}/>:<HiArrowCircleDown color='#2dd4bf' size={24} />}</td>
                      <td ><MdDelete color="#f43f5e" size={24} onClick={()=>deletarTransation(element._id)}/></td>
                   </tr>
                ))}

                  
              </tbody>
          </table>
  )
}
export default Resumo;