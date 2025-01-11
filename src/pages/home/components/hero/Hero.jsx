import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center lg:items-start gap-1 px-6 lg:px-16 lg:py-6">
        <h1 className="mb-1 font-bold text-4xl text-center text-white sm:text-left lg:text-6xl">
          For the love of manga
        </h1>
        <p className="text-2xl text-white sm:text-left">
          Explore our varieties
        </p>
        <p className="lg:block hidden text-white sm:text-left">
          #Mingalove ❤️
        </p>
      <Link  
      className="bg-white mt-4 px-4 py-2 text-black"
      to="/mangas"
      >explorer</Link>
      </div>
    </>
  );
}
