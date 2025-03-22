import React from "react";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "./Home";

export default function Counter(){
    const [count,setCount] = useState(0);

    const data=useContext(MyContext);

    useEffect(()=>{
        console.log(count);
    },[count])

    function increment(){
        setCount((previousCount)=>previousCount+1);
        setCount((prevCount)=>prevCount+1)
    }
    return(
        <>
        <h1>{data}</h1>
        <h2 className="m-5">{count}</h2>
        <button className="mx-5" onClick={increment}>Increment</button>
        </>
    )
}