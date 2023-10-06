import React,{lazy,Suspense} from "react"
import '../index.css'
import Body from './Components/Body'
import Header from './Components/Header'
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import ReactDOM  from "react-dom/client";
import Layout from "./Components/Layout";
import Contact from './Components/Contact'
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
const Grocery=lazy(()=> import("./Components/Grocery"));
const About=lazy(()=> import("./Components/About"));


function App(){
  return (
    <div>
      <Header/>
      <Outlet />
     </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/about',
        element:<Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/resturants/:resId',
        element:<RestaurantMenu />
      },
      {
        path:'/grocery',
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      },
    ],
    errorElement:<Error />
  },
 

])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)