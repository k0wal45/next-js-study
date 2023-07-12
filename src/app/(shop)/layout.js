import Link from "next/link";

export default function Home({children}) {
    return (
      <section className="h-full flex flex-col justify-between py-24 bg-red-200">
        <h3>Hello Shop Here</h3>
        {children}
      </section>
    )
  }
  