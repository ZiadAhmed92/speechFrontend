import "./ForgetPassword.css"
import img1 from "../../image/backPage.png"
import img2 from "../../image/forgetPassword2.png"
import { Link } from "react-router-dom"
import { useState } from "react"
export const ForgetPasswordSecond = () => {
    const [type, setType] = useState("password")
    const [type1, setType1] = useState("password")
    return (
        <div>
            <div className="container pt-2">
                <div className="row mt-2">
                    <div className="col-md-6">
                        <Link to="/homepage"><img src={img1} className="img-1-forget" /></Link>
                        
                        <form className="d-flex flex-column gap-2 mt-5 position-relative">
                            <label htmlFor="forgetPassword" className="label-forget">Create New Password</label>
                            <input type={`${type}`} className="input-forget" />
                            <div className="new-password">
                                {type == "password" ? <i onClick={() => setType("text")} className="eya fs-4 fa-solid fa-eye"></i>
                                    : <i onClick={() => setType("password")} className="eya fs-4 fa-solid fa-eye-slash"></i>}
                            </div>
                            <label htmlFor="forgetPassword" className="label-forget">Confirm New Password</label>
                            <input type={`${type1}`} className="input-forget" />
                            <div className="confirm-password">
                                {type1 == "password" ? <i onClick={() => setType1("text")} className="eya fs-4 fa-solid fa-eye"></i>
                                    : <i onClick={() => setType1("password")} className="eya fs-4 fa-solid fa-eye-slash"></i>}
                            </div>
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
