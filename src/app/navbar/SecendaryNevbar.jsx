'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navlist() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const navItems = [
    'AmrDukan Hul',
    'Medical Care',
    'Books',
    'Best Sellers',
    'Prime',
    'Registry',
    'Gift Cards',
    'Smart Home',
    'New Releases',
    'Groceries',
    'Todays Deals',
    'Pharmacy',
    'Customer Service',
    'Music',
    'Fashion',
    'Automotive',
    'Toys & Games',
    'Kindle Books',
    'Baby',
  ]

  const getSlug = (item) =>
    item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')

  return (
    <div className="bg-[#232f3e] text-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto py-1 px-4 md:px-10 flex items-center space-x-4">
        {/* All Menu Button */}
        <button
          onClick={toggleSidebar}
          className="flex items-center space-x-1 hover:border border-white border-transparent p-1 rounded cursor-pointer whitespace-nowrap font-bold"
        >
          <FiMenu className="text-xl" />
          <span>All</span>
        </button>

        {/* Navigation Links - Horizontal scroll on mobile */}
        <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar scroll-smooth">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={`/category/${getSlug(item)}`}
              className="px-2 py-1 hover:border border-white border-transparent rounded whitespace-nowrap text-sm"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Sidebar Overlay (Simplified for now) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[100] flex animate-in fade-in duration-300">
          <div className="w-80 bg-white h-full shadow-2xl overflow-y-auto animate-in slide-in-from-left duration-300">
            <div className="bg-[#232f3e] text-white p-4 flex items-center justify-between sticky top-0">
              <div className="flex items-center space-x-2">
                <div className="bg-gray-200 rounded-full p-2">
                  <FiMenu className="text-black text-xl" />
                </div>
                <span className="font-bold text-lg">Hello</span>
              </div>
              <button
                onClick={toggleSidebar}
                className="p-1 hover:bg-gray-700 rounded transition-colors"
              >
                <FiX className="text-2xl" />
              </button>
            </div>

            <div className="py-2 text-black">
              <div className="px-6 py-3 border-b border-gray-100">
                <h3 className="font-bold text-lg mb-2">
                  Digital Content & Devices
                </h3>
                <ul className="space-y-3">
                  <li className="hover:bg-gray-100 cursor-pointer py-1">
                    AmrDukan Music
                  </li>
                  <li className="hover:bg-gray-100 cursor-pointer py-1">
                    Kindle E-readers & Books
                  </li>
                  <li className="hover:bg-gray-100 cursor-pointer py-1">
                    AmrDukan Appstore
                  </li>
                </ul>
              </div>
              <div className="px-6 py-3">
                <h3 className="font-bold text-lg mb-2">Programs & Features</h3>
                <ul className="space-y-3 font-medium">
                  {navItems.slice(0, 8).map((item, idx) => (
                    <Link key={idx} href={`/category/${getSlug(item)}`}>
                      <li className="hover:bg-gray-100 cursor-pointer py-1 flex justify-between items-center group">
                        <span>{item}</span>
                        <span className="text-gray-400 group-hover:text-black">
                          ›
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="flex-1 bg-black/60 backdrop-blur-sm"
            onClick={toggleSidebar}
          />
        </div>
      )}
    </div>
  )
}
