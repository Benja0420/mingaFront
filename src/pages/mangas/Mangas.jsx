import axios from "axios"
import { useEffect, useState } from "react"
import NewManga from "./components/NewManga"

export default function Mangas() {

  const [mangas, setMangas] = useState([])

  async function getMangasData() {
    try {
      let { data } = await axios(
        "https://minga-back-alpha.vercel.app/" + "mangas"
      );
      setMangas(data)
    } catch (error) {
      console.log(error)
    }
  }

/*   async function getCategoriesData() {
    try {
      let { data } = await axios("http://localhost:3000/categories")
      setCategories(data)
    } catch (error) {
      console.log(error)
    }
  } */

  useEffect(() => {
    getMangasData()
/*     getCategoriesData() */
  }, [])



  return (
    <>
      <section>
        <h1>All mangas</h1>
        <div className="flex justify-center flex-wrap">
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
                <h2 className="text-md lg:text-xl font-bold">
                  {manga.title}
                </h2>
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
      </section>
    </>
  );
}