import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex justify-center w-full bg-green-50 '>
        <div className='flex w-full max-w-6xl bg-green-50 justify-between px-15 items-center fixed  h-15 z-30 '>
            <h1 className='font-semibold text-2xl text-emerald-600'>AsliNasli</h1>

            <div className='flex gap-3 text-emerald-600'>
                <a >Home</a>
                <a >Products</a>
                <a >About Us</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar