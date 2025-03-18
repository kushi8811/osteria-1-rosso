import Image from "next/image";
import imagebg from "../../public/osteria-images/imagebg2.jpg";

const galleryImages = [
  "/osteria-images/gallery1.JPG",
  "/osteria-images/gallery2.JPG",
  "/osteria-images/gallery3.jpg",
  "/osteria-images/gallery4.JPG",
  "/osteria-images/gallery5.jpg",
  "/osteria-images/gallery6.jpg",
  "/osteria-images/gallery7.jpg",
  "/osteria-images/gallery8.jpg",
  "/osteria-images/gallery9.jpg",
  "/osteria-images/gallery10.jpg",
  "/osteria-images/gallery11.jpg",
  "/osteria-images/gallery12.jpg",
  "/osteria-images/gallery13.jpg",
  "/osteria-images/gallery14.jpg",
  "/osteria-images/gallery15.jpg",
  "/osteria-images/gallery16.jpg",
  //   "/osteria-images/gallery17.jpg",
  //   "/osteria-images/gallery18.jpg",
  //   "/osteria-images/gallery19.jpg",
  //   "/osteria-images/gallery20.jpg",
];

const Gallery = () => {
  return (
    <div
      className="bg-gray-50 py-16"
      style={{
        backgroundImage: `url(${imagebg.src})`,
      }}
    >
      <div className="container mx-auto px-4 mt-[100px]">
        {/* Gallery Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white sm:text-5xl font-bold mb-4">
            COME AND VISIT US
          </h2>
          <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto">
            The atmosphere of the “Old Inn” is both friendly and informal during
            lunchtime and romantic and intimate in the evening. The decor is
            also true to the traditional tavern style, with comfortable
            furnishings and charming decorations that transport diners back in
            time. Overall, the “Old Inn” is the perfect place to experience the
            best of traditional Tuscan cuisine in a charming and authentic
            setting.
          </p>
        </div>

        {/* New paragraph - Highlighting the dishes */}
        <div className="text-center mb-12">
          <p className="text-lg text-white sm:text-xl max-w-2xl mx-auto">
            Take a look at our delicious plates! We serve a wide variety of
            traditional Tuscan dishes, prepared with fresh, high-quality
            ingredients that will make your taste buds dance. Whether you are
            enjoying a casual lunch or a romantic dinner, our menu is sure to
            impress!
          </p>
        </div>

        {/* Gallery Images - More Dynamic Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl ${
                index % 3 === 0 ? "col-span-2" : ""
              }`}
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
