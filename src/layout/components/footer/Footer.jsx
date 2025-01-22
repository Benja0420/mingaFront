import footer from "./img/footer.svg"
import facebook from "./img/facebook-black.svg"
import twitter from "./img/Twitter.svg"
import vimeo from "./img/Vimeo.svg"
import youtube from "./img/youtube-black.svg"
import logo from "/src/img/logoSimple.png";

import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-white w-full">
      <img src={footer} alt="Footer" className="w-full h-full object-cover" />
      <div className="flex justify-between items-center py-4 px-24">
        <menu>
          <ul className="flex gap-4">
            <li>
              <Link className="text-2xl" to="/">
                    Home
              </Link>
            </li>
            <li>
              <Link className="text-2xl" to="/mangas">
                Mangas
              </Link>
            </li>
          </ul>
        </menu>
        <logo className="flex items-center w-12 gap-3">
          <h1 className="text-4xl text-orange-500">Minga</h1>
          <img src={logo} alt="Logo" />
        </logo>
        <div className="flex flex-col gap-2 items-center">
          <media className="flex gap-4">
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.vimeo.com/">
              <img src={vimeo} alt="Vimeo" />
            </a>
            <a href="https://www.twitter.com/">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://www.youtube.com/">
              <img src={youtube} alt="YouTube" />
            </a>
          </media>
          <button className="bg-orange-500 h-12 w-44 text-white text-center pl-6 text-xl p-2 rounded-lg">
              Donate ❤️
          </button>
        </div>
      </div>
    </footer>
  );
}
