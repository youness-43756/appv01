import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen grid content-center place-content-center">
      <Link href="/magic-supp-resis">
        <button className="btn btn-info">Start</button>
      </Link>
    </div>
  );
}
