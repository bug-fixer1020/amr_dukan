'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

export default function Bestseller() {
  const bestSellerPages = [
    {
      page: 1,
      items: [
        {
          id: 1,
          src: 'https://m.media-amazon.com/images/I/61H7r44N4pL._AC_SY200_.jpg',
          name: 'Product 1',
          price: '$29.99',
        },
        {
          id: 2,
          src: 'https://m.media-amazon.com/images/I/71K+nIn+W5L._AC_SY200_.jpg',
          name: 'Product 2',
          price: '$19.99',
        },
        {
          id: 3,
          src: 'https://m.media-amazon.com/images/I/61MvS+O+xEL._AC_SY200_.jpg',
          name: 'Product 3',
          price: '$49.99',
        },
        {
          id: 4,
          src: 'https://m.media-amazon.com/images/I/51r-lM-vKJL._AC_SY200_.jpg',
          name: 'Product 4',
          price: '$34.99',
        },
        {
          id: 5,
          src: 'https://m.media-amazon.com/images/I/71X8Xw6pGXL._AC_SY200_.jpg',
          name: 'Product 5',
          price: '$12.99',
        },
        {
          id: 6,
          src: 'https://m.media-amazon.com/images/I/81I-D6uP8UL._AC_SY200_.jpg',
          name: 'Product 6',
          price: '$59.99',
        },
      ],
    },
    {
      page: 2,
      items: [
        {
          id: 7,
          src: 'https://m.media-amazon.com/images/I/61G+p8p+F+L._AC_SY200_.jpg',
          name: 'Product 7',
          price: '$89.99',
        },
        {
          id: 8,
          src: 'https://m.media-amazon.com/images/I/61ndAIdD9vL._AC_SY200_.jpg',
          name: 'Product 8',
          price: '$15.99',
        },
        {
          id: 9,
          src: 'https://m.media-amazon.com/images/I/71Yf8m+K+FL._AC_SY200_.jpg',
          name: 'Product 9',
          price: '$25.99',
        },
        {
          id: 10,
          src: 'https://m.media-amazon.com/images/I/61Z7L+K+FL._AC_SY200_.jpg',
          name: 'Product 10',
          price: '$39.99',
        },
        {
          id: 11,
          src: 'https://m.media-amazon.com/images/I/71X8Xw6pGXL._AC_SY200_.jpg',
          name: 'Product 11',
          price: '$44.99',
        },
        {
          id: 12,
          src: 'https://m.media-amazon.com/images/I/81I-D6uP8UL._AC_SY200_.jpg',
          name: 'Product 12',
          price: '$69.99',
        },
      ],
    },
  ]

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-sm shadow-sm mt-8 border border-gray-200 dark:border-zinc-800">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white">
          Best Sellers in Book
        </h2>
        <Link
          href="/bestsellers"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          Shop now
        </Link>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {bestSellerPages.map((page) => (
            <CarouselItem key={page.page}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4">
                {page.items.map((item) => (
                  <Link
                    key={item.id}
                    href={`/product/${item.id}`}
                    className="group block"
                  >
                    <Card className="border-none shadow-none bg-transparent">
                      <CardContent className="p-1 flex flex-col items-center">
                        <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-md w-full aspect-square flex items-center justify-center overflow-hidden group-hover:bg-gray-100 dark:group-hover:bg-zinc-700 transition-colors relative">
                          <Image
                            src={item.src}
                            alt={item.name}
                            fill
                            className="object-contain mix-blend-multiply dark:mix-blend-normal p-4"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700 shadow-lg h-12 w-12 rounded-l-none rounded-r-md" />
        <CarouselNext className="-right-4 bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700 shadow-lg h-12 w-12 rounded-r-none rounded-l-md" />
      </Carousel>
    </div>
  )
}
