import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    const [onlineStatus, setOnlineStatus] = useState(true);

    // As we have to load the even listener only once, therefore we use useEffect
    useEffect(()=>{

        window.addEventListener("online", ()=>{
            setOnlineStatus(true);

        });
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);

        })

    },[])


    return onlineStatus;
}


export default useOnlineStatus;