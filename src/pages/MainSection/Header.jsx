import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <div className="w-full flex justify-center main-header p-2">
      <div className="container flex justify-between items-center">
        <h1 className="website-logo text-white text-xl font-semibold">Elevate Writing</h1>
        <Link href='/' className='Login-btn text-lg text-white'>Login</Link>
      </div>
    </div>
  )
}

export default Header;