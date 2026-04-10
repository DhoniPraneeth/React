import React,{useState} from "react";
import "./Component.css";
import ComponentD from "./ComponentD";
function ComponentC(){
    
    return <div className="heading">
           <h3>
               ComponentC
           </h3>
            <ComponentD/>
       </div>
}
export default ComponentC