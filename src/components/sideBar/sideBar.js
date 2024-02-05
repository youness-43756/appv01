export default function SideBar({ children }) {
  return (
    <nav className="absolute min-h-full bg-neutral-800 top-0 left-0 w-2/3 z-50 shadow-md px-4 py-3">
      <ul className="text-lg">{children}</ul>
    </nav>
  );
}
