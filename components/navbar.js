import Link from "next/link";
import {signIn,signOut} from 'next-auth/react'

export default function Navbar() {
  return (
    <div style={{ display: "flex"}}>
      <div className="nav-link">
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
      <div className="nav-link">
      <Link href="/api/auth/signIn" prefetch={false}>
        <a onClick={(e)=>{e.preventDefault(); signIn('github');}}>  SignIn</a>
      </Link>
      <Link href="/api/auth/signOut" prefetch={false}>
        <a onClick={(e)=>{e.preventDefault(); signOut();}}>SignOut</a>
      </Link>
      </div>
    </div>
  );
}
