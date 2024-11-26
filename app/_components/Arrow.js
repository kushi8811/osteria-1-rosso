import Link from "next/link";

function Arrow() {
  return (
    <>
      <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl text-primary-600   p-2 rounded-full hover:bg-opacity-80 cursor-pointer"></div>
      <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl text-primary-600  p-2 rounded-full hover:bg-opacity-80 cursor-pointer"></div>
    </>
  );
}

export default Arrow;
