import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../image/backPage.png"
import img2 from "../../image/thankYou.gif"
import "./ThankYou.css"
const ThankYou = () => {
  return (
    <div>
      <Link to="/homepage/suggestion"><img src={img1} className="img-1-forget mx-2" /></Link>
 <div className="container">
  <div className="row">
    <div className="col-md-12 text-center">
            <img src={img2} className="img-thank" />
    </div>
    <div className="col-md-12 text-center">
            <h3 className='text-thank' >Thank you for supporting us</h3>
    </div>
  </div>
 </div>
    </div>
  )
}

export default ThankYou