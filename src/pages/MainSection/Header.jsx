import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <div className="w-full flex justify-center main-header p-4">
      <div className="container flex justify-between items-center">
        <h1 className="website-logo text-white text-xl font-bold">Personal Bloging App</h1>
        <Link href='/' className='Login-btn text-3xl text-white font-bold'>Login</Link>
      </div>
    </div>
  )
}

export default Header;