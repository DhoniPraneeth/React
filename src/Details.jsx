import React,{useState} from 'react';
function Details(){
    const [name,setName]=useState("Guest");
    const [isSingle,toggleStatus]=useState(false); 
    const [age,setAge]=useState(1);
    const nameHandler=()=>{
        setName("Betee");
    };
    const shipHandler=()=>{
        toggleStatus(!isSingle);
    }; 
    const incrementAge=()=>{
        setAge(age+1);
    }
    return (<>
        <div className='Details'>
            <p>Name: {name}</p>
            <button onClick={()=>nameHandler()}>Update Name</button>
            <p>Age: {age}</p>
            <button onClick={()=>incrementAge()}>Increment Age</button>
            <p>Relation Ship: {isSingle?"Commited":"Single"}</p>
            <button onClick={()=>shipHandler()}>toggle Status</button>
        </div>
    </>);
}
export default Details