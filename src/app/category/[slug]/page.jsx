'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug

  // Format the title from slug (e.g., 'home-kitchen' -> 'Home & Kitchen')
  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace('And', '&')

  // Sample items for demonstration
  const sampleItems = [
    {
      id: 1,
      name: 'Premium Product A',
      price: '$29.99',
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Exclusive Item B',
      price: '$49.99',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Special Choice C',
      price: '$19.99',
      image:
        'https://images.unsplash.com/photo-1526170315876-db6d9203bb56?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Modern Gadget D',
      price: '$99.99',
      image:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 5,
      name: 'Classic Versatile E',
      price: '$34.50',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 6,
      name: 'Essential Filter F',
      price: '$12.99',
      image:
        'https://images.unsplash.com/photo-1511556840781-d9224709d035?q=80&w=400&auto=format&fit=crop',
    },
  ]

  // Sub-navbar links based on category (mock data)
  const subNavLinks = [
    'Best Sellers',
    'New Releases',
    'Customer Service',
    'Prime Video',
    'Amazon Music',
    'Books',
    'Electronics',
    'Home & Kitchen',
  ]

  return (
    <div className="min-h-screen bg-[#eaeded] dark:bg-zinc-950 flex flex-col">
      {/* 3D-Style Sub-Navbar (Internal to the category page) */}
      <div className="bg-white dark:bg-zinc-900 shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.05)] border-b border-gray-200 dark:border-zinc-800 sticky top-0 z-30 transition-all duration-300">
        <div className="max-w-[1500px] mx-auto px-4 md:px-10 h-10 flex items-center justify-between">
          <div className="flex items-center space-x-6 overflow-x-auto no-scrollbar py-1">
            <span className="text-sm font-bold border-r border-gray-300 pr-4 mr-2 text-black dark:text-white">
              {title}
            </span>
            {subNavLinks.map((link) => (
              <Link
                key={link}
                href={`/category/${slug}/${link.toLowerCase().replace(/ /g, '-')}`}
                className="text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 transition-colors whitespace-nowrap px-1 py-1 hover:translate-y-[-1px] active:scale-95"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto w-full px-4 md:px-10 py-6 flex gap-8">
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-56 shrink-0 space-y-6">
          <div>
            <h3 className="text-sm font-bold text-black dark:text-white mb-2">
              Department
            </h3>
            <ul className="text-xs space-y-2 text-gray-700 dark:text-gray-300">
              <li className="font-bold text-black dark:text-white">
                ‹ Any Department
              </li>
              <li className="font-bold pl-2 cursor-pointer">{title}</li>
              <li className="pl-4 hover:text-orange-600 cursor-pointer">
                Top Rated
              </li>
              <li className="pl-4 hover:text-orange-600 cursor-pointer">
                New Arrivals
              </li>
              <li className="pl-4 hover:text-orange-600 cursor-pointer">
                Best Sellers
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-black dark:text-white mb-2">
              Customer Review
            </h3>
            <ul className="space-y-1">
              {[4, 3, 2, 1].map((stars) => (
                <li
                  key={stars}
                  className="flex items-center gap-1 group cursor-pointer text-xs text-gray-700 dark:text-gray-300"
                >
                  <div className="flex text-orange-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s}>{s <= stars ? '★' : '☆'}</span>
                    ))}
                  </div>
                  <span className="group-hover:text-orange-600">& Up</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-black dark:text-white mb-2">
              Price
            </h3>
            <ul className="text-xs space-y-2 text-gray-700 dark:text-gray-300">
              <li className="hover:text-orange-600 cursor-pointer">
                Under $25
              </li>
              <li className="hover:text-orange-600 cursor-pointer">
                $25 to $50
              </li>
              <li className="hover:text-orange-600 cursor-pointer">
                $50 to $100
              </li>
              <li className="hover:text-orange-600 cursor-pointer">
                $100 to $200
              </li>
              <li className="hover:text-orange-600 cursor-pointer">
                $200 & Above
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-black dark:text-white mb-2">
              Brand
            </h3>
            <div className="space-y-1.5">
              {['Amr Exclusive', 'Premium Hub', 'Global Choice'].map(
                (brand) => (
                  <label
                    key={brand}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="w-3.5 h-3.5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-xs text-gray-700 dark:text-gray-300 group-hover:text-orange-600">
                      {brand}
                    </span>
                  </label>
                ),
              )}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Breadcrumbs */}
          <nav className="text-xs text-gray-600 dark:text-gray-400 flex gap-2 items-center">
            <Link href="/" className="hover:text-orange-600 hover:underline">
              Home
            </Link>
            <span className="text-gray-300">›</span>
            <span className="font-bold text-black dark:text-white uppercase tracking-tight">
              {title}
            </span>
          </nav>

          {/* Results Header */}
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-zinc-800 pb-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              1-48 of over 30,000 results for{' '}
              <span className="text-orange-700 font-bold italic">
                "{title}"
              </span>
            </p>
            <select className="bg-gray-100 dark:bg-zinc-800 text-xs px-2 py-1 rounded shadow-sm border border-gray-300 dark:border-zinc-700 focus:outline-none cursor-pointer">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Avg. Customer Review</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-8 animate-in fade-in duration-700">
            {sampleItems.map((item) => (
              <Card
                key={item.id}
                className="group border-none shadow-none bg-transparent hover:shadow-xl transition-all duration-300 rounded-none p-2"
              >
                <Link href={`/product/${item.id}`}>
                  <div className="relative aspect-4/5 overflow-hidden bg-white mb-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <CardContent className="p-0">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-orange-600 line-clamp-3 min-h-[56px] leading-tight">
                      {item.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-1 text-[#e16b0d] text-xs">
                      <span>★★★★☆</span>
                      <span className="text-blue-600 hover:text-orange-600">
                        1,234
                      </span>
                    </div>
                    <div className="mt-2 flex flex-col">
                      <div className="flex items-start">
                        <span className="text-xs mt-1">$</span>
                        <span className="text-2xl font-bold text-black dark:text-white">
                          {item.price.replace('$', '')}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Get it as soon as{' '}
                        <span className="font-bold text-black dark:text-white">
                          Tomorrow
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        FREE Shipping on eligible orders
                      </p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
