import { Link } from "react-router-dom"
import signIn from "../../image/signIn.png"
import face from "../../image/fb.png"
import google from "../../image/go.png"
import ensta from "../../image/ensta.png"
import "./Auth.css"
const Login = () => {
    return (
        <div className="container vh-100">
            <div className="row row-login">
                <div className="col-md-6 p-3">
                  <div>
                        <h3 className="sub-title login">Login Account</h3>
                        <form>
                           <div className="input d-flex gap-4">
                                <input type="email" placeholder="Email " className="email" />
                                <input type="password" placeholder="Password " className="password" />
                                
                           </div>
                            <Link to="/forgetpassword">    <h6 className="sub-title ms-4 py-3 fs-4 ForgetPassword ">Forget Password ?</h6></Link>
                            <div className="text-center">
                                <Link to="/firstpage"> <button className="btn-login">Log In</button></Link>
                                <h6 className="text-login my-3">Don’t have an account? </h6>
                                <Link to="/register"> <h6 className="sub-title fs-6">Sign Up </h6></Link>
                            </div>
                        </form>
                        <div className="or d-flex align-items-center gap-2 ms-5 py-3 ">
                            <p className="line"></p>
                            <p className="sub-title fs-6 ">Or Login With</p>
                            <p className="line"></p>
                        </div>
                        <div className="d-flex justify-content-center gap-5">
                            <img src={face} className="logo-login"/>
                            <img src={google} className="logo-login" />
                            <img src={ensta} className="logo-login" />
                        </div>
                  </div>
                </div>
                <div className="col-md-6 img-parent">
                    <img src={signIn} className="img-login w-100" />
                </div>
            </div>
        </div>
    )
}

export default Login