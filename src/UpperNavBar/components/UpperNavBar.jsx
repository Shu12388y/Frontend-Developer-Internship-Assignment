'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

export function ExampleNavbarOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

 

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
         
         <span className='font-bold text-red-700'>BookUsNow</span>
         <div className="hidden  lg:block">
          <button
            type="button"
            className="rounded-md ml-5 bg-white px-2 py-2 text-sm font-semibold text-black shadow-sm border border-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            &#8801; Categories
          </button>
        </div>
          
        </div>
        <div className="hidden lg:block">
          <div className="flex grow justify-end">
          <input
            className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Serach"
          ></input>
           <div className="hidden  lg:block">
          <button
            type="button"
            className="rounded-md ml-5 bg-white px-2 py-2 text-sm font-semibold text-black shadow-sm border border-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            &#x2665; Favorites
          </button>
        </div>
        <div className="hidden  lg:block">
          <button
            type="button"
            className="rounded-md ml-5 bg-white px-3 py-2 text-sm font-semibold text-black border  border-slate-300 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Sign In
          </button>
        </div>
        </div>
        

        </div>
        
        
        <div className='lg:hidden md:hidden '>
          <span className='mx-1 grayscale'> &#x1F50D;</span>
          <span className='mx-1 grayscale'>&#x2764;</span>
          <span className='mx-1 grayscale'>&#128100;</span>
        </div>
        
      </div>
    </div>
  )
}
