import React, { useEffect, useState } from "react"
import '../style.css'
import  {Link }  from "react-router-dom"
import useOnlineStatus from '../utils/useOnlineStatus'
import { LOGO_URL}  from '../utils/constant'

let Header = () => {
    const [loginBtn,setLoginBtn] = useState('Login')
   const onlineStatus = useOnlineStatus()
    return(
        <div className="flex justify-between bg-200 shadow-lg">
           <Link to='/item'><img className="w-32 rounded-[100px] mt-6 ml-1" src={LOGO_URL } alt='logo'></img></Link>
          <ul className="flex items-center p-4 m-4">
          <li className="px-4">Online Status :{onlineStatus ? "🟢" : "🔴"}</li>
                    <Link to='/'><li className="px-4">Home</li></Link>
                 <Link to="/about"><li className="px-4">About</li></Link>
                 <Link to='/contact'><li className="px-4">Contact</li></Link>
                 <Link to='/grocery'><li className="px-4">Grocery</li></Link>

                   <button onClick={()=>{
            setLoginBtn(loginBtn==="Login"?'Logout':'Login')
                   } }>{loginBtn}</button>
                  
            </ul>
            
               
        </div>
    )
}

export default Header