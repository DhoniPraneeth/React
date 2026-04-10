import React,{useState,useContext} from "react";
import {UserContext} from "./ComponentA.jsx";
import "./Component.css";
function ComponentD(){
    const value=useContext(UserContext);
    return <div className="heading">
        <h3>
          ComponentD
        </h3>
        <h4>
            Bye {value}
        </h4>
    </div>
}
export default ComponentD