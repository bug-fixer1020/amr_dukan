import React from 'react'
import Image from 'next/image'

const Shopbop = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 p-4 shadow-md w-full min-h-[400px] flex flex-col justify-between">
      <h2 className="text-xl font-bold mb-3 text-black dark:text-white">
        Shop now on Shopbop
      </h2>
      <div className="relative flex-grow aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm mb-4">
        <Image
          src="https://m.media-amazon.com/images/I/419+9u6+P6L._AC_SY200_.jpg"
          alt="Shopbop"
          fill
          className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
      <a
        href="#"
        className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
      >
        Shop the collection
      </a>
    </div>
  )
}

export default Shopbop
