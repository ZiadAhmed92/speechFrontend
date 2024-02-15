import axios from 'axios'
import React, { useState } from 'react'

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("password")
  const [loading, setLoading] = useState(false)
  console.log(newPassword)
  let resetPassword = async () => {
    try {
      const { data } = await axios.post(`https://speech-sapm.onrender.com/users/resetPassword`, newPassword)
      // if (data.message == "success") {
      //   setPhoto(data.photo.path)
      //   console.log(photo)
      //   setLoading(false)
      // }
      console.log(data)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  function submitResetPassword(e) {
    e.preventDefault();
    setLoading(true);
    resetPassword();

  }


  return (
    <div className='resetPassword'>
      <form onSubmit={submitResetPassword} method="post" className='form-reset'>
        <label htmlFor="password" className='label-forget'>New Password:</label>
        <input type="password" id="password" name="password" className='input-reset' onChange={(e) => setNewPassword(e.target.value)} required />
        <button type="submit" className='btn-reset'>Reset Password</button>
      </form>
    </div>
  )
}

export default ResetPassword