import React, { useContext } from 'react'
import "./Lampa.css"
import { KattContext } from '../context/KattContext'





export default function Lampa(props) {

    const {katt} = useContext(KattContext)

    function handleClick(){
        katt(props.index)
    }

  return (
    <div className={`lampa ${props.jel ? "fel" : "le"}`} onClick={()=>handleClick()}></div>
  )
}
