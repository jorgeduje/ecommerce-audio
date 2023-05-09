import {  useState } from "react"
import Contador from "./Contador"




const ContadorContainer = ({onAdd, initial=1 }) => {

     const [contador, setContador] = useState(initial)
   

    function sumar() {
        setContador(contador + 1)
    }
    function restar() {
        setContador(contador - 1)
    }
   
  return (
    <Contador  contador={contador} sumar={sumar} restar={restar} onAdd={onAdd}/>
  )
}

export default ContadorContainer