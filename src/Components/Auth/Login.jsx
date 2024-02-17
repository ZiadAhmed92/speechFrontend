import { Link, useNavigate } from "react-router-dom";
import img from "../../image/signIn.png"
import "./Auth.css";
import axios from "axios";
import joi from "joi";
import { useState } from "react";
const Login = () => {
    let Navigate = useNavigate();
    const [type, setType] = useState("password");
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
        try {
            // https://speech-emotion.onrender.com
            let { data } = await axios.post(
                `https://speech-sapm.onrender.com/users/signin`,
                user
            );
            console.log(data);
            if (data.message === "success") {
                localStorage.setItem("Token", data.token);
                localStorage.setItem("imgCover", data.user.imgCover);
                localStorage.setItem("phone", data.user.phone);
                localStorage.setItem("Gender", data.user.gender);
                localStorage.setItem("Email", data.user.email);
                localStorage.setItem("Date", data.user.birthday);
                localStorage.setItem("FullName", data.user.fullname);
                localStorage.setItem("FirstName", data.user.firstname);
                localStorage.setItem("LastName", data.user.lastname);
                Navigate("/homepage");
            } else {
                setLoading(false);
                setError(data.message);
            }
        } catch (err) {
            setError(err.response.data.message);
            setLoading(false);
        }
    }

    function validateLoginForm() {
        let schema = joi.object({
            email: joi.string().email({ tlds: { allow: ["com", "net", "pro"] } }),
            password: joi
                .string()
                .pattern(
                    new RegExp(
                        "^(?=.*?[A-Z])?(?=.*?[a-z])?(?=.*?[0-9])?(?=.*?[#?!@$%^&*-])?.{5,18}$"
                    )
                ),
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
                        <h3 className="sub-title login " style={{ color: "var(--text)" }}>Welcome Back</h3>
                        <p className="text-center fontfamily" style={{ color: "var(--text)" }}>Login To Your Account</p>
                        <form onSubmit={submitLogin}>
                            <div className="text-danger text-center">
                                {
                                    errorList.filter((item) => item.context.key == "email")[0]
                                        ?.message
                                }
                            </div>
                            <div className="input d-flex gap-4 position-relative">
                                <input
                                    type="email"
                                    placeholder="Email "
                                    className="email fontfamily"
                                    name="email"
                                    onChange={getUserData}
                                />

                                <input
                                    type={`${type}`}
                                    placeholder="Password "
                                    className="password fontfamily"
                                    name="password"
                                    onChange={getUserData}
                                />
                                {errorList.map((error, i) => {
                                    if (error.context.label === "password") {
                                        return (
                                            <p key={i} className="text-center text-danger">
                                                The password is weak and must not be less than five
                                                numbers{" "}
                                            </p>
                                        );
                                    }
                                })}
                                <p className="text-center text-danger">{error}</p>

                                <div className="password-login">
                                    {type == "password" ? (
                                        <i
                                            onClick={() => setType("text")}
                                            className="eya fs-3 fa-solid fa-eye"
                                        ></i>
                                    ) : (
                                        <i
                                            onClick={() => setType("password")}
                                            className="eya fs-3 fa-solid fa-eye-slash"
                                        ></i>
                                    )}
                                </div>
                            </div>

                            <div className="text-center">
                                <button className="btn-login">
                                    {loading ? (
                                        <i className="fas fa-spinner fa-spin"></i>
                                    ) : (
                                        "Sign In"
                                    )}
                                </button>
                                <Link to="/forgetpassword">
                                    {" "}
                                    <h6 className="sub-title ms-4 py-3 fs-4 ForgetPassword text-center"
                                        style={{ color: "#dc0b62" }}>
                                        Forgot Password ?
                                    </h6>
                                </Link>
                                <h6 className="text-login my-3">Don’t have an account? </h6>
                                <Link to="/register">
                                    {" "}
                                    <h6 className="sub-title fs-6" style={{ color: "#dc0b62" }}>Sign Up </h6>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 img-parent">
                    <img src={img} className="img-login w-100" />
                </div>
            </div>
        </div>
    );
};

export default Login;
