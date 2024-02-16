import { createContext, useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import { Navigate } from "react-router-dom";
import Swal from 'sweetalert2'
export let speechContext = createContext(0);
import { useTranslation } from 'react-i18next';//1


export default function SpeechContextProvider(props) {
  const { t, i18n } = useTranslation();//2

  // let { userData, dataUser, logOut } = useContext(speechContext);
  const [userData, setUserdata] = useState(null)
  const [photo, setPhoto] = useState("")

  const handleAlert = (fun) => {
    Swal.fire({
      title:t("Are You Sure ?"),
      icon: "question",
      iconHtml: "!",
      confirmButtonText: t("Yes"),
      cancelButtonText: t("No"),
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        fun()

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("false");
      }
    });
  };




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

        dataUser,
        userData,
        setPhoto,
        photo,
        handleAlert

      }}
    >
      {props.children}
    </speechContext.Provider>
  );
}
