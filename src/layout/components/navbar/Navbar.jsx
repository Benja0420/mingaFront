import Display from "./components/display/Display";
import logo from "/src/img/logoSimple.png";
export default function Navbar() {
  return (
    <nav className="absolute w-full flex justify-between items-center px-8 z-50 ">
      <div>
        <Display/>
      </div>
      <div className="flex h-10 gap-2">
        <h1 className="text-orange-500 text-3xl">Minga</h1>
        <img src={logo}/>
      </div>
    </nav>
  );
}
