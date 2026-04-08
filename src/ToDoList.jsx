import { func } from 'prop-types';
import React,{useState} from 'react';
function ToDoList(){
    const [tasks,setTasks]=useState(["Eat Breakfast","Do Bathing"]);
    const [newTask,setNewTask]=useState();
    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim()!=""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks=tasks.filter((_,i)=>i!=index);
        setTasks(updatedTasks);
    }
    function MoveUp(index){
        if(index>0){
            const uTasks=[...tasks];
            [uTasks[index],uTasks[index-1]]=[uTasks[index-1],uTasks[index]];
            setTasks(uTasks);
        }
    }
    function moveDown(index){
        if(index<tasks.length-1){
            const uTasks=[...tasks];
            [uTasks[index],uTasks[index+1]]=[uTasks[index+1],uTasks[index]];
            setTasks(uTasks);
        }

    }
    return (<div className="ToDoList">
        <h1>To-Do-List</h1>
        <input value={newTask} type="text" placeholder='Enter your task' 
                            onChange={handleInputChange}></input>
        <button className="add-button"
                onClick={addTask}>Add</button>
        <ul>
            {tasks.map((task,i)=>
            <li key={i}>
                <span className="text-area">{task}</span>
                <button className="delete-button"
                        onClick={()=>deleteTask(i)}>Delete</button>
                <button className="Move-button" onClick={()=>MoveUp(i)}>👆</button>
                <button className="Move-button" onClick={()=>moveDown(i)}>👇</button> 
            </li>
            )}
        </ul>
    </div>);
}
export default ToDoList;