import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white p-4 shadow-md mb-4 flex justify-between'>
      <div className="font-bold">amrendram</div>
      <div className="">
        <ul className='flex gap-4'>
          <li>blogs</li>
          <li>resume</li>
          <li>github</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar