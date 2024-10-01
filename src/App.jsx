import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx"
import Home from "./pages/home/Home.jsx"
import Register from "./pages/register/Register.jsx"
import Login from "./pages/login/Login.jsx"
import Profile from "./pages/profile/Profile.jsx"
import Mangas from "./pages/mangas/Mangas.jsx"
import Manga from "./pages/manga/Manga.jsx"

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
          <Route
          path="/login"
          element={<Login />}
          />
          <Route
          path="/profile/:username"
          element={<Profile/>}
          />
          <Route
          path="/mangas"
          element={<Mangas/>}
          />
          <Route
          path="/manga/:id"
          element={<Manga/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
