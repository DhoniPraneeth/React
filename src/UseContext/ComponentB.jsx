import React,{useState} from "react"
import ComponentC from "./ComponentC";

import "./Component.css";
function ComponentB(){
    return <div className="heading">
        <h3>
            ComponentB
        </h3>
        <ComponentC/>
    </div>
}
export default ComponentB;