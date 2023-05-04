import { useState } from "react"
import Contador from "./Contador"


const ContadorContainer = () => {
     const [contador, setContador] = useState(1)
    function sumar() {
        setContador(contador + 1)
    }
    function restar() {
        setContador(contador - 1)
    }
    function agregar() {
        setContador(1)
    }
  return (
    <Contador contador={contador} sumar={sumar} restar={restar} agregar={agregar}/>
  )
}

export default ContadorContainer