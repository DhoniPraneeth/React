import React,{ useState } from "react";

function MyComponent(){
    const [cars,setCars]=useState([]);
    const [year,setYear]=useState(new Date().getFullYear());
    const [make,setMake]=useState("");
    const [model,setModel]=useState("");
    const handleYearChange=(e)=>setYear(e.target.value);
    const handleMakeChange=(e)=>setMake(e.target.value);
    const handleModelChange=(e)=>setModel(e.target.value);
    function addCar(){
        setCars(c=>[...c,{year: year,make: make,model: model}]);
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }
    function removeCar(index){
        setCars(c=>c.filter((_,i)=>i!=index));
    }
    return (<div>
        <h3>Cars List:</h3>
        <ul>
            {cars.map((car,index)=><li key={index} onClick={()=>removeCar(index)}>
                {car.year} {car.make} {car.model}
            </li>)}
        </ul>
        <input type="number" value={year} onChange={handleYearChange}></input><br></br>
        <input type="text" value={make} onChange={handleMakeChange}
                    placeholder="Enter make of the car"></input><br></br>
        <input type="text" value={model} onChange={handleModelChange}
                    placeholder="Enter model of the car"></input><br></br>
        <button onClick={addCar}>Add Car</button>
    </div>);
}
export default MyComponent;
