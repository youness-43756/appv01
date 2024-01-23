import { RiMenu2Fill } from "react-icons/ri";
import { links } from "../data";
import Link from "next/link";

export default function Mobile_navbar() {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <RiMenu2Fill size={22} />
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-neutral-700"
      >
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
