import MenuCarousel from "../_components/MenuCarousel";
import imagebg from "../../public/osteria-images/imagebg2.jpg";

export default function MenuPage() {
  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col items-center "
      style={{
        backgroundImage: `url(${imagebg.src})`,
      }}
    >
      <h1 className="text-4xl font-bold text-center text-white mt-[150px]">
        Our Menu
      </h1>
      <p className="text-white text-center mt-4 mb-0">
        Explore our delicious offerings!
      </p>
      <MenuCarousel />
    </div>
  );
}
