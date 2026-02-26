'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiTrash2,
  FiMinus,
  FiPlus,
  FiArrowLeft,
  FiShoppingBag,
  FiCheck,
} from 'react-icons/fi'
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function BuyNowPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [cartItems, setCartItems] = React.useState([])
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/UserCreation/login?callbackUrl=/buynow')
    }
  }, [status, router])

  React.useEffect(() => {
    setMounted(true)
    const savedCart = localStorage.getItem('amr_dokan_cart')
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (e) {
        console.error('Error parsing cart', e)
      }
    }
  }, [])

  const saveCart = (newCart) => {
    setCartItems(newCart)
    localStorage.setItem('amr_dokan_cart', JSON.stringify(newCart))
    window.dispatchEvent(new Event('cart-updated'))
  }

  const removeFromCart = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id)
    saveCart(newCart)
  }

  const updateQuantity = (id, quantity) => {
    const newCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item,
    )
    saveCart(newCart)
  }

  const clearCart = () => {
    saveCart([])
  }

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  if (!mounted) return null

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gray-50 dark:bg-zinc-900 p-12 rounded-full mb-6"
        >
          <FiShoppingBag className="text-6xl text-gray-300" />
        </motion.div>
        <h1 className="text-3xl font-bold mb-2">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-8 max-w-md">
          Looks like you haven&apos;t added anything to your cart yet. Start
          exploring our amazing collection!
        </p>
        <Link href="/">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-lg text-lg font-bold shadow-lg shadow-orange-200 dark:shadow-none transition-all active:scale-95">
            Start Shopping
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-12 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-blue-600 hover:text-orange-600 transition-colors font-medium"
          >
            <FiArrowLeft /> Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Shopping Cart
          </h1>
          <button
            onClick={clearCart}
            className="text-sm text-red-500 hover:underline"
          >
            Clear items
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="flex-1 space-y-4">
            <AnimatePresence mode="popLayout">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 flex flex-col sm:flex-row gap-6 items-center"
                >
                  <div className="relative w-32 h-32 bg-gray-50 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-green-600 text-sm font-medium mb-4">
                      In Stock
                    </p>

                    <div className="flex items-center justify-center sm:justify-start gap-4">
                      <div className="flex items-center bg-gray-100 dark:bg-zinc-800 rounded-full p-1 px-3 gap-4 border border-gray-200 dark:border-zinc-700">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1),
                            )
                          }
                          className="hover:text-orange-600 disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <FiMinus />
                        </button>
                        <span className="font-bold min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="hover:text-orange-600"
                        >
                          <FiPlus />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-400">${item.price} each</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Checkout Summary Section */}
          <div className="w-full lg:w-[350px] shrink-0">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-zinc-800 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 text-sm mb-8">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Estimated Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="pt-4 border-t border-gray-100 dark:border-zinc-800 flex justify-between items-baseline">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-3xl font-black text-orange-600">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <Button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-black py-7 rounded-2xl font-black text-xl shadow-lg shadow-yellow-200 dark:shadow-none transition-all active:scale-95 mb-4">
                Buy Now
              </Button>

              <div className="flex items-center gap-2 justify-center text-xs text-gray-400">
                <FiCheck className="text-green-500" /> Secure transaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
