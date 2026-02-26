import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SaveOnAD() {
  const dummyImages = [
    {
      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY308_CB639748384_.jpg',
      alt: 'Smart Watches',
    },
    {
      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Laptops_1X._SY308_CB639748246_.jpg',
      alt: 'Laptops',
    },
    {
      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Tablets_1X._SY308_CB639748246_.jpg',
      alt: 'Tablets',
    },
    {
      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Phones_1X._SY308_CB639748246_.jpg',
      alt: 'Phones',
    },
  ]

  return (
    <div className="bg-white dark:bg-zinc-900 p-4 shadow-md w-full min-h-[400px] flex flex-col justify-between">
      <h2 className="text-xl font-bold mb-3 text-black dark:text-white">
        Limited time 40% off
      </h2>

      <div className="grid grid-cols-2 gap-3 flex-grow">
        {dummyImages.map((img, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-sm">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <span className="text-xs mt-1 text-gray-700 dark:text-gray-300 truncate">
              {img.alt}
            </span>
          </div>
        ))}
      </div>

      <Link
        href="/deals"
        className="text-blue-600 dark:text-blue-400 text-sm hover:text-orange-600 dark:hover:text-orange-400 hover:underline mt-4 inline-block"
      >
        See more deals
      </Link>
    </div>
  )
}
