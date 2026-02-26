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

export default function HomeAndKitchenBestSeller() {
  const homeItems = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?q=80&w=600&auto=format&fit=crop',
      name: 'Bohemian Rug',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1507473884658-cda17aa8bc48?q=80&w=600&auto=format&fit=crop',
      name: 'Table Lamp',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop',
      name: 'Scented Candle',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1584622781464-111fb81fac31?q=80&w=600&auto=format&fit=crop',
      name: 'Kitchen Organizer',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600&auto=format&fit=crop',
      name: 'Decorative Pillow',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=600&auto=format&fit=crop',
      name: 'Wall Clock',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=600&auto=format&fit=crop',
      name: 'Ceramic Vase',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=600&auto=format&fit=crop',
      name: 'Potted Plant',
    },
  ]

  const chunkItems = (items, size) => {
    const chunks = []
    for (let i = 0; i < items.length; i += size) {
      chunks.push(items.slice(i, i + size))
    }
    return chunks
  }

  const pages = chunkItems(homeItems, 6)

  return (
    <div className="bg-white dark:bg-zinc-900 p-4 md:p-6 rounded-sm shadow-md mt-10 border border-gray-200 dark:border-zinc-800">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-extrabold text-black dark:text-white tracking-tight">
          Best Sellers in Home & Kitchen
        </h2>
        <Link
          href="/home-kitchen-bestsellers"
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
