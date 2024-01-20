import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../../image/backPage.png"
import img2 from "../../../image/result.gif"
const Result = () => {
  return (
    <div>
          <Link to="/homepage"><img src={img1} className="img-1-forget" /></Link>
          <div className='d-flex flex-column align-items-center justify-content-center'>
              {/* التنصيق فى ملف forget password */}
              <img src={img2} style={{width:"30%"}} className='img-result'/>
              <h3 style={{ color: "#CA4B7F" }}>Result</h3>
          </div>
    </div>
  )
}

export default Result