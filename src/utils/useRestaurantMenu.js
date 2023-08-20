// Custom hook to fetch the data for RestaurantMenu.

import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) =>{
     
    const [resMenu, setResMenu] = useState(null);

    useEffect(()=>{
        fetchData();

    },[]);

    const fetchData = async () =>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResMenu(json);
    }

    return resMenu;

}

export default useRestaurantMenu;