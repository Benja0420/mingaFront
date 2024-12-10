import Display from "./components/Display";

export default function Navbar() {
  return (
    <nav className="absolute w-full flex justify-between items-center px-8">
      <div>
        <Display/>
      </div>
      <div className="flex h-10">
        <h1 className="text-orange-500 text-3xl">Minga</h1>
        <img src="/src/img/logoSimple.png" alt="logo minga" />
      </div>
    </nav>
  );
}

/*       <div className='flex gap-2 mr-2'>
        <Link className='text-white' to="/">Home</Link>
        <Link className='text-white' to="/register">Register</Link>
        <Link className='text-white' to="/login">Login</Link>
        <Link className='text-white' to="/profile/username">Profile</Link>
        <Link className='text-white' to="/mangas">Mangas</Link>
      </div> */
