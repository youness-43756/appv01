import Laptop_navbar from "./LaptopNavbar/page";
import Link from "next/link";
import Mobile_navbar from "./MobileNavbar/page";
import { ImHistory } from "react-icons/im";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center md:px-4 px-2 h-14 bg-neutral-800 text-neutral-100 shadow-sm">
      <div className="flex items-center md:gap-3 gap-2">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="drawer-button cursor-pointer font-medium"
            >
              <ImHistory size={25} />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
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
