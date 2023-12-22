import  {createContext,useEffect,useState} from "react"
import { api } from "../api/api";

export const TransationContext=createContext();
export const EntradaContext=createContext();
export const SaidaContext=createContext();
export const TotalContext=createContext()

const ContextGlobal = ({children}) => {
    const [transation,setTransation]=useState([])    
    const [entradas,setEntrada]=useState(0)    
    const [saidas,setSaida]=useState(2)    
    const [total,setTotal]=useState(entradas-saidas)    
    async function buscarTodasTransacao(){
        const  todasTransacaos=(await api.get("/index")).data.transation
        console.log(todasTransacaos)
        setTransation(todasTransacaos);   
    }

    async function deletarTransation(id){
        try {
          const permicao= confirm("Desejas realmente apagar esse registro?")
          if(permicao===true){
            await api.delete(`/destroy/${id}`)
            .then((response)=>{
              console.log("Transction deletado",response.data)
            })
          }
          else{
            return null
          }
        } catch (error) {
          console.log({
            message:"erro ao apagar a transation",
            error:error
          })
        }


        buscarTodasTransacao()
    }
  
      
       
        

   


  return (
    <TransationContext.Provider  value={{transation,buscarTodasTransacao,deletarTransation}}>
            <EntradaContext.Provider value={{entradas,setEntrada}}>
                    <SaidaContext.Provider value={{saidas,setSaida}} >
                <TotalContext.Provider value={{total,setTotal}}>
                        {children}
                </TotalContext.Provider>
                </SaidaContext.Provider>
            </EntradaContext.Provider>
    </TransationContext.Provider>
  );
};
export default ContextGlobal;