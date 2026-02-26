'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import {
  FiShare2,
  FiHeart,
  FiMapPin,
  FiChevronRight,
  FiCheck,
} from 'react-icons/fi'
import { toast } from 'sonner'

export default function ProductDetailsPage() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  // Mock product data
  const product = {
    id,
    title:
      'Amr Dokan Premium Wireless Headphones - Active Noise Cancelling, BlueTooth 5.2, 40H Playtime',
    brand: 'Amr Exclusive',
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.6,
    reviewCount: 2458,
    stockStatus: 'In Stock',
    description: [
      'Advanced Active Noise Cancelling: Effectively blocks out background noise for an immersive listening experience.',
      'High-Fidelity Sound: Custom 40mm drivers deliver rich, clear audio with deep, punchy bass.',
      '40-Hour Battery Life: Enjoy up to 40 hours of playtime on a single charge. Quick charge gives 4 hours in 10 mins.',
      'Crystal Clear Calls: Integrated microphones with environmental noise cancellation for seamless hands-free calls.',
      'All-day Comfort: Soft memory protein earpads and adjustable headband for long-term wearing comfort.',
    ],
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd97773dbf9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
    ],
    reviews: [
      {
        id: 1,
        user: 'Sarah M.',
        date: 'February 12, 2024',
        rating: 5,
        comment:
          'Absolutely love these! The sound quality is comparable to much more expensive brands. The ANC is a lifesaver on my commute.',
        helpful: 124,
      },
      {
        id: 2,
        user: 'James R.',
        date: 'January 28, 2024',
        rating: 4,
        comment:
          'Great headphones for the price. Very comfortable for long sessions. Battery life is as advertised.',
        helpful: 89,
      },
      {
        id: 3,
        user: 'Amina K.',
        date: 'January 15, 2024',
        rating: 5,
        comment:
          'The best headphones I have ever owned. The blue color is stunning and the case is very sturdy.',
        helpful: 45,
      },
    ],
    ratingDistribution: [
      { stars: 5, percentage: 72 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],
  }

  const relatedProducts = [
    {
      id: 'p1',
      name: 'Protective Hard Case',
      price: '$24.99',
      image:
        'https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=400&fit=crop',
    },
    {
      id: 'p2',
      name: 'Universal Audio Cable',
      price: '$12.99',
      image:
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=400&fit=crop',
    },
    {
      id: 'p3',
      name: 'Bluetooth Transmitter',
      price: '$35.99',
      image:
        'https://images.unsplash.com/photo-1621259182978-fbf9312267b8?q=80&w=400&fit=crop',
    },
    {
      id: 'p4',
      name: 'Extra Comfort Earpads',
      price: '$19.99',
      image:
        'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=400&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="max-w-[1500px] mx-auto px-4 md:px-10 py-4 flex flex-col lg:flex-row gap-8">
        {/* Left Side: Product Media */}
        <div className="flex-1 flex flex-col md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex flex-row md:flex-col gap-2 order-2 md:order-1">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveImage(idx)}
                className={`w-12 h-12 md:w-16 md:h-16 border-2 rounded p-1 overflow-hidden transition-all ${activeImage === idx ? 'border-orange-500 shadow-md ring-1 ring-orange-200' : 'border-gray-200 hover:border-gray-400'}`}
              >
                <img
                  src={img}
                  alt="thumb"
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1 order-1 md:order-2 bg-white flex items-center justify-center p-4 relative group cursor-zoom-in min-h-[400px]">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full h-full aspect-square"
            >
              <Image
                src={product.images[activeImage]}
                alt={product.title}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 bg-white/80 backdrop-blur shadow rounded-full hover:bg-white">
                <FiShare2 />
              </button>
              <button className="p-2 bg-white/80 backdrop-blur shadow rounded-full hover:bg-white">
                <FiHeart />
              </button>
            </div>
          </div>
        </div>

        {/* Middle: Product Info */}
        <div className="flex-[1.2] flex flex-col gap-4">
          <div className="border-b border-gray-100 pb-2">
            <h1 className="text-2xl ml-2 md:text-3xl font-medium text-gray-900 dark:text-gray-100 leading-tight mb-1">
              {product.title}
            </h1>
            <Link
              href="#"
              className="text-sm text-blue-600 hover:text-orange-600 hover:underline"
            >
              Visit the {product.brand} Store
            </Link>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-orange-400 text-sm">{'★★★★☆'}</div>
              <span className="text-sm text-blue-600 hover:text-orange-600 hover:underline cursor-pointer">
                {product.reviewCount} ratings
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-blue-600 hover:text-orange-600 hover:underline cursor-pointer">
                Search this page
              </span>
            </div>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-sm text-red-600 font-medium">-35%</span>
            <span className="text-2xl font-bold text-black dark:text-white">
              <span className="text-sm align-top mt-1 inline-block">$</span>
              {product.price}
            </span>
          </div>
          <p className="text-xs text-gray-500 line-through">
            List Price: ${product.originalPrice}
          </p>

          <div className="space-y-3 mt-4">
            <h3 className="font-bold text-sm">About this item</h3>
            <ul className="list-disc pl-4 text-sm space-y-2 text-gray-800 dark:text-gray-300">
              {product.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Purchase Card */}
        <div className="flex-1 lg:max-w-[280px]">
          <Card className="sticky top-20 border border-gray-200 dark:border-zinc-800 shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-medium text-black dark:text-white">
                  ${product.price}
                </span>
                <FiShare2 className="text-gray-400 cursor-pointer" />
              </div>

              <div className="text-sm space-y-2">
                <p className="text-blue-600 font-medium">
                  FREE delivery{' '}
                  <span className="text-black dark:text-white font-bold">
                    Tomorrow, Feb 27
                  </span>
                </p>
                <div className="flex items-start gap-1 text-gray-600 dark:text-gray-400">
                  <FiMapPin className="mt-1 shrink-0" />
                  <span>Deliver to Opu - Dhaka 1205</span>
                </div>
              </div>

              <p className="text-green-700 font-bold text-lg">
                {product.stockStatus}
              </p>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <span>Qty:</span>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="bg-gray-100 dark:bg-zinc-800 border rounded px-2 py-0.5 focus:outline-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </div>

                <Button
                  onClick={() => {
                    const savedCart = localStorage.getItem('amr_dokan_cart')
                    let cart = []
                    if (savedCart) {
                      try {
                        cart = JSON.parse(savedCart)
                      } catch (e) {
                        console.error('Error parsing cart', e)
                      }
                    }

                    const existingIndex = cart.findIndex(
                      (item) => item.id === product.id,
                    )
                    const q = parseInt(quantity)

                    if (existingIndex > -1) {
                      cart[existingIndex].quantity += q
                    } else {
                      cart.push({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.images[0],
                        quantity: q,
                      })
                    }

                    localStorage.setItem('amr_dokan_cart', JSON.stringify(cart))
                    window.dispatchEvent(new Event('cart-updated'))

                    toast.success('Added to Cart', {
                      description: `${product.title.slice(0, 30)}...`,
                      action: {
                        label: 'View Cart',
                        onClick: () => (window.location.href = '/buynow'),
                      },
                    })
                  }}
                  className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-black rounded-full shadow-sm border border-[#fcd200] font-medium transition-all active:scale-[0.98]"
                >
                  Add to Cart
                </Button>
                <Button className="w-full bg-[#ffa41c] hover:bg-[#fa8914] text-black rounded-full shadow-sm border border-[#ee8912] font-medium transition-all active:scale-[0.98]">
                  Buy Now
                </Button>
              </div>

              <div className="text-xs space-y-1 mt-2 text-gray-600 dark:text-gray-400 border-t border-gray-100 pt-3">
                <div className="flex justify-between">
                  <span>Ships from</span>{' '}
                  <span className="text-black dark:text-white font-medium">
                    AmrDokan
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Sold by</span>{' '}
                  <span className="text-black dark:text-white font-medium">
                    AmrDokan
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Returns</span>{' '}
                  <span className="text-blue-600">Eligible for return</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Review Section */}
      <div className="max-w-[1500px] mx-auto px-4 md:px-10 py-12 border-t border-gray-100">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Review Stats */}
          <div className="w-full lg:w-80 shrink-0">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Customer Reviews
            </h2>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-orange-400 text-xl">★★★★☆</div>
              <span className="text-lg font-bold">
                {product.rating} out of 5
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              {product.reviewCount} global ratings
            </p>

            <div className="space-y-3">
              {product.ratingDistribution.map((dist) => (
                <div
                  key={dist.stars}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <span className="text-sm text-blue-600 hover:underline min-w-[50px]">
                    {dist.stars} star
                  </span>
                  <div className="flex-1 h-5 bg-gray-100 dark:bg-zinc-800 rounded-sm overflow-hidden border border-gray-200 dark:border-zinc-700">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${dist.percentage}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-[#ffa41c]"
                    />
                  </div>
                  <span className="text-sm text-blue-600 hover:underline min-w-[40px]">
                    {dist.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Review List */}
          <div className="flex-1 space-y-8">
            <h3 className="text-xl font-bold text-black dark:text-white">
              Top reviews from Bangladesh
            </h3>
            {product.reviews.map((review) => (
              <div
                key={review.id}
                className="animate-in fade-in slide-in-from-bottom duration-500"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                    👤
                  </div>
                  <span className="text-sm font-medium">{review.user}</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-orange-400 text-xs">
                    {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
                  </div>
                  <span className="text-xs font-bold">Verified Purchase</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">
                  Reviewed in Bangladesh on {review.date}
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed mb-4">
                  {review.comment}
                </p>
                <div className="flex items-center gap-4">
                  <button className="text-xs border border-gray-300 px-4 py-1.5 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                    Helpful
                  </button>
                  <span className="text-xs text-gray-500">|</span>
                  <button className="text-xs text-gray-500 hover:underline">
                    Report
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="max-w-[1500px] mx-auto px-4 md:px-10 py-12 border-t border-gray-100">
        <h2 className="text-xl font-bold mb-6">
          Inspired by your shopping trend
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {relatedProducts.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-white mb-2 p-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <h4 className="text-sm text-blue-600 hover:text-orange-600 hover:underline line-clamp-2 min-h-[40px] mb-1">
                {item.name}
              </h4>
              <div className="flex text-orange-400 text-xs mb-1">★★★★★</div>
              <p className="font-bold text-red-700">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
