import React,{ useState,useRef,useEffect } from "react";

function StopWatch(){
    const [isRunning,setIsRunning]=useState(false);
    const [elapsedTime,setElapsedTime]=useState(0);
    const intervalRefId=useRef(null);
    const startTimeRef=useRef(0);
    useEffect(()=>{
        if(isRunning){
            intervalRefId.current=setInterval(()=>{
                setElapsedTime(Date.now()-startTimeRef.current);
            },10);
        }
        return()=>{
            clearInterval(intervalRefId.current);
        }
    },[isRunning]);
    function start(){
        setIsRunning(true);
        startTimeRef.current=Date.now()-elapsedTime;
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }
    function format(){
        let hours=Math.floor(elapsedTime/(1000*60*60));
        let minutes=Math.floor(elapsedTime/(1000*60)%60);
        let seconds=Math.floor(elapsedTime/(1000)%60);
        let milliseconds=Math.floor((elapsedTime%1000)/10);
        hours
        minutes=String(minutes).padStart(2,"0");
        seconds=String(seconds).padStart(2,"0");
        milliseconds=String(milliseconds).padStart(2,"0");
        return `${hours}:${minutes}:${seconds}`;
    }
    return(<div className="Stopwatch">
        <div className="display">{format()}</div>
        <div className="controls">
            <button className="start" onClick={start}>Start</button>
            <button className="stop" onClick={stop}>Stop</button>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    </div>);
}
export default StopWatch;