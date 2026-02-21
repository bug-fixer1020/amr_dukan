import React from 'react'
import Link from 'next/link'
import { FiShoppingCart, FiSearch, FiUser } from 'react-icons/fi'

export default function Navbar() {
  return (
    <nav className="bg-[#131921] px-[150px] py-2 flex items-center justify-between text-white sticky top-0 z-50">
      {/* Logo */}
      <Link href="/">
        <div className="text-2xl font-bold cursor-pointer pr-4">
          Amr <span className="text-orange-400">Dokan</span>
        </div>
      </Link>

      {/* Search Section */}
      <div className="flex flex-1 max-w-xl mx-2 ">
        <select
          className="bg-gray-100 mr-1
         text-black text-sm px-1 rounded-l-md border-r border-gray-300 focus:outline-none cursor-pointer"
        >
          <option>All</option>
          <option className="text-black bg-white ">Electronics</option>
          <option className="text-black bg-white ">Fashion</option>
          <option className="text-black bg-white ">Home</option>
          <option className="text-black bg-white ">Books</option>
          <option className="text-black bg-white ">Beauty</option>
        </select>
        <input
          type="text"
          placeholder="Search in Amr Dokan"
          className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none stroke-white border-white border-1 text-white"
        />
        <button className="bg-orange-400 p-2 rounded-r-md flex items-center justify-center hover:bg-orange-500 transition-colors">
          <FiSearch className="text-black text-xl" />
        </button>
      </div>
      {/* chnage language option */}

      <div className="flex items-center ml-4 cursor-pointer hover:border border-white border-transparent p-1 rounded">
        <p className="text-sm font-bold">Language</p>
        <select className="bg-transparent text-white text-sm font-bold focus:outline-none cursor-pointer">
          <option className="text-black">EN</option>
          <option className="text-black">AR</option>
          <option className="text-black">ES</option>
          <option className="text-black">FR</option>
        </select>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6 text-sm ml-4">
        <div className="relative group cursor-pointer hover:border border-white border-transparent p-1 rounded">
          <p className="text-xs">Hello, sign in</p>
          <div className="flex items-center">
            <p className="font-bold">Account & Lists</p>
            <svg
              className="w-3 h-3 ml-1 text-gray-400 group-hover:text-white transition-colors"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Dropdown Menu */}
          <div className="absolute top-full right-0 mt-1 w-64 bg-white text-black shadow-xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] border border-gray-200">
            <div className="p-4 border-b border-gray-100 flex flex-col items-center">
              <Link
                href="/auth/login"
                className="w-full bg-gradient-to-b from-amber-300 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-sm py-1.5 rounded-md shadow-sm text-center font-medium border border-amber-500 mb-2 active:scale-[0.98] transition-all"
              >
                Sign In
              </Link>
              <p className="text-[11px]">
                New customer?{' '}
                <Link
                  href="/auth/login"
                  className="text-blue-600 hover:text-orange-600 hover:underline"
                >
                  Start here.
                </Link>
              </p>
            </div>

            <div className="flex p-4 text-xs">
              <div className="w-1/2 border-r border-gray-100 pr-4">
                <h3 className="font-bold mb-2 text-sm">Your Lists</h3>
                <ul className="space-y-2">
                  <li className="hover:text-orange-600 hover:underline cursor-pointer">
                    Create a List
                  </li>
                  <li className="hover:text-orange-600 hover:underline cursor-pointer">
                    Find a List or Registry
                  </li>
                </ul>
              </div>
              <div className="w-1/2 pl-4">
                <h3 className="font-bold mb-2 text-sm">Your Account</h3>
                <ul className="space-y-2">
                  <li className="hover:text-orange-600 hover:underline cursor-pointer">
                    Account
                  </li>
                  <li className="hover:text-orange-600 hover:underline cursor-pointer">
                    Orders
                  </li>
                  <li className="hover:text-orange-600 hover:underline cursor-pointer">
                    Recommendations
                  </li>
                  <li className="hover:text-orange-600 hover:underline cursor-pointer">
                    Browsing History
                  </li>
                  <li className="hover:text-orange-600 hover:underline cursor-pointer">
                    Watchlist
                  </li>
                  <li className="hover:text-orange-600 hover:underline cursor-pointer">
                    Switch Accounts
                  </li>
                  <li className="hover:text-orange-600 hover:underline cursor-pointer">
                    Sign Out
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="cursor-pointer hover:border border-white border-transparent p-1 rounded">
          <p className="text-xs">Returns</p>
          <p className="font-bold">& Orders</p>
        </div>

        <div className="flex items-center cursor-pointer hover:border border-white border-transparent p-1 rounded relative">
          <div className="relative">
            <FiShoppingCart className="text-3xl" />
            <span className="absolute -top-1 -right-1 bg-orange-400 text-black font-bold rounded-full h-5 w-5 flex items-center justify-center text-xs">
              0
            </span>
          </div>
          <span className="font-bold mt-2 ml-1">Cart</span>
        </div>
      </div>
    </nav>
  )
}
