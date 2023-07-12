import Link from "next/link";

export default function Home() {
    return (
      <section className="h-full flex flex-col justify-between py-24">
        <h2 className="text-center">Hello About Page Here</h2>
        <Link href="/" className="text-4xl underline">Home Page</Link>
      </section>
    )
  }
  