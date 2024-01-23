import { Rubik_Burned } from "next/font/google";
import Laptop_navbar from "./LaptopNavbar/page";
import Link from "next/link";
import Mobile_navbar from "./MobileNavbar/page";

const rb = Rubik_Burned({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  return (
    <header className="flex justify-between items-center md:px-4 px-2 bg-[#ff9416] h-14 text-neutral-50 shadow-sm">
      <div className={rb.className}>
        <Link
          href={"/"}
          className="sm:text-3xl text-2xl cursor-pointer font-bold"
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
