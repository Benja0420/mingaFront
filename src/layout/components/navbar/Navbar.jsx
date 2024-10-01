import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='bg-black flex justify-between items-center h-[5vh]'>
      <div>
        <h1 className='text-white ml-2'>Minga</h1>
      </div>
      <div className='flex gap-2 mr-2'>
        <Link className='text-white' to="/">Home</Link>
        <Link className='text-white' to="/register">Register</Link>
        <Link className='text-white' to="/login">Login</Link>
        <Link className='text-white' to="/profile/username">Profile</Link>
        <Link className='text-white' to="/mangas">Mangas</Link>
      </div>
    </nav>
  )
}
