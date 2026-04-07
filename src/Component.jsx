import React,{useState} from 'react';
/*
onChange event handler: When we give input in client side this event will trigger and update
the data in backend
<input>,<textarea>,<radio>,<select>
*/
function Component(){
    const [name,setName]=useState("Guest");
    const [age,setAge]=useState(1);
    const [payment,setPayment]=useState();
    const [comment,setComment]=useState("");
    const [shipping,setShipping]=useState("PickUp");
    const handleAgeChange=(event)=>setAge(event.target.value);
    const handleNameChange=(event)=>setName(event.target.value);
    const handleComment=(event)=>setComment(event.target.value);
    const handlePaymentType=(event)=>setPayment(event.target.value);
    const handleShipping=(event)=>setShipping(event.target.value);
    return (<div>
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>
        <input value={age} type="number" onChange={handleAgeChange}></input>
        <p>Age: {age}</p>
        <textarea value={comment} placeholder='...' onChange={handleComment}></textarea>
        <p>Comment: {comment}</p>
        <select value={payment} onChange={handlePaymentType}>
            <option>Select an option</option>
            <option>VisaCard</option>
            <option>MasterCard</option>
            <option>GiftCard</option>
        </select>
        <br></br>
        <label>
            <input value="PickUp" type='radio' checked={shipping==="PickUp"} onChange={handleShipping}></input>
            PickUp
        </label>
        <label>
            <input value="Delivery" type='radio' checked={shipping==="Delivery"} onChange={handleShipping}></input>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
        <p>Payment: {payment}</p>
    </div>);
}
export default Component