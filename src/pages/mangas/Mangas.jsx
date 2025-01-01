import axios from "axios";
import { useEffect, useState } from "react";
import NewManga from "./components/NewManga";
import mangasCover from "./img/mangas.jpg";

export default function Mangas() {
  const [mangas, setMangas] = useState([]);

  async function getMangasData() {
    try {
      let { data } = await axios(
        "https://minga-back-alpha.vercel.app/" + "mangas"
      );
      setMangas(data);
    } catch (error) {
      console.log(error);
    }
  }

  /*   async function getCategoriesData() {
    try {
      let { data } = await axios("https://minga-back-alpha.vercel.app/categories")
      setCategories(data)
    } catch (error) {
      console.log(error)
    }
  } */

  useEffect(() => {
    getMangasData();
    /*     getCategoriesData() */
  }, []);

  return (
    <>
      <img
        className="absolute max-h-[55vh] w-full object-cover object-center z-0 rounded-b-3xl"
        src={mangasCover}
        alt=""
      />
      <div className="flex flex-col items-center justify-center w-full bg-slate-300">
        <section className="z-50 mt-56 mb-12 justify-center items-center flex flex-col w-full">
          <h1 className="text-4xl z-50 text-white font-bold text-center">
            Mangas
          </h1>
          <input
            type="text"
            placeholder="Search"
            className="w-[80%] z-10 p-2 my-3"
          />
        </section>
        <div className="flex justify-center flex-wrap bg-white rounded-t-3xl w-[90%] min-h-[82vh]  z-20">
          <NewManga />
          {mangas.map((manga, i) => (
            <div
              key={i}
              className="bg-white cursor-pointer relative min-w-[290px] h-[160px] lg:w-[420px] lg:h-[210px] m-3 flex justify-between items-center rounded-lg drop-shadow-md"
            >
              <div
                className="h-5/6 w-2 "
                style={{ backgroundColor: manga.category_id.color }}
              ></div>
              <h2 className="text-md lg:text-xl font-bold">{manga.title}</h2>
              <div className="w-1/3">
                <img
                  className="h-[160px] lg:h-[210px] object-cover rounded-l-full"
                  src={manga.cover}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
