import "./App.css"
import Login from "./Pages/Login/Login"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes/Routes"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
