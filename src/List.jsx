function List(props){
    const itemList=props.items;
    const category=props.category;
    // Sorting:
    // fruits.sort((a,b)=>a.name.localeCompare(b.name)); Ascending Order Lexicographically
    // fruits.sort((a,b)=>b.name.localeCompare(a.name)); Descending Order Lexicographically
    // fruits.sort((a,b)=>a.calories-b.calories); Ascending order according to the calorie value
    // const lowCalFruits=fruits.filter(fruit=>fruit.calories<100);
    // const lowCalorie=lowCalFruits.map(fruit=>
    //                                 <li  key={fruit.id}>
    //                                     {fruit.name}
    //                                 </li>);
    itemList.sort((a,b)=>a.name.length-b.name.length);
    const listItems=itemList.map(item=>
            <li key={item.id}>
                {item.name}: &nbsp;
                {item.calories}
            </li>
        );
    return (<>
            <h4 className="Category">Category: {category}</h4>
            <ol className="ListItems">{listItems}</ol>
            </>);
}
export default List