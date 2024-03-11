import React, {useState} from "react";
function MyComponent(){

    let [name, setName] = useState("Guest");
    let [age, setAge]= useState(0);
    const updateAge = ()=>{
        setAge(23);
        console.log(name);
    }
    const updateNameAndAge =()=>{
        setName("Vamsi");
        updateAge();
        console.log(name);
    }

    return(
        <div>
            <p>Name:{name} Age: {age}</p>

            <button onClick={updateNameAndAge}>Set Name & Age</button>
        </div>
    );

}

export default  MyComponent;