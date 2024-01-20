import React from 'react'
import "./Suggestion.css"
import Lottie from "lottie-react";
import done from "../../../Animation/done.json";
const Suggestion = () => {
  return (
    <form className='text-center d-flex flex-column align-items-center justify-content-center'>
      <h3>Enter your suggestion</h3>
      <textarea id="w3review" name="suggestion" className='textarea'>
        
      </textarea>
      <div className='text-center '>
        <button className="btn-welcome1">Send</button>
        <p className='lottie d-flex align-items-center'><Lottie loop={false} animationData={done} style={{ height: "37px" }} />Message has been sent. Thank you</p>
        
      </div>
      
    </form>
  )
}

export default Suggestion