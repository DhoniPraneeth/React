/*
useEffect()=React Hook that tells React to do some code when:
            =>This Component Re-renders
            => This Component mounts(adding content into the DOM)
            =>When the state of a value changes
    Syntax:useEffect(function,[dependencies])
    1.usEffect(()=>{})          =>Runs after every re-render
    2.useEffect(()=>{},())      =>Runs only on mount
    3.useEffect(()=>{},[value]) =>Runs on mount+when value changes

    USES:
    #1. Event Listners
    #2. DOM Manipulation
    #3. Subscriptions (real-time updates)
    #4. Fetching Data from an API
    #5. Clean up when a Component unmount(Removing content from DOM)    
        Syntax:useEffect(()=>{
            return()=>{
                //Some Clean up code 
                }
            });
*/
import React,{useState,useEffect} from 'react';
function MyComponent(){
    const [count,setCount]=useState(0);
    const [color,setColor]=useState("blue");
    const increment=()=>setCount(c=>c+1);
    const decrement=()=>setCount(c=>c-1);
    const toggle=()=>setColor(c=>c=="blue"?"yellow":"blue");
    useEffect(()=>{
        console.log("Hello Guys");
        document.title=`${count} : ${color  } `;
    },[color,count]);
    return(<>
        <h3 style={{color}}>Count: {count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <br></br>
        <button onClick={toggle}>Toogle color</button>
    </>)
}
export default MyComponent;

