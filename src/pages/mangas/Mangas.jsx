import axios from "axios";
import { useEffect, useState } from "react";
import mangasCover from "./img/mangas.jpg";

export default function Mangas() {
  const [mangas, setMangas] = useState([]);
  const [categories, setCategories] = useState([])

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

  async function getCategoriesData() {
    try {
      let { data } = await axios(
        "https://minga-back-alpha.vercel.app/" + "categories"
      )
      setCategories(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMangasData();
    getCategoriesData()
  }, []);

  return (
    <>
      <img
        className="absolute max-h-[55vh] w-full object-cover object-center z-0 rounded-b-3xl"
        src={mangasCover}
        alt=""
      />
      <div className="flex flex-col items-center justify-center w-full bg-slate-300">
        <section className="z-10 mt-56 mb-12 flex flex-col items-center w-full relative">
          <h1 className="text-4xl z-50 text-white font-bold text-center">
            Mangas
          </h1>
          <input
            type="text"
            placeholder="Search"
            className="w-[80%] p-2 my-3 bg-gray-100 rounded focus:outline-none"
          />
        </section>
        <div className="flex justify-center flex-wrap bg-white rounded-t-3xl w-[90%] min-h-[82vh]  z-20">
          <div className="flex justify-center items-center w-full h-16 gap-4 cursor-pointer">
            <button className=" px-6 py-1 bg-gray-300 rounded-xl text-white font-bold">
              all
            </button>
            {categories.map((category, i) => (
              <button
                key={i}
                className=" px-6 py-1 rounded-xl text-white font-bold"
                style={{ backgroundColor: category.color }}
              >
                {category.name}
              </button>
            ))}

          </div>
          {mangas.map((manga, i) => (
            <div
              key={i}
              className="bg-white cursor-pointer relative min-w-[290px] h-[160px] lg:w-[420px] lg:h-[210px] m-3 flex justify-between items-center rounded-lg drop-shadow-md"
            >
              <span
                className="h-5/6 w-2 "
                style={{ backgroundColor: manga.category_id.color }}
              ></span>
              <h2 className="text-2xl font-bold absolute top-8 left-6">
                {manga.title}
              </h2>
              <p
                className="text-xl font-semibold absolute top-16 left-6"
                style={{ color: manga.category_id.color }}
              >
                {manga.category_id.name}
              </p>
              <button className="absolute px-6 py-1 bottom-6 left-8 bg-emerald-200 rounded-xl text-emerald-600 font-bold">
                Read
              </button>
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
