import { Link } from "react-router-dom"
import logo3 from "../../image/logo3.png"
import "./Welcome.css"
const WelcomeThird = () => {
  return (
      <div className="welcome1">
        <div className=" text-center">
            <div className="text-center">
                <img src={logo3} className="logo1" />
            </div>
            <div className="paragraph-welcome1 w-100 m-auto">
             
                <h6 className="text-wel2 text-center"> <span className="sub-title">Then ,</span> Emotion statistics are shown in their percentages by analyzing the voice.</h6>
            </div>
            <div className="text-center">
                <Link to="/login"> <button className="btn-welcome1">Get Started</button></Link>
            </div>
        </div>
      </div>
  )
}

export default WelcomeThird