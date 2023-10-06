import React, { useEffect } from 'react'
import  ReactDOM  from 'react'
import RestaurantCard, { withVegLabel } from './RestaurantCard'
import Shimmer from './Shimmer'
import useOnlineStatus from '../utils/useOnlineStatus'
import { Link } from 'react-router-dom'
function Body(){
    let [listOfRestaurants,setListOfRestaurants] = React.useState([



    // {
    //     imgUrl : 'https://img.freepik.com/free-photo/front-view-breakfast-table-with-eggs-buns-cheese-fresh-juice-restaurant-during-daytime-food-meal-breakfast_140725-25904.jpg?size=626&ext=jpg&ga=GA1.1.1316105049.1693383838&semt=ais',
    //     title: 'Taj Mahal-Abids',
    //     decription:'North Indian Chinese, South Indian',
    //     rating: 4.4,
    //     price:'300 for two',
    //     time: '22 minutes'
    // },
    // {
    //     imgUrl : 'https://img.freepik.com/free-photo/front-view-breakfast-table-with-eggs-buns-cheese-fresh-juice-restaurant-during-daytime-food-meal-breakfast_140725-25904.jpg?size=626&ext=jpg&ga=GA1.1.1316105049.1693383838&semt=ais',
    //     title: 'Taj Mahal-Abids',
    //     decription:'North Indian Chinese, South Indian',
    //     rating: 4.4,
    //     price:'300 for two',
    //     time: '22 minutes'
    // },
    // {
    //     imgUrl : 'https://img.freepik.com/free-photo/front-view-breakfast-table-with-eggs-buns-cheese-fresh-juice-restaurant-during-daytime-food-meal-breakfast_140725-25904.jpg?size=626&ext=jpg&ga=GA1.1.1316105049.1693383838&semt=ais',
    //     title: 'Taj Mahal-Abids',
    //     decription:'North Indian Chinese, South Indian',
    //     rating: 4.4,
    //     price:'300 for two',
    //     time: '22 minutes'
    // }
    ])
    let [searchInput,setSearchInput] = React.useState('')
    let [filterData,setFilterData] = React.useState([])
    let RestaurantVeg = withVegLabel(RestaurantCard)
    
 useEffect(()=>{
    getData()
  },[])  
    

    let getData = async () =>{
        let fetchData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        let fetchResult = await fetchData.json()
        setListOfRestaurants(fetchResult?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         setFilterData(fetchResult?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
      const onlineStatus = useOnlineStatus();
      if (onlineStatus === false)
        return (
          <div>
            <h1>Seems like you are offline please check it </h1>
          </div>
        );
    return (listOfRestaurants.length === 0)?<Shimmer />:(
     
      <div>
       
        <div className='search-container'>
        <button className='bg-orange-400 text-white px-4 mt-2' onClick={() => {
          getData()
        }}> All </button>
        <input className=' bg-gray-300 rounded-sm mr-2 ml-2 border-none text-black' type='text' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)}/>
        <button className="bg-orange-400 px-3 text-white" onClick={()=> {
         
         let searchInputData = filterData.filter(item => item.info.name.toUpperCase().includes(searchInput.toUpperCase()))
          setListOfRestaurants(searchInputData)
          
        }}> search </button>
        </div>
       
         <button  className="bg-blue-300 px-3 text-white mt-1" onClick={()=>setListOfRestaurants(filterData.filter(item => item?.info.avgRating>4.2))}>filtered Data</button>
        <div className='flex flex-wrap'>
     {
        listOfRestaurants.map(item => <Link to ={'/resturants/'+item.info.id}>
                 { item.info.veg ? (<RestaurantVeg key={item.info.id} list={item} /> ):( <RestaurantCard key={item?.info?.id} list={item} />)}

          </Link>)
     }
    
        </div>
        
         </div>
    )
    
}

export default Body

