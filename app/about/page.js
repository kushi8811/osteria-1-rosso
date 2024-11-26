// app/about/page.jsx

import Image from "next/image";
import image1 from "../../public/osteria-images/rimage.jpg";
import image4 from "../../public/osteria-images/rimage1.jpg";
import imagebg from "../../public/osteria-images/imagebg2.jpg";

import Chef from "../_components/Chef";

const AboutPage = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${imagebg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent text-gradient mb-8 animate__animated animate__fadeIn">
            Welcome to Our Osteria
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-10 sm:mb-12 animate__animated animate__fadeIn animate__delay-1s">
            Step into our restaurant and immerse yourself in the charming
            ambiance of a classic Florentine osteria. Here, the warm, rustic
            decor and inviting atmosphere transport you to a time when family
            and friends gathered to share hearty meals and good conversation.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <div className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image
                src={image1}
                alt="Rustic Florentine Osteria Interior"
                width={600}
                height={400}
                className="w-full h-56 sm:h-64 object-cover rounded-lg"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image
                src={image4}
                alt="Delicious Tuscan Dish"
                width={600}
                height={400}
                className="w-full h-56 sm:h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* History Paragraph */}
          <p className="text-base sm:text-lg leading-relaxed mb-12 sm:mb-16 animate__animated animate__fadeIn animate__delay-2s">
            Founded in 1960 by Alberto, our osteria has long been a favorite
            among locals and tourists alike. Located in a prime spot between the
            famous Santa Maria Novella square and the Carraia bridge, it offers
            a unique dining experience that combines tradition, culture, and
            flavor.
          </p>

          {/* Chef Section */}
          <Chef />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
