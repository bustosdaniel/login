import "./App.css"
import Login from "./login"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Login />
    </div>
  )
}

export default App
