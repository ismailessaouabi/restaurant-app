import Register from "./pages/register"
import Profile from "./pages/profile"
import { BrowserRouter, Routes ,Route } from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/home"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
