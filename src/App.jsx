import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx"
import Home from "./pages/home/Home.jsx"
import Register from "./pages/register/Register.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
