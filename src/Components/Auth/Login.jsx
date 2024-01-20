import { Link, useNavigate } from "react-router-dom"
import signIn from "../../image/signIn.png"
import face from "../../image/fb.png"
import google from "../../image/go.png"
import ensta from "../../image/ensta.png"
import "./Auth.css"
import axios from "axios";
import joi from "joi";
import { useState } from "react"
const Login = () => {
    let Navigate = useNavigate();
    const [type, setType] = useState("password")
    const [error, setError] = useState("");
    const [errorList, setErrorList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    function getUserData(e) {
        let MyUser = { ...user };
        MyUser[e.target.name] = e.target.value;
        setUser(MyUser);
    }
    async function sendUserData() {
        let { data } = await axios.post(
            `https://speech-emotion.onrender.com/signin`,
            user
        );
        console.log(data)
        if (data.message === "login") {
            localStorage.setItem("Token", data.token);

            Navigate("/firstpage");
        } else {
            setLoading(false);
            setError(data.message);
        }
    }

    function validateLoginForm() {
        let schema = joi.object({
            email: joi.string().email({ tlds: { allow: ["com", "net", "pro"] } }),
            password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,30}$")),
        });
        return schema.validate(user, { abortEarly: false });
    }
    function submitLogin(e) {
        setLoading(true);
        e.preventDefault();
        let validation = validateLoginForm();

        if (validation.error) {
            setErrorList(validation.error.details);
            setLoading(false);
        } else {
            sendUserData();
        }
    }
    return (
        <div className="container ">
            <div className="row  align-items-center row-login">
                <div className="col-md-6 p-3">
                    <div>
                        <h3 className="sub-title login">Login Account</h3>
                        <form onSubmit={submitLogin} >
                            <div className="text-danger text-center">
                                {errorList.filter((item) => item.context.key == "email")[0]?.message}
                            </div>
                            <div className="input d-flex gap-4 position-relative">
                                <input type="email" placeholder="Email " className="email" name="email"
                                    onChange={getUserData} />
                                
                                <input type={`${type}`} placeholder="Password " className="password" name="password"
                                    onChange={getUserData} />
                                {errorList.map((error, i) => {
                                    if (error.context.label === "password") {
                                        return (
                                            <p key={i} className="text-center text-danger">
                                                The password is weak and must not be less than five numbers{" "}
                                            </p>
                                        );
                                    } 
                                })}
                                <p className="text-center text-danger">
                                    {error}
                                </p>
                                
                                <div className="password-login">
                                    {type == "password" ? <i onClick={() => setType("text")} className="eya fs-3 fa-solid fa-eye"></i>
                                        : <i onClick={() => setType("password")} className="eya fs-3 fa-solid fa-eye-slash"></i>}
                                </div>
                            </div>
                            <Link to="/forgetpassword">    <h6 className="sub-title ms-4 py-3 fs-4 ForgetPassword ">Forget Password ?</h6></Link>
                            <div className="text-center">
                                <button className="btn-login">{loading ? <i className="fas fa-spinner fa-spin"></i> : "Sign In"}</button>
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
                            <img src={face} className="logo-login" />
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