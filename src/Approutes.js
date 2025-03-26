import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const MainLayout = lazy(()=>import('./MainLayout/MainLayout.js'))
const Login = lazy(()=>import('./Components/Login/Login.js'))
const Home = lazy(()=>import('./Components/Home/Home.js'))
const ApiModals = lazy(()=>import('./Components/ApiModals/ApiModals.js'))
const Register =lazy(()=>import('./Components/Register/Register.js'))

function Approutes(){

  const router = createBrowserRouter([

    {index:true, element:(<Suspense fallback={<div>...Loading</div>}><Login/></Suspense>)},
    {path:'/login', element:(<Suspense fallback={<div>...Loading</div>}><Login/></Suspense>)},
    {path:'register', element:(<Suspense fallback={<div>...Loading</div>}><Register/></Suspense>)},
    {path:'/', element:(<Suspense fallback={<div>...Loading</div>}><MainLayout/></Suspense>),
    
    children:[
      {path:'home', element:(<Suspense fallback={<div>...Loading</div>}><Home/></Suspense>)},
      {path:'apimodals', element:(<Suspense fallback={<div>...Loading</div>}><ApiModals/></Suspense>)}
    ]

  },
  ])

  return(<Suspense fallback={<div>...Loading</div>}><RouterProvider router={router}/></Suspense>)
}
export default Approutes