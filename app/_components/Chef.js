import Image from "next/image";
// import imageChef from "@/osteria-images/image3.jpg";
import imageChef from "../../public/osteria-images/image3.jpg";

const Chef = () => {
  return (
    <section className="bg-transparent py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Chef's Description */}
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-center lg:text-left mb-6 text-primary">
              Meet Chef Arsen
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-8 text-white text-center lg:text-left">
              Chef Arsen brings a unique blend of over 21 years of culinary
              experience, mastering the art of Italian cuisine while infusing it
              with his own creative flair. His passion for cooking shines
              through in every dish, skillfully combining fresh, local
              ingredients to create memorable flavors that delight the senses.
            </p>
            <p className="text-lg lg:text-xl leading-relaxed mb-8 text-white text-center lg:text-left">
              Chef Arsen’s infectious smile and genuine hospitality make every
              dining experience special. Whether sharing a story about his
              culinary journey or presenting a beautifully crafted plate, his
              love for food and guests is evident. Join us at Antica Osteria and
              allow Chef Arsen to take you on a delicious adventure reflecting
              the rich traditions of Florence and beyond.
            </p>
          </div>

          {/* Chef's Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pl-8">
            <div className="relative rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image
                src={imageChef}
                alt="Chef Arsen at Antica Osteria"
                width={600}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
