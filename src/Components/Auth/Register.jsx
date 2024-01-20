import { Link } from "react-router-dom"
import logo1 from "../../image/signUp.png"
import logo2 from "../../image/signUp2.png"
import logo3 from "../../image/signUp3.png"
import logo4 from "../../image/signUp4.png"
import { useNavigate } from "react-router-dom";

import "./Auth.css"
import { useState } from "react"
import axios from "axios"
import Joi from "joi"
const Register = () => {
    let Navigate = useNavigate();
    const [type, setType] = useState("password")
    const [error, setError] = useState("")
    const [errorList, setErrorList] = useState([])
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        birthday: "",
        gender: "",
        phone: ""
    });

    function getUserData(e) {
        let MyUser = { ...user };
        MyUser[e.target.name] = e.target.value;
        setUser(MyUser)


    }
    async function sendUserData() {
        let { data } = await axios.post(`https://speech-emotion.onrender.com/signUp`, user);
        console.log(data)
        if (data.message === "success") {
            Navigate("/login")
        } else {
            setLoading(false)
            setError(data.errors.email.message)

        }
    }

    function validateRegisterForm() {
        let schema = Joi.object({
            first_name: Joi.string()

                .min(3)
                .max(30)
                .required(),
            last_name: Joi.string()

                .min(3)
                .max(30)
                .required(),
            gender: Joi.string()

                .min(3)
                .max(8)
                .required(),
            phone: Joi.string().regex(/^(002)?01[0125][0-9]{8}$/).required(),
            birthday: Joi.string().required(),
            email: Joi.string()
                .email({ tlds: { allow: false } }),
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

        })
        return schema.validate(user, { abortEarly: false })
    }


    function submitRegister(e) {
        e.preventDefault();
        setLoading(true);

        let validation = validateRegisterForm();
        console.log(validation.error.details)
        if (validation.error) {
            setErrorList(validation.error.details);
            setLoading(false)
        }
        else {
            sendUserData();
        }
    }
    return (
        <div className="container  register d-flex align-items-center">
            <div className="row">
                <div className="col-md-6 ">
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
                        <form onSubmit={submitRegister}>
                            <div className="d-flex mt-3">
                                <input type="text" placeholder="First Name " className="firstName" name='first_name' onChange={getUserData} />
                                <input type="text" placeholder="Last Name " className="lastName" name='last_name' onChange={getUserData} />
                            </div>
                            <div className="text-danger">
                                {errorList.filter((item) => item.context.key == "first_name")[0]?.message}
                            </div>
                            <div className="text-danger">
                                {errorList.filter((item) => item.context.key == "last_name")[0]?.message}
                            </div>
                            <div className="input d-flex gap-2 p-2">
                                <input type="date" placeholder="Birthday " className="input-signup" name='birthday' onChange={getUserData} />
                                <div className="text-danger">
                                    {errorList.filter((item) => item.context.key == "birthday")[0]?.message}
                                </div>
                                <input type="number" placeholder="Phone Number " className="input-signup" name='phone' onChange={getUserData} />
                                {errorList.map((error, i) => {
                                    if (error.context.label === "phone") {
                                        return (
                                            <p key={i} className="text-danger">
                                                Phone Incorrect
                                            </p>
                                        );
                                    }
                                })}
                                <select id="gender" className="input-signup curser-pointer" name='gender' onChange={getUserData}>
                                    <option value="male" className="male">gender</option>
                                    <option value="male" className="male">Male</option>
                                    <option value="female" className="male">Female</option>
                                </select>
                                <div className="text-danger">
                                    {errorList.filter((item) => item.context.key == "gender")[0]?.message}
                                </div>
                                <input type="email" placeholder="Email " className="input-signup" name='email' onChange={getUserData} />
                                <div className="text-danger">
                                    {errorList.filter((item) => item.context.key == "email")[0]?.message}
                                </div>
                                <div className="position-relative">
                                    <input type={`${type}`} placeholder="Password " className="input-signup" name='password' onChange={getUserData} />
                                    <div className="text-danger">
                                        {errorList.filter((item) => item.context.key == "password")[0]?.message}
                                    </div>
                                    <div className="icon-password position-absolute ">
                                        {type == "password" ? <i onClick={() => setType("text")} className="eya fa-solid fa-eye"></i>
                                            : <i onClick={() => setType("password")} className="eya fa-solid fa-eye-slash"></i>}
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className=" btn-login btn-signUp">{loading ? <i className='fas fa-spinner fa-spin'></i> : 'Sign Up'}</button>
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