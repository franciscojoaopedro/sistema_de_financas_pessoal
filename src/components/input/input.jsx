import { useContext, useEffect, useState } from "react";
import styles from "./input.module.css"
import { api } from "../../api/api";
import { TransationContext } from "../../contexts/context";


const Input = () => {
    const [descricao,setDescricao]=useState("")
    const [valor,setValor]=useState("")
    const [tipo,setTipo]=useState("")

        const {buscarTodasTransacao}=useContext(TransationContext)

    const handleSaveTransations= async  ()=>{

        if(!descricao || !valor || !tipo){
          return  alert("os verifica os campos vazios!");
        }
        const data={
            descricao,
            valor,
            tipo}
        
            await api.post("/create",data)
            .then((response)=>console.log(response))
            buscarTodasTransacao()
            deleteInputs()

    }

    function deleteInputs(){
        setDescricao("")
        setTipo(""),
        setValor("")
    }
   

  return <div   className={styles.container}>
            <form>
                <div   className={styles.AreaInput}>
                    <label>Descrição</label>
                    <input type="text"  value={descricao}  onChange={(e)=>setDescricao(e.target.value)} />
                </div>
                <div className={styles.AreaInput}>
                    <label>Valor</label>
                    <input type="number"  value={valor}  onChange={(e)=>setValor(e.target.value)} />
                </div>
                <div className={styles.checkbox} >
                    <div className={styles.checkboxFlex}>
                    <label>Entrada</label>
                    <input    type="checkbox"  value={"Entrada"} onChange={(e)=>setTipo(e.target.value)}   />
                    </div>
                    <div className={styles.checkboxFlex}>
                    <label>Saída</label>
                    <input type="checkbox"  value={"Saída"}  onChange={(e)=>setTipo(e.target.value)}   />
                    </div>
                </div>
                <div className={styles.AreaButton}>
                    <button  onClick={handleSaveTransations} className={styles.btnAdicionar} type="button">Adicionar</button>
                </div>
            </form>
  </div>;
};
export default Input;