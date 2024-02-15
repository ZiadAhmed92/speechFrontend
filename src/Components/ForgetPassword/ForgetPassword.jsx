import "./ForgetPassword.css"
import img1 from "../../image/backPage.png"
import img2 from "../../image/forgetPassword.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
export const ForgetPassword = () => {
    let Navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState({
        email: ""
    });
    async function sendUserData() {
        try {
            let { data } = await axios.post(
                `http://localhost:3000/forgot-password`,
                { email }
            );

            if (data === "Password reset email sent") {
                setMessage("We Have Sent Your Email")
                Navigate("/login");
                setLoading(false);
            } else {
                setLoading(false);
                setError(data);
            }
        } catch (err) {

            setError(err.response.data)
            setLoading(false);
        }
    }


    function submitResetPassword(e) {
        setLoading(true);
        e.preventDefault();
        sendUserData();
    }
    return (
        <div>
            <div className="container pt-2">
                <div className="row mt-2">
                    <div className="col-md-6">
                        <Link to="/login"><img src={img1} className="img-1-forget" /></Link>
                        <div className="text-forget-pass text-capitalize mt-4">
                            <span className="sub-title"> Forget Password</span><br /> Enter Your Email
                        </div>
                        <form onSubmit={submitResetPassword} className="d-flex flex-column gap-2 mt-5">

                            <p className="text-start text-capitalize text-danger ">
                                {error}
                            </p>
                            <p className="text-start text-capitalize  text-info">
                                {message}
                            </p>
                            <label htmlFor="forgetPassword" className="label-forget">Email</label>
                            <input type="email" className="input-forget" onChange={(e) => setEmail(e.target.value)} />
                            <button className="btn-forget" type="submit">{loading ? <i className="fas fa-spinner fa-spin"></i> : "Submit"} </button>

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
