import { Link } from "react-router-dom";
import logo1 from "../../image/signIn2.png";
import logo2 from "../../image/signUp2.png";
// import logo3 from "../../image/signUp3.png";
// import logo4 from "../../image/signUp4.png";
import { useNavigate } from "react-router-dom";
import img1 from "../../image/user.png"
import "./Auth.css";
import { useState } from "react";
import axios from "axios";
import Joi from "joi";
const Register = () => {
    let Navigate = useNavigate();
    const [type, setType] = useState("password");
    const [error, setError] = useState("");
    const [errorList, setErrorList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [imgTest, setImgTest] = useState(null);



    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgTest(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        birthday: "",
        gender: "",
        phone: "",
    });

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("firstname", user.firstname);
    formData.append("lastname", user.lastname);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("birthday", user.birthday);
    formData.append("phone", user.phone);
    formData.append("gender", user.gender);

    function getUserData(e) {
        let MyUser = { ...user };
        MyUser[e.target.name] = e.target.value;
        setUser(MyUser);
    }

    async function sendUserData() {
        console.log(formData);
        let { data } = await axios.post(
            `https://speech-sapm.onrender.com/users/signup`,
            formData
        );
        console.log(data);
        if (data.message === "success") {
            Navigate("/resetSendEmail");
        } else {
            setLoading(false);
            setError(data.errors.email.message);
        }
    }
    function validateRegisterForm() {
        let schema = Joi.object({
            firstname: Joi.string().min(3).max(30).required(),
            lastname: Joi.string().min(3).max(30).required(),
            gender: Joi.string().min(3).max(8).required(),
            phone: Joi.string()
                .regex(/^(002)?01[0125][0-9]{8}$/)
                .required(),
            birthday: Joi.string().required(),
            email: Joi.string().email({ tlds: { allow: false } }),
            password: Joi.string().pattern(
                new RegExp(
                    "^(?=.*?[A-Z])?(?=.*?[a-z])?(?=.*?[0-9])?(?=.*?[#?!@$%^&*-])?.{5,18}$"
                )
            ),
        });
        return schema.validate(user, { abortEarly: false });
    }

    function submitRegister(e) {
        console.log("first");
        e.preventDefault();
        setLoading(true);

        let validation = validateRegisterForm();
        if (validation.error) {
            setErrorList(validation.error.details);
            setLoading(false);
            console.log("valida");
        } else {
            sendUserData();
            console.log("tmm");
        }
    }
    return (
        <div className="container register ">
            <div className="row row-login py-3">
                <div className="col-md-6 ">
                    <div>

                        <div className="d-flex align-items-center justify-content-between gap-5">
                            <label htmlFor="fileInput" style={{ cursor: "pointer", textAlign: "center" }} >
                                <div className="user-photo">
                                    <i className="fa-solid fa-pen"></i>
                                    {imgTest ? (
                                        <img src={imgTest} className='logo-account1 rounded-circle' />
                                    ) : (
                                        <img src={img1} className='logo-account1 rounded-circle' />
                                    )}                                </div>
                                <input
                                    type="file"
                                    id="fileInput"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                />
                            </label>
                            <h4 className="text-signUp">
                                Hi!
                                <br /> Create an account.
                            </h4>
                        </div>
                        <form onSubmit={submitRegister}>

                            <div className="d-flex mt-3">
                                <input
                                    type="text"
                                    placeholder="First Name "
                                    className="firstName"
                                    name="firstname"
                                    onChange={getUserData}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name "
                                    className="lastName"
                                    name="lastname"
                                    onChange={getUserData}
                                />
                            </div>
                            <div className="text-danger">
                                {errorList.map((error, i) => {
                                    if (error.context.label === "firstname") {
                                        return (
                                            <p key={i} className="text-danger text-capitalize ms-2">
                                                firstname is not allowed to be empty
                                            </p>
                                        );
                                    }
                                })}
                            </div>
                            <div className="text-danger">
                                {errorList.map((error, i) => {
                                    if (error.context.label === "lastname") {
                                        return (
                                            <p key={i} className="text-danger text-capitalize ms-2">
                                                lastname is not allowed to be empty
                                            </p>
                                        );
                                    }
                                })}
                            </div>
                            <div className="input d-flex gap-2 p-2">
                                <input
                                    type="date"
                                    placeholder="Birthday "
                                    className="input-signup"
                                    name="birthday"
                                    onChange={getUserData}
                                />
                                <div className="text-danger">
                                    {errorList.map((error, i) => {
                                        if (error.context.label === "birthday") {
                                            return (
                                                <p key={i} className="text-danger text-capitalize">
                                                    birthday is not allowed to be empty
                                                </p>
                                            );
                                        }
                                    })}
                                </div>
                                <input
                                    type="number"
                                    placeholder="Phone Number "
                                    className="input-signup"
                                    name="phone"
                                    onChange={getUserData}
                                />
                                {errorList.map((error, i) => {
                                    if (error.context.label === "phone") {
                                        return (
                                            <p key={i} className="text-danger text-capitalize">
                                                Phone Incorrect
                                            </p>
                                        );
                                    }
                                })}
                                <select
                                    id="gender"
                                    className="input-signup curser-pointer"
                                    name="gender"
                                    onChange={getUserData}
                                >
                                    <option value="male" className="male">
                                        gender
                                    </option>
                                    <option value="male" className="male">
                                        Male
                                    </option>
                                    <option value="female" className="male">
                                        Female
                                    </option>
                                </select>
                                <div className="text-danger">
                                    {errorList.map((error, i) => {
                                        if (error.context.label === "gender") {
                                            return (
                                                <p key={i} className="text-danger text-capitalize">
                                                    gender is not allowed to be empty
                                                </p>
                                            );
                                        }
                                    })}
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email "
                                    className="input-signup"
                                    name="email"
                                    onChange={getUserData}
                                />
                                <div className="text-danger">
                                    {
                                        errorList.filter((item) => item.context.key == "email")[0]
                                            ?.message
                                    }
                                </div>
                                <div className="position-relative">
                                    <input
                                        type={`${type}`}
                                        placeholder="Password "
                                        className="input-signup"
                                        name="password"
                                        onChange={getUserData}
                                    />
                                    <div className="text-danger text-capitalize">
                                        {errorList.map((error, i) => {
                                            if (error.context.label === "password") {
                                                return (
                                                    <p key={i} className="text-danger text-capitalize">
                                                        The password is weak and must not be less than five
                                                        numbers
                                                    </p>
                                                );
                                            }
                                        })}
                                    </div>
                                    <div className="icon-password position-absolute ">
                                        {type == "password" ? (
                                            <i
                                                onClick={() => setType("text")}
                                                className="eya fa-solid fa-eye"
                                            ></i>
                                        ) : (
                                            <i
                                                onClick={() => setType("password")}
                                                className="eya fa-solid fa-eye-slash"
                                            ></i>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-danger">{error}</p>
                            <div className="text-center">
                                <button type="submit" className=" btn-login btn-signUp">
                                    {loading ? (
                                        <i className="fas fa-spinner fa-spin"></i>
                                    ) : (
                                        "Sign Up"
                                    )}
                                </button>
                                <Link to="/login">
                                    <h6 className="text-signup">
                                        Already have an account? <br />
                                        <span
                                            className="sub-title fs-5"
                                            style={{ color: "#dc0b62" }}
                                        >
                                            Login
                                        </span>
                                    </h6>
                                </Link>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="col-md-6 img-parent ">
                    <img src={logo1} className="img-login " />
                </div>
            </div>
        </div>
    );
};

export default Register;
