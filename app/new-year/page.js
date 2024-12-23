import MenuNew from "../_components/MenuNew";
import imagebg from "../../public/osteria-images/imagebg2.jpg";

export default function MenuPage() {
  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col items-center "
      style={{
        backgroundImage: `url(${imagebg.src})`,
      }}
    >
      <h1 className="text-xl font-bold text-center text-white mt-[120px] mb-4">
        Our special menu for New Year&apos;s Eve
      </h1>
      <div className="-mt-8 w-full">
        <MenuNew />
      </div>
    </div>
  );
}
