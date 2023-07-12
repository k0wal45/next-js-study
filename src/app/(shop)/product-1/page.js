import Link from "next/link"

function page() {
  return (
    <div className="w-full grid place-items-center">
        <h4 className="text-bold text-4xl">Product 1</h4>
        <ul className='flex gap-4 text-2xl'>
            <li>
                <Link href='/product-1'>Product 1</Link>
            </li>
            <li>
                <Link href='/product-2'>Product 2</Link>
            </li>
        </ul>
      
    </div>
  )
}

export default page
