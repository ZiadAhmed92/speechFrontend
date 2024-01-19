import React from 'react'
import img1 from "../../../image/record.png"
import img2 from "../../../image/setRecord.png"
import "./NewRecord.css"

const Newrecord = () => {
  return (
    <div className='parent-record d-flex flex-column align-items-center justify-content-around'>
      <h4 className='sub-title'>Click the button to start recording or import an audio</h4>
      <div>
        <img src={img1} className='record'/>
        <img src={img2} className='record' />
      </div>
      <button className="btn-f-page btn-record"> Show Result</button>
    </div>
  )
}

export default Newrecord