import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/magic-supp-resis">
        <button className="btn btn-info">Start</button>
      </Link>
    </div>
  );
}
