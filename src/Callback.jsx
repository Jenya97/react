import React,{ useCallback, useEffect, useState } from 'react'

export default function Callback() {
    const [counter,setCounter]=useState(1);
    const [counter2,setCounter2]=useState(2);
    // const add=()=>{
    //     setCounter(counter+1)
    // }
    const add2=()=>{
        setCounter2(counter2+1)
    }
    const a=useCallback(()=>{
        setCounter(counter+1)
        console.log('barev');
    },[counter])
    
    useEffect(()=>{

    })
  return (
    <div>
        <button onClick={a}>add</button>
        counter: {counter}
        <button onClick={add2}>add2</button>
        counter2: {counter2}
    </div>
  )
}
