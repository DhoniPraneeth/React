function Button(){

   
    return (<>
        <button onClick={(e)=>{
            setTimeout(()=>{
                e.target.textContent="Bye bro🫠";
            },5000);
            
        }}>Click me 💀</button>
    </>);
}
export default Button