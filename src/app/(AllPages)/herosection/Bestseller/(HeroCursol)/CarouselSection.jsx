'use client'
import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

export default function CarouselSection() {
  return (
    <Carousel className="w-full mx-auto px-2 sm:px-0">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="border-none shadow-none">
                <CardContent className="flex aspect-[3/1] md:aspect-[4/1] items-center justify-center p-2 md:p-4 bg-neutral-200 dark:bg-neutral-800 rounded-xl">
                  <span className="text-xl md:text-3xl font-semibold text-neutral-500 dark:text-neutral-400">
                    Banner {index + 1}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex left-4" />
      <CarouselNext className="hidden md:flex right-4" />
    </Carousel>
  )
}
