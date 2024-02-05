"use client";
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri";
import { links } from "../data";
import Link from "next/link";
import SideBar from "@/components/sideBar/sideBar";
import { useState } from "react";

export default function Mobile_navbar() {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="cursor-pointer block"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {IsOpen ? <RiCloseFill size={24} /> : <RiMenu2Fill size={24} />}
      </button>
      <div
        className={`backdrop-blur-sm z-50 bg-white/40 absolute mt-14 ${
          IsOpen ? "left-0 right-0" : "left-[-1000%]"
        } top-0  bottom-0 duration-150`}
      >
        <SideBar>
          {links.map((l) => (
            <li
              key={l.id}
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/30 mb-1 rounded-md px-1"
            >
              <Link href={l.url}>{l.title}</Link>
            </li>
          ))}
        </SideBar>
      </div>
    </div>
  );
}
