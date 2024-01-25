import "./ForgetPassword.css"
import img1 from "../../image/backPage.png"
import img2 from "../../image/forgetPassword2.png"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { speechContext } from "../Context/Store.jsx"
import axios from "axios"
import { useTranslation } from 'react-i18next';//1

export const ForgetPasswordSecond = () => {
    const { t, i18n } = useTranslation();//2
    let { userData } = useContext(speechContext);
    let Navigate = useNavigate();
    const [error, setError] = useState("")
    const [type, setType] = useState("password")
    const [type1, setType1] = useState("password")
    const [password, setPassword] = useState({
        _id: `${userData?._id}`,
        password: "",
        confirmPassword: "",
    });
    // ^(?=.*?[A-Z])?(?=.*?[a-z])(?=.*?[0-9])?(?=.*?[#?!@$%^&*-])?.{5,18}$
    function getUserData(e) {
        let MyUser = { ...password };
        MyUser[e.target.name] = e.target.value;
        setPassword(MyUser);
        console.log(password)
    }
    async function sendUserData() {
        let { data } = await axios.put(
            `https://speech-emotion.onrender.com/updatepassword`,
            password
        );
        console.log(data)
        if (data.message === "success") {
            localStorage.removeItem("Token");
            Navigate("/login");
        } else {
            setError(data.message)
        }
    }
    function submitPassword(e) {
        e.preventDefault();
        sendUserData();
    }

    return (
        <div>
            <div className="container pt-2">
                <div className="row mt-2">
                    <div className="col-md-6">
                        <Link to="/homepage"><img src={img1} className="img-1-forget" /></Link>

                        <form onSubmit={submitPassword} className="d-flex flex-column gap-2 mt-5 position-relative">
                            <div className="text-danger">{error}</div>
                            <label htmlFor="forgetPassword" className="label-forget">{t("Old Password")}</label>
                            <input type={`${type}`} className="input-forget" name="password" onChange={getUserData} />
                            <div className="new-password">
                                {type == "password" ? <i onClick={() => setType("text")} className="eya fs-4 fa-solid fa-eye"></i>
                                    : <i onClick={() => setType("password")} className="eya fs-4 fa-solid fa-eye-slash"></i>}
                            </div>
                            <label htmlFor="forgetPassword" className="label-forget">{t("New Password")}</label>
                            <input type={`${type1}`} className="input-forget" name="confirmPassword" onChange={getUserData} />
                            <div className="confirm-password">
                                {type1 == "password" ? <i onClick={() => setType1("text")} className="eya fs-4 fa-solid fa-eye"></i>
                                    : <i onClick={() => setType1("password")} className="eya fs-4 fa-solid fa-eye-slash"></i>}
                            </div>
                            <button type="submit" className="btn-forget">{t("Change1")}</button>

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
