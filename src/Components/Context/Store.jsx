import { createContext, useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import { Navigate } from "react-router-dom";
export let speechContext = createContext(0);

export default function SpeechContextProvider(props) {
  // let { userData, dataUser,logOut } = useContext(speechContext);
  const [userData, setUserdata] = useState(null)
  const [photo, setPhoto] = useState("")

  function logOut() {
    localStorage.removeItem('Token');
    localStorage.removeItem("imgCover");
    localStorage.removeItem("phone");
    localStorage.removeItem("Gender");
    localStorage.removeItem("Email");
    localStorage.removeItem("Date");
    localStorage.removeItem("FullName");
    localStorage.removeItem("FirstName");
    setUserdata(null)
    return <Navigate to='/login' />
  }
  function dataUser() {
    let token = localStorage.getItem('Token');
    let userData = jwtDecode(token);
    setUserdata(userData)

  }
  useEffect(() => {
    if (localStorage.getItem('Token')) return dataUser()
  }, [])

  return (
    <speechContext.Provider
      value={{
        logOut,
        dataUser,
        userData,
        setPhoto,
        photo

      }}
    >
      {props.children}
    </speechContext.Provider>
  );
}
