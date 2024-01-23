import { links } from "../data";
import Link from "next/link";

export default function Laptop_navbar() {
  return (
    <nav className="flex gap-3">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          className="font-medium hover:opacity-90"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
