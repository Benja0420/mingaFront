import Carousel from "./components/carousel/Carousel";
import Hero from "./components/hero/Hero";
import './styles.css';

export default function Home() {
  return (
    <>
    <div className="
      h-[60vh] flex justify-start items-center hero-background
    ">
      <Hero />
    </div>
      <Carousel />
    </>
  );
}
