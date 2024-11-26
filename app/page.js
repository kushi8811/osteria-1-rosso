import Image from "next/image";
import backgroundImage from "../public/osteria-images/image9.jpg"; // Original image path
import getReviews from "./_lib/api";
import Carousel from "./_components/Carousel";
import Map from "./_components/Map";
import { Suspense } from "react";
import Footer from "./_components/Footer";
import Link from "next/link";

export default async function Home() {
  const reviews = await getReviews();
  const fiveStarReviews = reviews.filter((review) => review.rating === 5);

  return (
    <>
      <div className="w-full">
        <div className="relative h-screen w-full">
          <Image
            src={backgroundImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover sm:object-cover md:object-cover lg:object-cover"
            priority
            quality={85}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-start text-white bg-black bg-opacity-60 pt-[250px]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center animate__animated animate__fadeIn">
              Welcome to Osteria 1 Rosso
            </h1>
            <Link
              href="/menu"
              className="mt-6 px-6 py-3 bg-accent-700 text-lg font-semibold rounded-lg hover:bg-accent-400 transition-all animate__animated animate__fadeIn animate__delay-1s"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>

        <div className="bg-black py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-white">
            What Our Customers Say
          </h2>

          <Carousel reviews={fiveStarReviews} />
        </div>
        <Suspense>
          <Map />
        </Suspense>
      </div>
      <footer className="scroll-smooth">
        <Footer />
      </footer>
    </>
  );
}
