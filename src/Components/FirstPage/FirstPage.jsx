import { Link } from "react-router-dom"
import img1 from "../../image/welcome.png"
import img2 from "../../image/welcome2.png"
import "./FirstPage.css"
const FirstPage = () => {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 f-page vh-100 position-relative">
                      <img src={img1} className="h-100 w-100 "/>
                      <div className="text-f-page">Welcome to SER,<br/> user name!</div>
                </div>
                  <div className="col-md-6 f-page vh-100 d-flex justify-content-center align-items-center flex-column gap-5">
                      <img src={img2} className="img-f-page " />
                    <Link to="/homepage"> <button className="btn-f-page"> Continue</button></Link>
                  </div>
            </div>
        </div>

    </div>
  )
}

export default FirstPage