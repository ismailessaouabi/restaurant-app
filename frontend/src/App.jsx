import Register from "./pages/register"
import Profile from "./pages/profile"
import { BrowserRouter, Routes ,Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
