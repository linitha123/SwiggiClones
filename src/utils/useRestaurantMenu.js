import { useState,useEffect } from "react"
import { MENU_URL } from "./constant"

let useRestaurantMenu = (resId) => {
    let [menuInfo,setMenuInfo] = useState(null)
    useEffect(()=>{
        fetchMenuData()
       },[])
     
       const fetchMenuData =async ()=>{
         const fetchData = await fetch(`${ MENU_URL}${resId}`)
         const jsonData = await fetchData.json()
        setMenuInfo(jsonData)
       }
       return menuInfo
}
export default useRestaurantMenu