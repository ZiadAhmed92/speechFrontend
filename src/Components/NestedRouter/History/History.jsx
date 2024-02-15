import React from 'react'


import "./History.css"
import { Link, Outlet } from 'react-router-dom'
const History = () => {
  return (
    <div className='w-100'>
      <div className='text-center'>
        <Link to=""><button className='btn btn-warning px-3 mx-2' >Day</button></Link>
        <Link to="week"><button className='btn btn-warning px-3 mx-2'>Week</button></Link>
        <Link to="month"><button className='btn btn-warning px-3 mx-2'>Month</button></Link>
      </div>
      <Outlet />


    </div>
  )
}

export default History