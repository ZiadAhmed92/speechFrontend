import { Link } from "react-router-dom"
import logo1 from "../../image/logo1.png"
import "./Welcome.css"
const WelcomeFirst = () => {
    return (
        <div className="welcome1">
            <div className=" text-center">
                <div className="text-center">
                    <div className="text-center">
                        <img src={logo1} className="logo1" />
                    </div>
                    <div className="paragraph-welcome1 w-100 m-auto">
                        <h2>Welcome to SER,</h2>
                        <h6>SER is the abbreviation of <span className="sub-title">Speech Emotion Recognition</span>, which is the act of attempting to recognize human emotion and affective states from speech.</h6>
                    </div>
                    <div className="text-center">
                        <Link to="/welcomesecond">  <button className="btn-welcome1">Next</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeFirst