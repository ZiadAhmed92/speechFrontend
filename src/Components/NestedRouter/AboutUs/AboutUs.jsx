import React from "react";
import "./AboutUs.css";
import female from '../../../image/female.png'
import ziad from '../../../image/circle-ziad.png'
import saeed from '../../../image/saeed.jpg'
import mashor from '../../../image/mashor.jpg'
import tawfek from '../../../image/tawfek.jpg'
import icon from '../../../image/signIn.png'

import { useTranslation } from 'react-i18next';//1

export default function AboutUs() {
  const { t, i18n } = useTranslation();//2

  let array = [
    { img: ziad, name: t("Ziad Ahmed"), desc: t("Full-stack Developer (MERN)") },
    { img: saeed, name: t("Mohamed Saeed"), desc: t("Front-end Developer") },
    { img: mashor, name: t("Mohamed Ahmed"), desc: t("Back-end Developer ") },
    { img: female, name: t("Nourhan Gamal"), desc: t("ML Engineer") },
    { img: tawfek, name: t("Mohamed Tawfeeq"), desc: t("Flutter Developer") },
    { img: female, name: t("Nourhan Hassan"), desc: t("ML Engineer") },
    { img: female, name: t("Somia Saad"), desc: t("Back-end Developer ") },
    { img: female, name: t("Shahd Ahmed"), desc: t("UI/UX Designer") },
    { img: female, name: t("Shahd Ahmed"), desc: t("Document Writer") },

  ]
  return (
    <>
      <p className="text-center tex2" style={{ color: "var(--text)" }}>{t("Our Creative Team")}</p>
      <div className="text-center">
        <img className="rounded-circle img-aboutUs " src={icon} alt="Card" />
        <p className="text-center tex2" style={{ color: "#D05F8E" }}>SER</p>
      </div>
      <div className="container about-container">
        <div className="row justify-content-center">
          {
            array.map(({ img, name, desc }, i) => {
              return <div key={i} className="col-sm-4 col-md-3 my-3 aboutUS">
                <div className="">
                  <img className="card-img-top rounded-circle " src={img} alt="Card" />
                  <div className="card-body text-center">
                    <h4 className="card-title my-2" style={{ color: "var(--text)" }}>{name}</h4>
                    <p className="card-text" style={{ color: "var(--subTitle2)" }}>{desc}</p>
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
