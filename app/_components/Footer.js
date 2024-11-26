import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { FaInstagram, FaGoogle } from "react-icons/fa"; // Import Instagram and Google Icons

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact Us</h3>
          <div className="flex items-center mb-2">
            <PhoneIcon className="w-5 h-5 mr-3 text-white" />
            <span>055 2670461</span>
          </div>
          <div className="flex items-center mb-2">
            <EnvelopeIcon className="w-5 h-5 mr-3 text-white" />
            <span>osteriaunorosso@gmail.com</span>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="w-5 h-5 mr-3 text-white" />
            <span>Via Borgo Ognissanti 1/R , Florence </span>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/osteria_1rosso/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram className="w-6 h-6 text-white" />{" "}
              {/* Instagram Icon */}
            </a>
            <a
              href="https://maps.app.goo.gl/vHoyNqe29Ya7tMRV6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGoogle className="w-6 h-6 text-white" /> {/* Google Icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
