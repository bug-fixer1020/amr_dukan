'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  FiShoppingCart,
  FiSearch,
  FiUser,
  FiSun,
  FiMoon,
  FiMenu,
} from 'react-icons/fi'
import { useTheme } from 'next-themes'

import Navlist from './SecendaryNevbar'
import { signOut, useSession } from 'next-auth/react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const { data: session } = useSession()

  // FORCE SESSION = TRUE for testing UI
  const forcedSession = { user: { name: 'Opu Barman' } }
  const activeSession = session || forcedSession

  const [cartCount, setCartCount] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const updateCount = () => {
      const savedCart = localStorage.getItem('amr_dokan_cart')
      if (savedCart) {
        try {
          const cart = JSON.parse(savedCart)
          const count = cart.reduce((total, item) => total + item.quantity, 0)
          setCartCount(count)
        } catch (e) {
          console.error('Error parsing cart', e)
        }
      } else {
        setCartCount(0)
      }
    }

    updateCount()
    window.addEventListener('cart-updated', updateCount)
    window.addEventListener('storage', updateCount) // Sync across tabs

    return () => {
      window.removeEventListener('cart-updated', updateCount)
      window.removeEventListener('storage', updateCount)
    }
  }, [])

  return (
    <div className="bg-[#131921] sticky top-0 z-50">
      <nav className="max-w-[1500px] mx-auto px-4 md:px-10 py-2 flex items-center justify-between text-white">
        {/* Mobile Menu Icon (Placeholder for now) */}
        <div className="md:hidden mr-2 cursor-pointer">
          <FiMenu className="text-2xl" />
        </div>

        {/* Logo */}
        <Link href="/">
          <div className="text-xl md:text-2xl font-bold cursor-pointer pr-4 whitespace-nowrap">
            Amr <span className="text-orange-400">Dokan</span>
          </div>
        </Link>

        {/* Search Section - Hidden on very small screens, visible on md+ */}
        <div className="hidden md:flex flex-1 max-w-3xl mx-4">
          <select className="bg-gray-100 mr-1 text-black text-sm px-1 rounded-l-md border-r border-gray-300 focus:outline-none cursor-pointer">
            <option>All</option>
            <option className="text-black bg-white">Electronics</option>
            <option className="text-black bg-white">Fashion</option>
            <option className="text-black bg-white">Home</option>
            <option className="text-black bg-white">Books</option>
            <option className="text-black bg-white">Beauty</option>
          </select>
          <input
            type="text"
            placeholder="Search in Amr Dokan"
            className="w-full px-4 py-2 text-black focus:outline-none border-none"
          />
          <button className="bg-orange-400 p-2 rounded-r-md flex items-center justify-center hover:bg-orange-500 transition-colors">
            <FiSearch className="text-black text-xl" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 md:space-x-6 text-sm ml-2 md:ml-4">
          {/* Theme Switcher */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md hover:bg-gray-700 transition-colors focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FiSun className="text-xl text-yellow-400" />
            ) : (
              <FiMoon className="text-xl text-gray-300" />
            )}
          </button>

          {/* language option - hidden on mobile */}
          <div className="hidden lg:flex items-center cursor-pointer hover:border border-white border-transparent p-1 rounded">
            <p className="text-sm font-bold">EN</p>
            <select className="bg-transparent text-white text-xs font-bold focus:outline-none cursor-pointer ml-1">
              <option className="text-black">EN</option>
              <option className="text-black">AR</option>
              <option className="text-black">ES</option>
              <option className="text-black">FR</option>
            </select>
          </div>

          <div className="relative group cursor-pointer hover:border border-white border-transparent p-1 rounded">
            <p className="hidden md:block text-xs">
              Hello, {session?.user?.name || 'sign in'}
            </p>
            <div className="flex items-center">
              <p className="font-bold hidden md:block">Account & Lists</p>
              <FiUser className="md:hidden text-xl" />
              <svg
                className="w-3 h-3 ml-1 text-gray-400 group-hover:text-white transition-colors hidden md:block"
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
                {!activeSession ? (
                  <>
                    <Link
                      href="/UserCreation/login"
                      className="w-full bg-gradient-to-b from-amber-300 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-sm py-1.5 rounded-md shadow-sm text-center font-medium border border-amber-500 mb-2 active:scale-[0.98] transition-all"
                    >
                      Sign In
                    </Link>
                    <p className="text-[11px]">
                      New customer?{' '}
                      <Link
                        href="/UserCreation/login"
                        className="text-blue-600 hover:text-orange-600 hover:underline"
                      >
                        Start here.
                      </Link>
                    </p>
                  </>
                ) : (
                  <button
                    onClick={() => signOut()}
                    className="w-full bg-gradient-to-b from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-sm py-1.5 rounded-md shadow-sm text-center font-medium border border-gray-300 mb-2 active:scale-[0.98] transition-all"
                  >
                    Sign Out
                  </button>
                )}
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
                    <Link href="/profile">
                      <li className="hover:text-orange-600 hover:underline cursor-pointer">
                        Account
                      </li>
                    </Link>
                    <li className="hover:text-orange-600 hover:underline cursor-pointer">
                      Orders
                    </li>
                    <li className="hover:text-orange-600 hover:underline cursor-pointer">
                      Recommendations
                    </li>
                    <Link href="/UserCreation/amrdukanbussiness">
                      <li className="hover:text-orange-600 hover:underline cursor-pointer">
                        Amr Dokan Business
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="cursor-pointer hover:border border-white border-transparent p-1 rounded hidden sm:block">
            <p className="text-xs">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>

          <Link
            href="/buynow"
            className="flex items-center cursor-pointer hover:border border-white border-transparent p-1 rounded relative"
          >
            <div className="relative">
              <FiShoppingCart className="text-2xl md:text-3xl" />
              <span className="absolute -top-1 -right-1 bg-orange-400 text-black font-bold rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center text-[10px] md:text-xs">
                {mounted ? cartCount : 0}
              </span>
            </div>
            <span className="font-bold mt-2 ml-1 hidden sm:block">Cart</span>
          </Link>
        </div>
      </nav>
      <Navlist />
    </div>
  )
}
