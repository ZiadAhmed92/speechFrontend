import { Link } from "react-router-dom"
import logo2 from "../../image/logo2.png"
import"./welcome.css"
const Welcome2 = () => {
  return (
      <div className="welcome1">
          <div className="text-center">
              <img src={logo2} className="logo1" />
          </div>
          <div className="paragraph-welcome1 w-75 m-auto">
              <h6>The voice often reflects underlying emotion through tone and pitch.</h6>
              <h6> <span className="sub-title">Through SER</span>, we can determine the feeling from speech, it shows the emotions that your voice holds.</h6>
              <h6 className="text-wel2"> It shows the result in the form of emojis that describe your feelings.</h6>
          </div>
          <div className="w-75 text-center">
              <Link to="/welcome3">   <button className="btn-welcome1">Next</button></Link>
          </div>
      </div>
  )
}

export default Welcome2