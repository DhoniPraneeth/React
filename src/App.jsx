import Button from "./Button";
import Component from "./Component";
import Details from "./Details";
import List from "./List";
function App() {
   const fruits=[
        {id: 1,name: "apple",calories: 150},
        {id: 2,name: "orange",calories: 50},
        {id: 3,name: "banana",calories: 70},  
        {id: 4,name: "coconut",calories: 80},  
        {id: 5,name: "pineapple",calories: 60}];
   const vegetables=[
        {id: 1,name: "Green Chilli",calories: 150},
        {id: 2,name: "Tomato",calories: 50},
        {id: 3,name: "Onion",calories: 70},  
        {id: 4,name: "Potato",calories: 80},  
        {id: 5,name: "Carrot",calories: 60}];
   return ( 
      <>    
        <Component/>
      </>

   );
}
export default App