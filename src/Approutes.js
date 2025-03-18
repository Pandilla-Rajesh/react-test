import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'

function Approutes(){

  const router = createBrowserRouter([

    {index:true, element:(<Suspense fallback={<div>...Loading</div>}><MainLayout/></Suspense>)},
    {path:'/', element:(<Suspense fallback={<div>...Loading</div>}><MainLayout/></Suspense>)}

  ])

  return(<Suspense fallback={<div>...Loading</div>}><RouterProvider router={router}/></Suspense>)
}
export default Approutes