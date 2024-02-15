import React from 'react'

import { Link, Outlet } from 'react-router-dom'
const Month = () => {
  // http://localhost:3000
  return (
    <>
      <Outlet />
      <div className='text-center mt-5'>
        <Link to=""><button className='btn btn-warning px-3 mx-2' > 1</button></Link>
        <Link to="month2"><button className='btn btn-warning px-3 mx-2'> 2</button></Link>
        <Link to="month3"><button className='btn btn-warning px-3 mx-2'> 3</button></Link>
      </div>
    </>
  )
}

export default Month