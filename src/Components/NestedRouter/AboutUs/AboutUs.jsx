import React from "react";
import "./AboutUs.css";
import female from'./download.png'
import male from'./download (1).png'

export default function AboutUs() {
  let array = [
    { img: male, name: "Mohamed Saeed", desc:"Front-end Developer (React.JS)" },
    { img: male, name: "Ziad Ahmed", desc:"Full-stack Developer (MERN)" },
    { img: female, name: "Nourhan Gamal", desc:"ML Engineer" },
    { img: female, name: "Nourhan Hassan", desc:"ML Engineer" },
    { img: male, name: "Mohamed Ahmed", desc:"Back-end Developer (Node-js)" },
    { img: male, name: "Somia Saad", desc:"Back-end Developer (Node-js)" },
    { img: female, name: "Shahd Ahmed", desc:"UI/UX Designer" },
    { img: male, name: "Shahd Ahmed", desc:"Documentation Writer" },
    { img: male, name: "Mohamed Tawfeeq", desc:"Flutter Developer" },
    
  ]
  return (
    <>
      <p className="text-center tex2" style={{color:"var(--text)"}}>Our Creative Team</p>
      <div className="container">
        <div className="row justify-content-center">
        {
          array.map(({img , name , desc},i)=>{
            return <div key={i} className="col-sm-4 col-md-3 my-3 aboutUS">
              <div className="">
                <img className="card-img-top " src={img} alt="Card" />
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
