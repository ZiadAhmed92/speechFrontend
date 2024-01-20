import React from 'react'

const Language = () => {
  return (
    <div>
      <h2 className='sub-title py-3 fs-2 '>Language</h2>
      <div className=' mt-5 d-flex flex-column align-items-center gap-2'>
        <h6 className='sub-title fs-5'>Choose your preferred language</h6>
        <div className='details p-5'>
          <div className='d-flex align-items-center justify-content-between'>
            <h2 style={{ color: "#A661C6",fontWeight:"bold" }}>Arabic</h2>
            <h2 style={{ color: "#A661C6", fontWeight: "bold" }}>English</h2>
          </div>
          <select id="gender" className="input-signup curser-pointer my-2" >
            <option value="Arabic" className="male">Arabic</option>
            <option value="English" className="male">English</option>
          </select>
          <button className='btn  w-100 mt-5' style={{ background:"#c41d6b",color:"var(--text)"}}>Change</button>
        </div>
      </div>

    </div>
  )
}

export default Language