import React,{useState} from 'react';
function ColorPicker(){
    const [color,setColor]=useState("#afa9a9");
    const handleColor=(event)=>setColor(event.target.value);
    return (<>
    <div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label>Select a color: 
        </label>
        <input value={color} type='color' onChange={handleColor}></input>
    </div>
    </>);
}
export default ColorPicker;