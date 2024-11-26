import Image from "next/image";
import Link from "next/link";
// import logo from "../../osteria-images/whitelogo.png";
import logo from "../../public/osteria-images/whitelogo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center">
      <Image
        src={logo}
        alt="Osteria Logo"
        className="object-contain h-14 sm:h-16 md:h-20 lg:h-24"
        priority
      />
    </Link>
  );
}

export default Logo;
