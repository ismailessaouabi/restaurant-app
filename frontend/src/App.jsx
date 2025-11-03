import Register from "./pages/register"
import Profile from "./pages/profile"
import { BrowserRouter, Routes ,Route } from "react-router-dom"
import Login from "./pages/login"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
