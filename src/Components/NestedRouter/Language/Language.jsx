import React from 'react'

const Language = () => {
  return (
    <div>
      <h2 className='sub-title py-3 fs-2 '>Language</h2>
      <div className=' mt-5 d-flex flex-column align-items-center gap-2'>
        <h6 className='sub-title fs-5'>Choose your preferred language</h6>
        <div className='details'>
          <h2 style={{ color: "#A661C6",fontWeight:"bold" }}>Arabic</h2>
          <h2 style={{ color: "#A661C6", fontWeight: "bold" }}>English</h2>
        </div>
      </div>

    </div>
  )
}

export default Language