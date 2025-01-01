import Carousel from "./components/carousel/Carousel";
import Hero from "./components/hero/Hero";
import "./styles.css";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <div
          className="
          h-[100vh] lg:h-[60vh] flex justify-start items-center hero-background
          "
        >
          <Hero />
        </div>
        <Carousel />
      </div>
    </>
  );
}
