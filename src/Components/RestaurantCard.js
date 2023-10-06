import {CDN_URL} from '../utils/constant'

function RestaurantCard(props){
let {name,costForTwo,avgRating,cloudinaryImageId,locality} = props.list.info

let frontUrl = CDN_URL
let url= `${frontUrl}${cloudinaryImageId}`
    return (
      
        <div className="m-4 p-4 w-[250px] rounded-xl bg-gray-100 hover:bg-orange-200">
        <img className="rounded-2xl" src={url} alt='image'/>
         <h4>{name}</h4>
          <p>{avgRating}</p>
          <p> {costForTwo}</p>

      
        </div>
    )
}
export const withVegLabel= (RestaurantCard)=>{
    return (props)=>{
     
        return(
            <div>
            <label className="absolute bg-green-400 text-black m-2 p-2 rounded-lg">Veg</label>
            <RestaurantCard {...props}/>


            </div>
           
        )
    }
}

export default RestaurantCard

