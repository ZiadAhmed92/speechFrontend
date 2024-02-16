import React, { useContext, useEffect, useState } from 'react'
import "./Account.css"
import img1 from "../../../image/user.png"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';//1
import { Language } from '@mui/icons-material'
import { speechContext } from '../../Context/Store.jsx'

const Account = () => {
  const { t, i18n } = useTranslation();//2
  let Navigate = useNavigate();
  let { handleAlert } = useContext(speechContext);
  let deleteAccount = async () => {
    try {
      const { data } = await axios.delete(`https://speech-sapm.onrender.com/users/delete`, {
        headers: {
          token: `${localStorage.getItem("Token")}`
        }
      })
      if (data.message == 'Account Deleted .') {
        localStorage.removeItem('Token');
        localStorage.removeItem("imgCover");
        localStorage.removeItem("phone");
        localStorage.removeItem("Gender");
        localStorage.removeItem("Email");
        localStorage.removeItem("Date");
        localStorage.removeItem("FullName");
        localStorage.removeItem("FirstName");
        Navigate("/login");
      }


    } catch (err) {
      console.log(err)
    }
  }



  return (
    <div>
      <h2 className='fontfamily py-3 ' style={{ color: "#EF5794" }}>{t("Account1")}</h2>
      <div className='parent-account my-3 d-flex align-items-center justify-content-between p-2'>

        {
          localStorage.getItem("imgCover") == "https://speech-sapm.onrender.com/null" ? < img src={img1} className='logo-account1 rounded-circle' /> : <img src={localStorage.getItem("imgCover")} className='logo-account1 rounded-circle' />
        }




        <div>
          <h2 className='username fontfamily'>{t("UserName")} </h2>
          <br />
          <h6 className='username  sub-title name text-capitalize'>{localStorage.getItem("FullName")}</h6>
        </div>
      </div>
      <div className='details'>
        <div className=' d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center justify-content-center'>

            <i className="fa-solid fa-user logo-account"></i>
            <h3 className='p-3 username fontfamily'>{t("Name")}</h3>
          </div>
          <h3 style={{ color: "var(--textHeader)" }} className='username fontfamily text-capitalize'>{localStorage.getItem("FirstName")}</h3>

        </div>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center justify-content-center'>

            <i className="fa-solid fa-phone logo-account"></i>
            <h3 className='p-3 username fontfamily'>{t("Phone")}</h3>
          </div>
          <h3 className='phone fontfamily' style={{ color: "var(--textHeader)" }}>{localStorage.getItem("phone")}</h3>

        </div>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center justify-content-center'>
            <i className="fa-solid fa-venus-mars logo-account"></i>
            <h3 className='p-3 username fontfamily'>{t("Gender")}</h3>
          </div>
          <h3 style={{ color: "var(--textHeader)" }} className='text-capitalize username fontfamily'>{localStorage.getItem("Gender")}</h3>

        </div>
        <div>
          <div className='between d-flex align-items-center justify-content-center'>

            <Link to="/update">  <i className="fa-solid fa-pen-to-square img-account"></i></Link>
            <Link to="/update"><span className='btn-account'> {t("Change Account Info")}</span></Link>
          </div>
          <div className='between d-flex  justify-content-center gap-4 my-4'>
            <i className="img-account fa-solid fa-trash-can " onClick={() => handleAlert(deleteAccount)}></i>
            <p className='text-account username' onClick={() => handleAlert(deleteAccount)}>{t("Delete my Account")}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Account