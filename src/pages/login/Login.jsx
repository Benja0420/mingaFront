import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginBg from "./img/login.jpg";
import logo from "/src/img/logoSimple.png";

export default function Login() {
  const url = import.meta.env.VITE_API_URL;
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function loginUser(e) {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const { data } = await axios.post(
        url + "/auth/login",
        user
      );
      console.log("hola desde " + url);
      console.log("Login exitoso:", data);
      console.log("token", data.token);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Error de inicio de sesión");
      } else if (error.request) {
        setError("No se pudo conectar al servidor");
      } else {
        setError("Error desconocido");
      }
      console.error("Error de inicio de sesión:", error);
    }
  }

  return (
    <>
      <div className="bg-slate-800 w-full h-[100vh]">
        <img className="w-full h-full object-cover" src={loginBg} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="flex flex-col gap-4 mt-16">
          <div className="flex justify-center items-center gap-2">
            <p className="font-bold text-3xl text-orange-500">Minga</p>
            <img className="w-8 h-8" src={logo} alt="" />
          </div>
          <div className="flex justify-center items-center gap-2">
            <p className="font-bold text-3xl text-black">Welcome</p>
            <p className="font-bold text-3xl text-orange-500">back!</p>
          </div>
          <div className="flex justify-center items-center gap-2">
          <p className="w-1/2 text-center text-gray-700">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
          </div>
          <div className="flex flex-col gap-2">
            <input ref={emailRef} type="email" name="email" id="email" className="bg-white shadow-sm p-2 border rounded-md w-full h-10 placeholder-slate-400" placeholder="you@example.com" />
            <input ref={passwordRef} type="password" name="password" id="password" className="bg-white shadow-sm p-2 border rounded-md w-full h-10 placeholder-slate-400" placeholder="Hola123456" />
          </div>
          {error && <p className="text-center text-red-500">{error}</p>}
          <button onClick={loginUser} className="bg-gradient-to-t from-orange-500 to-orange-600 rounded-md w-full h-10 text-white">Sign In</button>
          <p>you don't have an account yet? <Link to="/register" className="text-orange-600 hover:underline">Sign up</Link></p>
          <p>Go back to <Link to="/" className="text-orange-600 hover:underline">home page</Link></p>
        </div>
      </div>
    </>
  );
}
