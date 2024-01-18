import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
// import '@fortawesome/fontawesome-free/css/all.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WelcomeThird from './Components/Welcome/WelcomeThird'
import WelcomeFirst from './Components/Welcome/WelcomeFirst'
import WelcomeSecond from './Components/Welcome/WelcomeSecond'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomeFirst/>
    },
    {
      path: "/welcomesecond",
      element: <WelcomeSecond />,
    },
    {
      path: "/welcomethird",
      element: <WelcomeThird />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <>
  
      <RouterProvider router={router} />
    </>
  )
}

export default App
