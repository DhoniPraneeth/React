import React,{useState} from 'react';
function Car(){
    const [car,setCar]=useState({year: 2025,
                                make: "Ford",
                                model: "Mustang"});
    const handleCarYear=(event)=>setCar(c=>({...c,year: event.target.value}));
    const handleCarMake=(event)=>setCar(c=>({...c,make: event.target.value}));
    const handleCarModel=(event)=>setCar(c=>({...c,model: event.target.value}));
    return (<>
            <p>Your Favourite Car: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleCarYear}></input><br></br>
            <input type="text" value={car.make} onChange={handleCarMake}></input><br></br>
            <input type="text" value={car.model} onChange={handleCarModel}></input>
            </>);
}
export default Car