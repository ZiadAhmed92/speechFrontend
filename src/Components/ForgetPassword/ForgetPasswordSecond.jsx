import "./ForgetPassword.css"
import img1 from "../../image/backPage.png"
import img2 from "../../image/forgetPassword2.png"
import { Link } from "react-router-dom"
export const ForgetPasswordSecond = () => {
    return (
        <div>
            <div className="container pt-2">
                <div className="row mt-2">
                    <div className="col-md-6">
                        <Link to="/forgetpassword"><img src={img1} className="img-1-forget" /></Link>
                        
                        <form className="d-flex flex-column gap-2 mt-5">
                            <label htmlFor="forgetPassword" className="label-forget">Create New Password</label>
                            <input type="text" className="input-forget" />
                            <label htmlFor="forgetPassword" className="label-forget">Confirm New Password</label>
                            <input type="text" className="input-forget" />
                            <button className="btn-forget"> Confirm</button>

                        </form>

                    </div>
                    <div className="col-md-6">
                        <img src={img2} className="img-2-forget w-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}
