import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import Shimmer from './Shimmer'
import { MENU_URL} from '../utils/constant'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import MenuList from './MenuList'
import Body from './Body'
import menulist from './MenuList'

const RestaurantMenu = () => {
  // let [menuInfo,setMenuInfo] = useState(null)

  let {resId} = useParams()
  const menuInfo = useRestaurantMenu(resId)
// console.log(resId)
// console.log(`{ MENU_URL}${resId}`)
  
  if(menuInfo === null ){
    return <Shimmer />
  }
  const {name,costForTwoMesage,cuisines} = menuInfo?.data?.cards[0]?.card?.card?.info

  const {itemCards}= menuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
let a = menuInfo.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards

return (
  
    <div className="text-center ">
      <h1 className='text-blue-800 font-bold'>{name}</h1>
      <h2 className='text-gray-600 font-serif'>{cuisines.join(' ,')}</h2>
      <p>{costForTwoMesage}</p>
   
         {a.map(item=>item?.card?.card["@type"].includes('ItemCategory')&&
         <div className='flex justify-between'>
           <h1 className='shadow-lg py-3 w-full text-left px-20 bg-slate'>{item?.card?.card?.title} 
           ({ (item?.card?.card?.itemCards?.length)})</h1>
           <img className="w-4 h-5 mt-5 mr-10" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLBwDcErnEePyOMrQVcG4KcI81ClIiLCf2g&usqp=CAU'/>
          </div>
        
           
          )}
    
       
    </div>
    
  ) 
}

export default RestaurantMenu