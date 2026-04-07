import React,{useState} from 'react';
function Foods(){
    const [foods,setFoods]=useState(["Apple","Orange","Bananna"]);
    function addFood(){
        const newFood=document.getElementById('add-food').value;
        document.getElementById('add-food').value="";
        setFoods(f=>[...foods,newFood]);
    }
    function removeFood(index){
        setFoods(foods.filter((_,i)=>i!=index));
    }
    return (
        <div>
            <h2>Foods:</h2>
            <ul>
                {
                    foods.map((food,index)=>
                        <li key={index} onClick={()=>removeFood(index)}>
                            {food}
                        </li>
                    )
                }   
            </ul>
            <input type="text" id='add-food' placeholder='Enter your food name'></input>
            <button onClick={addFood}>Add Food</button>
        </div>
    );
}
export default Foods;