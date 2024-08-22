import Link from "next/link";

export default function navbar() {
  return (
    <div>
        <nav>this is navbar</nav>
        <Link href="/profile">profile</Link>
        <Link href="/login">login</Link>
        <Link href="/signup">signup</Link>
    </div>
  )
}
