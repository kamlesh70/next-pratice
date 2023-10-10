import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-lg">Hello World</h1>
      <Link href="/user" className="text-blue-500 underline">User</Link>
    </main>
  )
}
