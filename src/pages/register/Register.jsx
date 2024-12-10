import axios from "axios";
import { useRef } from "react";

export default function Register() {
  let username = useRef()
  let email = useRef()
  let password = useRef()

  async function registerUser(e) {
    e.preventDefault()
    let newUser = {
      user: username.current.value,
      email: email.current.value,
      password: password.current.value
    }
    try {
      let { data } = await axios.post("https://minga-back-alpha.vercel.app/"+"auth", newUser)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
    <div className="flex justify-center items-center w-1/2">
      <form className="w-[290px]">
        <div className="flex flex-col">
          <label>Username</label>
          <input type="text" ref={username} placeholder="El Pepe" />
          <label>Email</label>
          <input type="email" ref={email} placeholder="example@mail.com" />
          <label>Password</label>
          <input type="password" ref={password} placeholder="Enter your password" />
          <button onClick={registerUser} >Register</button>
          
        </div>
      </form>
    </div>
    <div className="w-1/2 h-[100vh] bg-slate-800">
      <h1>futura imagen</h1>
    </div>
    </>
  );
}
