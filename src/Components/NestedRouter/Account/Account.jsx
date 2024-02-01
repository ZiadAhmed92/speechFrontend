import React, { useContext, useEffect, useState } from 'react'
import "./Account.css"
import account from "../../../image/changeAccount.png"
import img1 from "../../../image/welcome2.png"
import { speechContext } from '../../Context/Store.jsx'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';//1
import { Language } from '@mui/icons-material'

const Account = () => {
  const { t, i18n } = useTranslation();//2
  let { userData, setPhoto, photo } = useContext(speechContext);
  
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };


  const formData = new FormData();
  formData.append('path', selectedFile);
  formData.append('createdBy', userData?._id);

  let deleteAccount = async () => {
    try {
      const { data } = await axios.delete(`https://speech-emotion.onrender.com/delete/${userData?._id}`)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }
  let getMyPhoto = async () => {
    try {
      const { data } = await axios.get(`https://speech-emotion.onrender.com/photo/${userData?._id}`)
      console.log(data)
      if (data.message == "success") {
        setPhoto(data.photo.path)

      }
    } catch (err) {
      console.log(err)
    }
  }
  let uploadPhoto = async () => {
    await axios.post('https://speech-emotion.onrender.com/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error( error);
      });
    }
  useEffect(() => {
    getMyPhoto()  
  }, [])

  return (
    <div>
      <h2 className=' py-3 ' style={{ color: "#EF5794" }}>{t("Account1")}</h2>
      <div className='parent-account my-3 d-flex align-items-center justify-content-between p-2'>
        <div className='parent-photo position-relative   '>
          {photo ? <>
            <img src={"https://speech-emotion.onrender.com/" + photo} className='logo-account1 rounded-circle' />
            {/*  */}
            <div className='upload-photo '>
              <form id="imageForm" encType="multipart/form-data">
                <label htmlFor="fileInput" style={{ cursor: "pointer", textAlign: "center" }} onClick={() => { selectedFile ? uploadPhoto():"" }}>
                  {t("Change Photo")}
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange}  
                  />
                </label>
              </form>
            </div>
          </> : <>
            <img src={"https://speech-emotion.onrender.com/" + photo} className='logo-account1 rounded-circle' />
            {/*  */}
            <div className='upload-photo '>
              <form id="imageForm" encType="multipart/form-data">
                <label htmlFor="fileInput" style={{ cursor: "pointer", textAlign: "center" }} onClick={() => { selectedFile ? uploadPhoto() : "" }}>
                  {t("upload Photo")}
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </label>
              </form>
            </div>
          </>}
        </div>

        <div>
          <h2 className='username'>{t("UserName")} </h2>
          <br />
          <h6 className='username sub-title name text-capitalize'>{userData?.first_name}</h6>
        </div>
      </div>
      <div className='details'>
        <div className=' d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center justify-content-center'>

            <i className="fa-solid fa-user logo-account"></i>
            <h3 className='p-3 username'>{t("Name")}</h3>
          </div>
          <h3 style={{ color: "var(--textHeader)" }} className='username text-capitalize'>{userData?.first_name}</h3>

        </div>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center justify-content-center'>

            <i className="fa-solid fa-phone logo-account"></i>
            <h3 className='p-3 username '>{t("Phone")}</h3>
          </div>
          <h3 className='phone' style={{ color: "var(--textHeader)" }}>{userData?.phone}</h3>

        </div>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center justify-content-center'>
            <i className="fa-solid fa-venus-mars logo-account"></i>
            <h3 className='p-3 username '>{t("Gender")}</h3>
          </div>
          <h3 style={{ color: "var(--textHeader)" }} className='text-capitalize username'>{userData?.gender}</h3>

        </div>
        <div>
          <div className='between d-flex align-items-center justify-content-center'>

            <Link to="/update">  <i className="fa-solid fa-pen-to-square img-account"></i></Link>
            <Link to="/update"><span className='btn-account'> {t("Change Account Info")}</span></Link>
          </div>
          <div className='between d-flex  justify-content-center gap-4 my-4'>
            <i className="img-account fa-solid fa-trash-can " onClick={deleteAccount}></i>
            <p className='text-account username' onClick={deleteAccount}>{t("Delete my Account")}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Account