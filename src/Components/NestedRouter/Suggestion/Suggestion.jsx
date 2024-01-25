import React from 'react'
import "./Suggestion.css"
import Lottie from "lottie-react";
import done from "../../../Animation/done.json";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';//1

const Suggestion = () => {
  const { t, i18n } = useTranslation();//2

  return (
    <form className='text-center d-flex flex-column align-items-center justify-content-center'>
      <h3 style={{ color: "var(--text)" }} className='suggest-text'>{t("Get In Touch")}</h3>
      <textarea id="w3review" name="suggestion"placeholder={t("Message")} className='textarea'>
        
      </textarea>
      <div className=''>
        <Link to="/thanks"><button className="btn-suggestion">{t("Send")}</button></Link>
        <div className='lottie d-flex align-items-center'><Lottie loop={false} animationData={done} style={{ height: "37px" }} />{t("Message has been sent")}</div>
        
      </div>
      
    </form>
  )
}

export default Suggestion