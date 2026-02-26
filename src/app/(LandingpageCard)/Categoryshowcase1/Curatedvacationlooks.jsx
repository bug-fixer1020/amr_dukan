import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Curatedvacationlooks() {
  const vacationItems = [
    {
      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DASH/Fuji_Dash_Spring2_1X._SY308_CB622037721_.jpg',
      alt: 'Dresses',
    },
    {
      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DASH/Fuji_Dash_Spring3_1X._SY308_CB622037721_.jpg',
      alt: 'Knits',
    },
    {
      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DASH/Fuji_Dash_Spring4_1X._SY308_CB622037721_.jpg',
      alt: 'Jackets',
    },
    {
      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DASH/Fuji_Dash_Spring1_1X._SY308_CB622037721_.jpg',
      alt: 'Jewelry',
    },
  ]

  return (
    <div className="bg-white dark:bg-zinc-900 p-4 shadow-md w-full min-h-[400px] flex flex-col justify-between">
      <h2 className="text-xl font-bold mb-3 text-black dark:text-white">
        Curated vacation looks
      </h2>

      <div className="grid grid-cols-2 gap-3 flex-grow">
        {vacationItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-sm">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <span className="text-xs mt-1 text-gray-700 dark:text-gray-300 truncate">
              {item.alt}
            </span>
          </div>
        ))}
      </div>

      <Link
        href="/fashion"
        className="text-blue-600 dark:text-blue-400 text-sm hover:text-orange-600 dark:hover:text-orange-400 hover:underline mt-4 inline-block"
      >
        Shop more
      </Link>
    </div>
  )
}
