import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Login from './Components/Login/Login'

function Approutes(){

  const router = createBrowserRouter([

    {index:true, element:(<Suspense fallback={<div>...Loading</div>}><Login/></Suspense>)},
    {path:'/login', element:(<Suspense fallback={<div>...Loading</div>}><Login/></Suspense>)},
    {path:'/', element:(<Suspense fallback={<div>...Loading</div>}><MainLayout/></Suspense>),
    
    children:[
      {}
    ]

  },
  ])

  return(<Suspense fallback={<div>...Loading</div>}><RouterProvider router={router}/></Suspense>)
}
export default Approutes