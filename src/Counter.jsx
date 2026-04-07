/*Updater function=>A function passed as an argument to setState() ususally.
                    ex.setAge(age->age+1)
                    Allow for safe updates based on the previous state.
                    Used with multiple state updates and asynchronous functions
                    Good practice to use updater functions
*/
import React,{useState} from 'react';
function Counter(){
    const [count,setCount]=useState(0);
    function handleIncrement(){
        setCount(prevCount=>prevCount+1);
        setCount(prevCount=>prevCount+1);
        setCount(prevCount=>prevCount+1);
    }
    function handleDecrement(){
        setCount(c=>c-1);
        setCount(c=>c-1);
        setCount(c=>c-1);
    }
    function reset(){
        setCount(0);
    }
    return (<>
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    </>);
}
export default Counter;