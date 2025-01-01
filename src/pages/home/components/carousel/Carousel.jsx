import { useEffect, useState } from "react";
import axios from "axios";

export default function Carousel() {
  const [categories, setCategories] = useState([]);

  async function getCategoriesData() {
    try {
      let { data } = await axios(
        "https://minga-back-alpha.vercel.app/" + "categories"
      );
      setCategories(data);
      console.log(data);
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
    <div className="hidden xl-block mt-10 lg:flex justify-center">
      <div className="flex justify-between gap-1 h-72 w-10/12 items-center p-4 to-orange-600 from-orange-500 bg-gradient-to-t">
        <button className="text-2xl" onClick={back}>
          ⬅️
        </button>
        <div className="relative flex justify-end w-full">
          <img
            src={categories[counter]?.character_photo}
            alt=""
            className="h-72 absolute -top-28 left-0"
          />
          <img
            src={categories[counter]?.cover_photo}
            alt=""
            className="h-72 absolute -top-32 left-96"
          />
          <div className=" w-3/12 mr-24">
            <h2 className="text-2xl font-bold text-white">
              {categories[counter]?.name}
            </h2>
            <p className="text-sm z-10 text-white">
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
