import { useEffect, useState } from "react";

const User = (props) =>{

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Functional set Interval");
        },1000);

        return()=>{
            clearInterval(timer);

        }
    },[])
    const [count] = useState(0); // First state variable
    const [count2] = useState(2); // Second state variable
    return(
        <div className="user-class">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2> Name: {props.name}</h2>
            <h3> Location: {props.location}</h3>
            <h3> Contact: @gagancheema</h3>

        </div>
    )
}

export default User;