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

export default function BeautyBestSeller() {
  const beautyItems = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=600&auto=format&fit=crop',
      name: 'Skincare Serum',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop',
      name: 'Cosmetics Set',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=600&auto=format&fit=crop',
      name: 'Face Cream',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1612817288484-fe561469079a?q=80&w=600&auto=format&fit=crop',
      name: 'Lipstick collection',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=600&auto=format&fit=crop',
      name: 'Perfume',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1590439474864-3da726ffed45?q=80&w=600&auto=format&fit=crop',
      name: 'Hair Care Brush',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=600&auto=format&fit=crop',
      name: 'Face Mask',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1611082231241-7051a83307ec?q=80&w=600&auto=format&fit=crop',
      name: 'Eye Shadow Palette',
    },
  ]

  const chunkItems = (items, size) => {
    const chunks = []
    for (let i = 0; i < items.length; i += size) {
      chunks.push(items.slice(i, i + size))
    }
    return chunks
  }

  const pages = chunkItems(beautyItems, 6)

  return (
    <div className="bg-white dark:bg-zinc-900 p-4 md:p-6 rounded-sm shadow-md mt-10 border border-gray-200 dark:border-zinc-800">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-extrabold text-black dark:text-white tracking-tight">
          Best Sellers in Beauty & Personal Care
        </h2>
        <Link
          href="/beauty-bestsellers"
          className="text-blue-600 dark:text-blue-400 hover:text-orange-600 dark:hover:text-orange-400 font-medium text-sm transition-colors"
        >
          See all deals
        </Link>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {pages.map((pageItems, pageIdx) => (
            <CarouselItem key={pageIdx}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 px-1">
                {pageItems.map((item) => (
                  <Link
                    key={item.id}
                    href={`/product/${item.id}`}
                    className="group block overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative aspect-square w-full bg-neutral-50 dark:bg-zinc-800 flex items-center justify-center">
                      <Image
                        src={item.src}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 p-0"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                  </Link>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-2 bg-white/90 dark:bg-zinc-800/90 border-gray-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-700 shadow-xl h-14 w-10 text-black dark:text-white rounded-none rounded-r-lg" />
        <CarouselNext className="hidden md:flex -right-2 bg-white/90 dark:bg-zinc-800/90 border-gray-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-700 shadow-xl h-14 w-10 text-black dark:text-white rounded-none rounded-l-lg" />
      </Carousel>
    </div>
  )
}
