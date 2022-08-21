import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{ display: "flex", gap: "1.5rem" }}>
      <Link href="/users" prefetch={false}>
        <a>Users</a>
      </Link>
      <Link href="/products" prefetch={false}>
        <a>Products</a>
      </Link>
      <Link href="/news" prefetch={false}>
        <a>News</a>
      </Link>
      <Link href="/events" prefetch={false}>
        <a>Events</a>
      </Link>
      <Link href="/comments" prefetch={false}>
        <a>Comments</a>
      </Link>
    </div>
  );
}
