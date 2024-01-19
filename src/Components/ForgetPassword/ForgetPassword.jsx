import "./ForgetPassword.css"
import img1 from "../../image/backPage.png"
import img2 from "../../image/forgetPassword.png"
import { Link } from "react-router-dom"
export const ForgetPassword = () => {
  return (
    <div>
        <div className="container pt-2">
            <div className="row mt-2">
                <div className="col-md-6">
                    <Link to="/login"><img src={img1} className="img-1-forget" /></Link>  
                      <div className="text-forget-pass text-capitalize mt-4">
                          <span className="sub-title"> Forget Password</span><br/> enter your email or phone number
                      </div>
                      <form className="d-flex flex-column gap-2 mt-5">
                          <label htmlFor="forgetPassword" className="label-forget">Email / Phone Number</label>
                          <input type="text" className="input-forget" />
                          <Link to="/forgetpasswordsecond"><button className="btn-forget"> Submit</button></Link>
                         
                      </form>
                      
                </div>
                <div className="col-md-6">
                      <img src={img2} className="img-2-forget w-100"/>
                </div>
            </div>
        </div>
    </div>
  )
}
