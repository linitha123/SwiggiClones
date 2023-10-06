import React from 'react'

const MenuList = (props) => {
    let menulist = props?.menuItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.categories[0]?.itemCards[0]?.card?.info
    console.log(menulist)
   const {name} = menulist
    return (
    <div>MenuList</div>
  )
}

export default MenuList