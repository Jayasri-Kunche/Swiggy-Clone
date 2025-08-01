import { useEffect, useState } from "react";
import { menu_api } from "../utils/constants";
const useResMenu = (id) => {
    const [menu,setMenu] = useState(null)
    useEffect(() => {
        const fetchMenu = async() => {
            const res = await fetch(menu_api + id)
            const out = await res.json()
            // console.log(out)
            setMenu(out);
        }
        fetchMenu()
    },[])
    return menu;
}

export default useResMenu;