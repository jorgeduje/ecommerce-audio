import { useState } from "react"
import Contador from "./Contador"


const ContadorContainer = ({onAdd}) => {
     const [contador, setContador] = useState(1)
    function sumar() {
        setContador(contador + 1)
    }
    function restar() {
        setContador(contador - 1)
    }
   
  return (
    <Contador contador={contador} sumar={sumar} restar={restar} onAdd={onAdd}/>
  )
}

export default ContadorContainer