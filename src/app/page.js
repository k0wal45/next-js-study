import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full flex flex-col justify-between py-24">
      <h2>Hello Home Page</h2>
      <Link href="/About" className="text-4xl underline">About Page</Link>
    </section>
  )
}
