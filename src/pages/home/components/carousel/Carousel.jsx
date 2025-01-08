import { useEffect, useState } from "react";
import axios from "axios";

export default function Carousel() {
  const [categories, setCategories] = useState([]);
  const url = import.meta.env.VITE_API_URL;
  
  async function getCategoriesData() {
    try {
      let { data } = await axios(
        url + "/categories"
      );
      console.log("hola desde " + url);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategoriesData();
  }, []);

  let [counter, setCounter] = useState(0);
  let next = () =>
    counter < categories.length - 1 ? setCounter(counter + 1) : setCounter(0);
  let back = () =>
    counter <= categories.length - 1 && counter > 0
      ? setCounter(counter - 1)
      : setCounter(categories.length - 1);

  return (
    <div className="xl-block lg:flex justify-center hidden mt-10">
      <div className="flex justify-between items-center gap-1 bg-gradient-to-t from-orange-500 to-orange-600 p-4 w-10/12 h-72">
        <button className="text-2xl" onClick={back}>
          ⬅️
        </button>
        <div className="relative flex justify-end w-full">
          <img
            src={categories[counter]?.character_photo}
            alt=""
            className="-top-28 left-0 absolute h-72"
          />
          <img
            src={categories[counter]?.cover_photo}
            alt=""
            className="-top-32 left-96 absolute h-72"
          />
          <div className="mr-24 w-3/12">
            <h2 className="font-bold text-2xl text-white">
              {categories[counter]?.name}
            </h2>
            <p className="z-10 text-sm text-white">
              {categories[counter]?.description}
            </p>
          </div>
        </div>
        <button className="text-2xl" onClick={next}>
          ➡️
        </button>
      </div>
    </div>
  );
}
