import axios from "axios"


const urlApiDeploy="https://api-sistema-de-financas.onrender.com";
const urlApiLocal="http://localhost:3333"
export const api=axios.create({
    baseURL:`${urlApiDeploy}`,
    headers:{
        "Content-Type":"application/json"
    }
})



