import React from 'react'
import "./Suggestion.css"
const Suggestion = () => {
  return (
    <form className='text-center d-flex flex-column align-items-center justify-content-center'>
      <h3>Enter your suggestion</h3>
      <textarea id="w3review" name="suggestion" className='textarea'>
        
      </textarea>
      <button className="btn-welcome1">Send</button>
    </form>
  )
}

export default Suggestion