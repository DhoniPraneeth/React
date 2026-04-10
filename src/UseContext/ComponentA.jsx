/*
useContext=React Hook that allows you to share values between multiple level of components without
passing props through each level.
=>Provide Component:
    1.import {createContext} from 'react';
    2.export const MyContext=createContext();(Global var)
    3.<MyContext.Provider value={value}>
        <Child/>
      <MyComponent.Provider>
=>Consumer Component
    1.import {userContext} from 'react'
      import {MyContext} from './ProviderComponent.jsx;
    2.const value=useContext{MyContext}
*/

import React,{useState,createContext} from "react";
import ComponentB from './ComponentB.jsx';
import "./Component.css";
export const UserContext=createContext();
function ComponentA(){
    const [user,setUser]=useState("Praneeth");
    return <div className="heading">
        <h3>ComponentA</h3>
        <h4> Hello {user}</h4>
        <UserContext.Provider value={user}>
        <ComponentB user={user}/>
        </UserContext.Provider>
    </div>
}
export default ComponentA