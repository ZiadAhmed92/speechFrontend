import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
// import '@fortawesome/fontawesome-free/css/all.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WelcomeThird from './Components/Welcome/WelcomeThird'
import WelcomeFirst from './Components/Welcome/WelcomeFirst.jsx'
import WelcomeSecond from './Components/Welcome/WelcomeSecond.jsx'
function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomeFirst/>
    },
    {
      path: "/welcome2",
      element: <WelcomeSecond />,
    },
    {
      path: "/welcome3",
      element: <WelcomeThird />,
    },
  ]);
  return (
    <>
  
      <RouterProvider router={router} />
    </>
  )
}

export default App
