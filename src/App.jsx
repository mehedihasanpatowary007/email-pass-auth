import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/Router"
import { ToastContainer } from "react-toastify"


function App() {


  return (
    <>
     <RouterProvider router={router}/>
     <ToastContainer/>
    </>
  )
}

export default App
