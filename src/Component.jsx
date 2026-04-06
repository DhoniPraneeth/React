import React,{useState} from 'react';
function Component(){
    const [name,setName]=useState("Guest");
    const [age,setAge]=useState(1);
    const handleAgeChange=(event)=>setAge(event.target.value);
    const handleNameChange=(event)=>setName(event.target.value);
    return (<div>
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>
        <input value={age} type="number" onChange={handleAgeChange}></input>
        <p>Age: {age}</p>
    </div>);
}
export default Component