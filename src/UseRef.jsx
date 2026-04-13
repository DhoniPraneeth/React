import React,{useState,useRef,useEffect} from "react";

function UseRef(){
    const inputRef1=useRef(null);
    const inputRef2=useRef(null);
    const inputRef3=useRef(null);
    const handleClick1=()=>{
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }
    const handleClick2=()=>{
        inputRef2.current.style.backgroundColor="yellow";
        inputRef1.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }
    const handleClick3=()=>{
        inputRef3.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
        inputRef1.current.style.backgroundColor="";
    }
    useEffect(()=>{
      console.log("Reloaded");  
    });
    return (<div>
        <button onClick={handleClick1}>
           click1!
        </button>
        <input ref={inputRef1}></input>
        <br></br>
        <button onClick={handleClick2}>
           click2!
        </button>
        <input ref={inputRef2}></input>
        <br></br>
        <button onClick={handleClick3}>
           click3!
        </button>
        <input ref={inputRef3}></input>
        <br></br>
    </div>);
}
export default UseRef;