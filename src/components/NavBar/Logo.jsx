import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <div>
          <Link
            href="/"
            className="flex items-center text-white font-bold ml-3 text-lg gap-3"
          >
            <Image
              src="/icon.svg"
              alt="Logo"
              width={40} 
              height={40} 
              style={{ width: "40px", height: "40px" }}
            />
            Gloobcamp
          </Link>
        </div>
  )
}
