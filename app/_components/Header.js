import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-10">
      <div className="flex items-center justify-between px-4 py-3 sm:px-8 pr-8">
        {" "}
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
