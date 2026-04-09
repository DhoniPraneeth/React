import React,{useState,useEffect} from 'react';
function MyComponent(){
    const [height,setHeight]=useState(window.innerHeight);
    const [width,setWidth]=useState(window.innerWidth);
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            console.log("Hello guys");
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        })
    });
    useEffect(()=>{
        document.title=`${width} ${height}`;
    },[width,height]);
    return (<div>
        <h4>Height of the Window: ${height}</h4>
        <h4>Width of the Window: ${width}</h4>
    </div>);
}
export default MyComponent;

