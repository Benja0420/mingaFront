import axios from "axios"
import { useRef } from "react"

export default function Login() {
  let email = useRef()
  let password = useRef()

  async function loginUser(e) {
    e.preventDefault()
    let user = {
      email: email.current.value,
      password: password.current.value
    }
    try {
      let { data } = await axios.post(
        "https://minga-back-alpha.vercel.app/"+"auth/login",
        user
      );
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
        <div className="w-1/2 h-[100vh] bg-slate-800">
      <h1>futura imagen</h1>
    </div>
        <div className="flex justify-center items-center w-1/2">
        <form>
          <div className="flex flex-col">
            <label>Email</label>
            <input type="email" ref={email} placeholder="example@email.com" />
            <label>Password</label>
            <input type="password" ref={password} placeholder="Enter your password" />
            <button onClick={loginUser} >Login</button>
          </div>
        </form>
        </div>
  </>)
}
