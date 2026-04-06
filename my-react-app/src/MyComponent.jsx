import {useState} from 'react'

function MyComponent(){
    let [count,setCount]=useState(0);

    const decrementCount=()=>{
        setCount(count-1);
    };
    const resetCount=()=>{
        setCount(0);
    }
    const incrementCount=()=>{
        setCount(count+1);
    }
    return (<div className="counter">
                <p className="count">{count}</p>
                <button className="changeButton" onClick={decrementCount}>Decrement</button>
                <button className="changeButton" onClick={resetCount}>Reset</button>
                <button className="changeButton" onClick={incrementCount}>Increment</button>
          </div>);
}
export default MyComponent