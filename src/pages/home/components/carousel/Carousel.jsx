import { useEffect, useState } from "react";
import axios from "axios";

export default function Carousel() {
  const [categories, setCategories] = useState([]);

  async function getCategoriesData() {
    try {
      let { data } = await axios("https://minga-back-alpha.vercel.app/"+"categories");
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
    counter < categories.length - 1 
      ? setCounter(counter + 1) 
      : setCounter(0);
  let back = () =>
    counter <= categories.length - 1 && counter > 0
      ? setCounter(counter - 1)
      : setCounter(categories.length - 1);

  return (
    <div className="mt-10">
      <div
        className="flex justify-between items-center p-4"
        style={{ backgroundColor: categories[counter]?.color }}
      >
        <button className="text-2xl" onClick={back}>
          ⬅️
        </button>
        <div className="relative">
          <h2 className="text-2xl font-bold">{categories[counter]?.name}</h2>
          <img src={categories[counter]?.cover_photo} alt="" className="h-48" />
          <p className="text-sm z-10 text-white">
            {categories[counter]?.description}
          </p>
          <img
            src={categories[counter]?.character_photo}
            alt=""
            className="h-48 absolute bottom-14 right-0"
          />
        </div>
        <button className="text-2xl" onClick={next}>
          ➡️
        </button>
      </div>
    </div>
  );
}
