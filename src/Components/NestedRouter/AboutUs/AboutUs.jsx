import React from "react";
import "./AboutUs.css";
import female from './download.png'
import male from './download (1).png'
import ziad from '../../../image/circle-ziad.png'
import saeed from '../../../image/saeed.jpg'
import { useTranslation } from 'react-i18next';//1

export default function AboutUs() {
  const { t, i18n } = useTranslation();//2

  let array = [
    { img: saeed, name: t("Mohamed Saeed"), desc: t("Front-end Developer (React.JS)") },
    { img: ziad, name: t("Ziad Ahmed"), desc: t("Full-stack Developer (MERN)") },
    { img: female, name: t("Nourhan Gamal"), desc: t("ML Engineer") },
    { img: female, name: t("Nourhan Hassan"), desc: t("ML Engineer") },
    { img: male, name: t("Mohamed Ahmed"), desc: t("Back-end Developer (Node-js)") },
    { img: male, name: t("Somia Saad"), desc: t("Back-end Developer (Node-js)") },
    { img: female, name: t("Shahd Ahmed Bahgat"), desc: t("UI/UX Designer") },
    { img: female, name: t("Shahd Ahmed Allam"), desc: t("Documentation Writer") },
    { img: male, name: t("Mohamed Tawfeeq"), desc: t("Flutter Developer") },

  ]
  return (
    <>
      <p className="text-center tex2" style={{ color: "var(--text)" }}>{t("Our Creative Team")}</p>
      <div className="container">
        <div className="row justify-content-center">
          {
            array.map(({ img, name, desc }, i) => {
              return <div key={i} className="col-sm-4 col-md-3 my-3 aboutUS">
                <div className="">
                  <img className="card-img-top rounded-circle " src={img} alt="Card" />
                  <div className="card-body text-center">
                    <h4 className="card-title my-2" style={{ color: "var(--text)" }}>{name}</h4>
                    <p className="card-text" style={{ color: "var(--text)" }}>{desc}</p>
                  </div>
                </div>
              </div>
            })
          }


        </div>
      </div>
    </>
  );
}
