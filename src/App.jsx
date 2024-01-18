import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
// import '@fortawesome/fontawesome-free/css/all.min.css'
import Welcome1 from './Components/Welcome/welcome1'
import Welcome2 from './Components/Welcome/welcome2'
import Welcome3 from './Components/Welcome/welcome3'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome1/>
    },
    {
      path: "/welcome2",
      element: <Welcome2 />,
    },
    {
      path: "/welcome3",
      element: <Welcome3 />,
    },
  ]);
  return (
    <>
  
      <RouterProvider router={router} />
    </>
  )
}

export default App
