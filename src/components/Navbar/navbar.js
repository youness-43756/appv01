import Laptop_navbar from "./LaptopNavbar/page";
import Link from "next/link";
import Mobile_navbar from "./MobileNavbar/page";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center md:px-4 px-2 h-14 bg-neutral-800 text-neutral-100 shadow-sm">
      <div className="flex items-center md:gap-3 gap-2">
        <Link
          href={"/"}
          className="sm:text-3xl text-2xl cursor-pointer font-bold text-[#ff9416]"
        >
          Bitcoin.
        </Link>
      </div>
      <div className="sm:block hidden">
        <Laptop_navbar />
      </div>
      <div className="sm:hidden block">
        <Mobile_navbar />
      </div>
    </header>
  );
}
