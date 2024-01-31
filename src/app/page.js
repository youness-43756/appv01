import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full grid content-center place-content-center">
      <Link href="/magic-supp-resis">
        <button className="button">Start</button>
      </Link>
    </div>
  );
}
