import CarouselSection from './Bestseller/(HeroCursol)/CarouselSection'

export default function HeroSection() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">
        Featured Products
      </h1>
      <CarouselSection />
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md border border-blue-100 dark:border-blue-800 text-sm md:text-base text-foreground"></div>
    </div>
  )
}
