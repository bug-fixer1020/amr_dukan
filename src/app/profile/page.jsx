import React from 'react'
import { auth } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import {
  FiUser,
  FiPackage,
  FiHeart,
  FiSettings,
  FiLogOut,
  FiArrowRight,
  FiMapPin,
  FiCreditCard,
  FiShield,
  FiMessageSquare,
  FiGift,
  FiSmile,
} from 'react-icons/fi'
import { Button } from '@/components/ui/button'

export default async function ProfilePage() {
  const session = await auth()

  // Mock data for demonstration purposes
  const demoUser = {
    name: 'Demo User',
    email: 'demo@example.com',
    image: null,
  }

  const user = session?.user || demoUser
  const isDemo = !session

  const mockOrders = [
    {
      id: 'ORD-99827',
      name: 'Echo Dot (5th Gen)',
      date: 'February 24, 2026',
      status: 'Delivered',
      price: '$49.99',
      image: 'https://m.media-amazon.com/images/I/71YfO7TUPRL._AC_SL1500_.jpg',
    },
    {
      id: 'ORD-99712',
      name: 'Kindle Paperwhite',
      date: 'February 18, 2026',
      status: 'In Transit',
      price: '$139.00',
      image: 'https://m.media-amazon.com/images/I/51QCcl88V6L._AC_SL1000_.jpg',
    },
  ]

  const dashboardCards = [
    {
      title: 'Your Orders',
      desc: 'Track, return, or buy things again',
      icon: <FiPackage />,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      title: 'Login & Security',
      desc: 'Edit login, name, and mobile number',
      icon: <FiShield />,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      title: 'Your Addresses',
      desc: 'Edit addresses for orders and gifts',
      icon: <FiMapPin />,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
    },
    {
      title: 'Payment Options',
      desc: 'Edit or add payment methods',
      icon: <FiCreditCard />,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      title: 'Your Wishlist',
      desc: "Items you're saving for later",
      icon: <FiHeart />,
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
    {
      title: 'Customer Service',
      desc: 'Contact us via chat or phone',
      icon: <FiMessageSquare />,
      color: 'text-teal-600',
      bg: 'bg-teal-50',
    },
    {
      title: 'Gift Cards',
      desc: 'View balance or redeem a card',
      icon: <FiGift />,
      color: 'text-pink-600',
      bg: 'bg-pink-50',
    },
    {
      title: 'Your Profiles',
      desc: 'Manage kids, household, and more',
      icon: <FiSmile />,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-zinc-950 py-12 px-4 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-orange-600 hover:underline">
            Your Account
          </Link>
          <span>›</span>
          <span className="text-orange-700 font-bold">Account Dashboard</span>
        </div>

        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 dark:border-zinc-800 relative overflow-hidden">
            {isDemo && (
              <div className="absolute top-4 right-4 bg-orange-100 text-orange-700 text-[10px] font-black uppercase px-2 py-1 rounded-full z-10">
                Preview Mode
              </div>
            )}

            <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-orange-100 dark:ring-zinc-800 shadow-xl bg-gray-100 shrink-0">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gradient-to-br from-gray-50 to-gray-200">
                  <FiUser size={64} />
                </div>
              )}
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-1">
                {user.name}
              </h1>
              <p className="text-gray-500 mb-6 flex items-center justify-center md:justify-start gap-2 italic">
                {user.email}{' '}
                {isDemo && (
                  <span className="text-xs bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded italic">
                    Demo Data
                  </span>
                )}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Button className="bg-[#ffd814] hover:bg-[#f7ca00] text-black rounded-xl px-8 font-bold shadow-sm h-11 border border-[#fcd200]">
                  Edit Profile
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl px-8 border-gray-200 dark:border-zinc-700 h-11 font-bold"
                >
                  Privacy Settings
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#232f3e] to-[#131921] p-8 rounded-2xl text-white shadow-xl flex flex-col justify-between border border-zinc-800">
            <div>
              <h3 className="text-2xl font-black mb-1">
                Amr Dokan <span className="text-orange-400">Prime</span>
              </h3>
              <p className="text-zinc-400 text-sm mb-4">
                You have saved{' '}
                <span className="text-white font-bold">$124.00</span> this year
                with Prime shipping.
              </p>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold h-12 w-full">
              Manage Membership
            </Button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {dashboardCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1 relative overflow-hidden"
            >
              <div
                className={`p-4 ${card.bg} dark:bg-zinc-800/50 rounded-2xl ${card.color} w-fit mb-4 text-2xl group-hover:scale-110 transition-transform`}
              >
                {card.icon}
              </div>
              <h3 className="text-lg font-black mb-1 group-hover:text-orange-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-snug">{card.desc}</p>
              <div className="mt-4 flex items-center text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Manage now <FiArrowRight className="ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Recent Orders Section */}
        <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black tracking-tight">
              Recent Orders
            </h2>
            <Link
              href="#"
              className="text-sm font-bold text-blue-600 hover:text-orange-600 hover:underline"
            >
              View All Orders
            </Link>
          </div>

          <div className="space-y-4">
            {mockOrders.map((order, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-[#fcfcfc] dark:bg-zinc-800/30 border border-gray-50 dark:border-zinc-800 hover:border-orange-200 transition-colors"
              >
                <div className="w-24 h-24 bg-white rounded-xl border border-gray-100 overflow-hidden relative p-2 shrink-0">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="font-bold text-lg mb-1">{order.name}</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">
                    {order.id}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                    <span>Ordered: {order.date}</span>
                    <span
                      className={`px-2 py-0.5 rounded ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
                <div className="text-right flex flex-col items-center md:items-end gap-2">
                  <span className="text-xl font-black">{order.price}</span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-lg h-9 font-bold"
                    >
                      Track
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#ffd814] hover:bg-[#f7ca00] text-black h-9 border border-[#fcd200] font-bold"
                    >
                      Buy Again
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
          <button className="flex items-center gap-2 text-red-500 font-black hover:bg-red-50 dark:hover:bg-red-900/20 px-8 py-4 rounded-2xl transition-all active:scale-95">
            <FiLogOut size={20} /> Sign Out of Your Account
          </button>
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">
            © Amr Dokan Shopping App 2026
          </p>
        </div>
      </div>
    </div>
  )
}
