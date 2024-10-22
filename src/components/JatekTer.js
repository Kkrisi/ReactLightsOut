import React from 'react'
import Lampa from './Lampa'




export default function JatekTer(props) {


  return (
    <>
        {
            props.lista.map( (elem, index)=>{
                return (<Lampa jel={elem} key={index} index={index}/>)
            })
        }
    </>
  )
}