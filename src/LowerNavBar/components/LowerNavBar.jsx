'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'

const menuItems = [
  {
    name: 'Live Show',
    href: '#',
  },
  {
    name: 'Streams',
    href: '#',
  },
  {
    name: 'Movies',
    href: '#',
  },
  {
    name: 'Plays',
    href: '#',
  },  {
    name: 'Events',
    href: '#',
  },
  {
    name: 'Sports',
    href: '#',
  },  {
    name: 'Activities',
    href: '#',
  },
]

export function ExampleNavbarOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row md:flex-row lg:items-center md:items-center md:jusstify-center lg:justify-center justify-center px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
        
          <span className="font-bold">Mumbai,India</span>
        </div>
        <div className="lg:block w-full2 ">
          <ul className="overflow-x-auto flex md:gap-12 gap-5 pl-[5rem] mt-3 pb-4 hide-scrollbar items-center justify-center space-x-8 text-center ">
            {menuItems.map((item) => (
              <li className='snap-center flex-shrink-0' key={item.name}>
                <a
                  href={item.href}
                  className="text-sm  font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            className=" hidden rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Button text
          </button>
        </div>
        
       
      </div>
    </div>
  )
}
