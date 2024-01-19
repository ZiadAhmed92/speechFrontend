import { Link } from "react-router-dom"
import logo1 from "../../image/signUp.png"
import logo2 from "../../image/signUp2.png"
import logo3 from "../../image/signUp3.png"
import logo4 from "../../image/signUp4.png"

import "./Auth.css"
import { useState } from "react"
const Register = () => {
    const [type, setType] = useState("password")
    return (
        <div className="container register d-flex align-items-center">

            <div className="row">
                <div className="col-md-6">
                    <div>
                        <h4 className="text-signUp">Hi!<br /> Create an account.</h4>
                        <div className="d-flex align-items-center gap-5">
                            <img src={logo2} className="logo2" />
                            <div>
                                <h6>Add Photo</h6>
                                <div className="d-flex gap-3">
                                    <img src={logo3} className="logo3" />
                                    <img src={logo4} className="logo3" />
                                </div>
                            </div>
                        </div>
                        <form>
                            <div className="d-flex mt-3">
                                <input type="text" placeholder="First Name " className="firstName" />
                                <input type="text" placeholder="Last Name " className="lastName" />

                            </div>
                            <div className="input d-flex gap-2 p-2">
                                <input type="text" placeholder="Birthday " className="input-signup" />
                                <input type="number" placeholder="Phone Number " className="input-signup" />
                                <select id="gender" className="input-signup curser-pointer" >
                                    <option value="male" className="male">Male</option>
                                    <option value="female" className="male">Female</option>
                                </select>
                                <input type="email" placeholder="Email " className="input-signup" />
                                <div className="position-relative">
                                    <input type={`${type}`} placeholder="Password " className="input-signup" />
                                    <div className="icon-password position-absolute ">
                                        {type == "password" ? <i onClick={() => setType("text")} className="eya fa-solid fa-eye"></i>
                                            : <i onClick={() => setType("password")} className="eya fa-solid fa-eye-slash"></i>}
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <Link to="/login"><button className=" btn-login btn-signUp">Sign Up</button></Link>
                                <Link to="/login"><h6 className="text-signup">Already have an account? <br /><span className="sub-title fs-5">Login</span></h6></Link>
                            </div>
                        </form>



                    </div>
                </div>
                <div className="col-md-6 logo-signup">
                    <img src={logo1} className="w-100" />
                </div>
            </div>

        </div>
    )
}

export default Register