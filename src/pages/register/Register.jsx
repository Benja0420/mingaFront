

export default function Register() {
  return (
    <form className="flex flex-col">
        <input type="text" placeholder="username"/>
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <input type="password" placeholder="password again"/>
        <button>Register</button>
    </form>
  )
}
