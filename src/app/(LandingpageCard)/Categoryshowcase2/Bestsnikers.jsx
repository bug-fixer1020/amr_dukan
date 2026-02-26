import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Bestsnikers = () => {
  const sneakers = [
    {
      id: 1,
      image: 'https://m.media-amazon.com/images/I/71oEKm7O8mL._AC_SY575_.jpg',
      link: '/shop/sneakers/1',
    },
    {
      id: 2,
      image: 'https://m.media-amazon.com/images/I/71z78bIsi3L._AC_SY575_.jpg',
      link: '/shop/sneakers/2',
    },
    {
      id: 3,
      image: 'https://m.media-amazon.com/images/I/81+Xk+v+K+L._AC_SY575_.jpg',
      link: '/shop/sneakers/3',
    },
    {
      id: 4,
      image: 'https://m.media-amazon.com/images/I/71Yf8m+K+FL._AC_SY200_.jpg',
      link: '/shop/sneakers/4',
    },
  ]

  return (
    <div className="bg-white dark:bg-zinc-900 p-4 shadow-md w-full min-h-[400px] flex flex-col justify-center">
      <h2 className="text-xl font-bold mb-3 text-black dark:text-white">
        Choosi from Best
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {sneakers.map((sneaker) => (
          <Link
            key={sneaker.id}
            href={sneaker.link}
            className="relative aspect-square overflow-hidden bg-gray-100 rounded-sm group"
          >
            <Image
              src={sneaker.image}
              alt="Sneaker"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Bestsnikers
