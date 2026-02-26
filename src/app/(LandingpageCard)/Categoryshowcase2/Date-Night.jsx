import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const DateNight = () => {
  const looks = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1516715094483-75da7dee9758?auto=format&fit=crop&q=80&w=800',
      link: '/shop/date-night/dinner',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=800',
      link: '/shop/date-night/stroll',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
      link: '/shop/date-night/movie',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800',
      link: '/shop/date-night/dance',
    },
  ]

  return (
    <div className="bg-white dark:bg-zinc-900 p-4 shadow-md w-full min-h-[400px] flex flex-col justify-center">
      <h2 className="text-xl font-bold mb-3 text-black dark:text-white">
        Day-Night
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {looks.map((look) => (
          <Link
            key={look.id}
            href={look.link}
            className="relative aspect-square overflow-hidden bg-gray-100 rounded-sm group"
          >
            <Image
              src={look.image}
              alt="Date Night Look"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DateNight
