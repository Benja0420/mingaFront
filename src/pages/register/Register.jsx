import { Link } from "react-router-dom";
import registerImg from "./img/register1.jpg";
import logo from "/src/img/logoSimple.png";
import { useRef, useState } from "react";
import axios from "axios";



export default function Register() {

    let username = useRef();
    let email = useRef();
    let password = useRef();
  
    const [error, setError] = useState(null);

    async function registerUser(e) {
      e.preventDefault();
      let newUser = {
        user: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        let { data } = await axios.post(
          "https://minga-back-alpha.vercel.app/" + "auth",
          newUser
        );
        console.log(data);
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  return (
    <>
      <div className='w-full lg:w-1/2'>
        <form onSubmit={registerUser} className='flex flex-col justify-center items-center gap-2 p-20 lg:p-40'>
          <div className="flex justify-center items-center gap-2">
            <p className="font-bold text-3xl text-orange-500">Minga</p>
            <img className="w-8 h-8" src={logo} alt="Logo de Minga" />
          </div>
          <div className="flex justify-center items-center">
            <p className="font-bold text-3xl text-black">Welcome</p>
            <p className="font-bold text-3xl text-orange-500">!</p>
          </div>
          <div className="flex justify-center items-center">
            <p className="w-1/2 text-center text-gray-700">Descubre manga, manhua y manhwa, rastrea tu progreso, diviértete, lee manga.</p>
          </div>
          <input type="text" ref={username} className="bg-white shadow-sm p-2 border rounded-md w-full h-10 placeholder-slate-400" placeholder="Nombre de usuario" required />
          <input type="email" ref={email} className="bg-white shadow-sm p-2 border rounded-md w-full h-10 placeholder-slate-400" placeholder="you@example.com" required />
          <input type="password" ref={password} className="bg-white shadow-sm p-2 border rounded-md w-full h-10 placeholder-slate-400" placeholder="●●●●●●●●●●●●●" required />
          <div className='flex items-center gap-2'>
            <input type="checkbox" className='accent-orange-500' />
            <p className="text-gray-700">Enviar notificaciones a mi correo</p>
          </div>
          {error && <p className="text-center text-red-500">{error}</p>}
          <button onClick={registerUser} className="bg-gradient-to-t from-orange-500 to-orange-600 rounded-md w-full h-10 text-white">Sign up</button>
          <p>Already have an account? <Link className="font-medium text-center text-orange-600 text-sm hover:underline" to={``}>Log in</Link></p>
          <p>Go back to <Link className="font-medium text-center text-orange-600 text-sm hover:underline" to={`/`}>home page</Link></p>
        </form>
        </div>
      <div className="bg-slate-800 w-1/2 h-[100vh]">
        <img className="h-full object-cover" src={registerImg} alt="" />
      </div>
    </>
  );
}