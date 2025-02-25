import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='bg-white p-4 shadow-md mb-4 flex justify-between'>
      <div className="font-bold"><Link href="/">amrendram</Link></div>
      <div className="">
        <div className='flex gap-4'>
          <Link href="/blogs">blogs</Link>
          {/* <Link href="/resume">resume</Link> */}
          <Link href="https://github.com/theamrendram">github</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar