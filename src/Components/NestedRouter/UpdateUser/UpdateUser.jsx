import { Link } from "react-router-dom"
import img1 from "../../../image/backPage.png"
import logo2 from "../../../image/signUp2.png"
import logo3 from "../../../image/signUp3.png"
import logo4 from "../../../image/signUp4.png"
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react"
import axios from "axios"
import Joi from "joi"
import { speechContext } from "../../Context/Store.jsx";
const UpdateUser = () => {
  let { userData } = useContext(speechContext);
  console.log(userData?._id)
  let Navigate = useNavigate();
  // const [error, setError] = useState("")
  const [errorList, setErrorList] = useState([])
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    _id: `${userData?._id}`,
    first_name: '',
    last_name: '',
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
    try {
      let { data } = await axios.put(`https://speech-emotion.onrender.com/update`, user);
      if (data.message === "success") {
        Navigate("/login")
        console.log("success")
      } else {
        setLoading(false)
        // setError(data.errors.email.message)
        // console.log(data)
        console.log(data)

      }
    } catch (err) {
      console.log(err)
    }
  }

  function validateRegisterForm() {
    let schema = Joi.object({
      _id: Joi.string()
        .min(3)
        .max(30)
        .required(),
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

    })
    return schema.validate(user, { abortEarly: false })
  }


  function submitRegister(e) {
    e.preventDefault();
    setLoading(true);

    let validation = validateRegisterForm()
    if (validation.error) {
      setErrorList(validation.error.details);
      setLoading(false)
    }
    else {
      console.log("send")
      sendUserData();
    }
  }
  return (
    <div className="container register  ">
      <div className="row text-center justify-content-center align-items-center">
        <div className="col-md-12 text-start">
          <Link to="/homepage/account"><img src={img1} className="img-1-forget ml-5" /></Link>

        </div>
        <div className="col-md-7 ">
          <div>

            <div className="d-flex align-items-center gap-5">
              <img src={logo2} className="logo2" />
              <div>
                <h6 style={{ color: "var(--text)" }}>Add Photo</h6>
                <div className="d-flex gap-3">
                  <img src={logo3} className="logo3" />
                  <img src={logo4} className="logo3" />
                </div>

              </div>
              <h4 className="text-signUp">Hi!<br /> Change your account Info.</h4>
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

              </div>
              <div className="text-center">
                <button type="submit" className=" btn-login btn-signUp">{loading ? <i className='fas fa-spinner fa-spin'></i> : 'Update'}</button>
              </div>
            </form>



          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateUser