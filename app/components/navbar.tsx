import React from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
const Navbar = () => {
  return (
    <div className=' flexBetween max-container padding-container relative z-30 py-5'>
        <Link href="/">
        Logo
        </Link>
        <ul className="h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>
      <div>
        <button>
            Sign In
        </button>
      </div>
    </div>
  )
}

export default Navbar