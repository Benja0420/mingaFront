import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col px-6 lg:px-16 lg:py-6 gap-1 items-center justify-center lg:items-start ">
        <h1 className="sm:text-left text-white text-4xl lg:text-6xl font-bold mb-1 text-center">
          For the love of manga
        </h1>
        <p className="sm:text-left text-white text-2xl">
          Explore our varieties
        </p>
        <p className="sm:text-left hidden lg:block text-white ">
          #Mingalove❤️
        </p>
      <Link  
      className="bg-white text-black px-4 py-2 mt-4"
      to="/mangas"
      >explorer</Link>
      </div>
    </>
  );
}
