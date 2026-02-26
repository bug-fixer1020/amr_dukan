import HeroSection from './(AllPages)/herosection/page'
import Categoryshowcase1 from './(LandingpageCard)/Categoryshowcase1/Categoryshowcase1'
import Categoryshowcase2 from './(LandingpageCard)/Categoryshowcase2/Categoryshowcase2'
import ComputerBestseller from './(AllPages)/herosection/Bestseller/ComputerBestseller'
import BookBestSeller from './(AllPages)/herosection/Bestseller/BookBestSeller'
import KitchenBestSeller from './(AllPages)/herosection/Bestseller/KitchenBestSeller'
import BeautyBestSeller from './(AllPages)/herosection/Bestseller/BeautyBestSeller'
import ClothingBestSeller from './(AllPages)/herosection/Bestseller/ClothingBestSeller'
import HomeAndKitchenBestSeller from './(AllPages)/herosection/Bestseller/HomeAndKitchenBestSeller'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-zinc-950">
      <main className="max-w-[1500px] mx-auto px-4 md:px-10 py-4 md:py-8 space-y-12">
        <HeroSection />
        <Categoryshowcase1 />
        <ComputerBestseller />
        <KitchenBestSeller />
        <BeautyBestSeller />
        <ClothingBestSeller />

        <BookBestSeller />
        <Categoryshowcase2 />
        <HomeAndKitchenBestSeller />

        {/* Amr Dukan Business CTA */}
        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Make your business more productive
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Save more and do more with a free Amr Dokan Business account.
            </p>
          </div>
          <Link href="/UserCreation/amrdukanbussiness">
            <Button className="bg-[#ffd814] hover:bg-[#f7ca00] text-black font-medium border border-[#a88734] px-6">
              Register a free business account
            </Button>
          </Link>
        </div>

        {/* Personalized Recommendations Section */}
        <div className="flex items-center justify-center flex-col py-10 border-t border-gray-200 dark:border-zinc-800 mt-10">
          <p className="text-lg font-bold text-black dark:text-white mb-3">
            See personalized recommendations
          </p>
          <Link href="/UserCreation/login" className="w-full max-w-sm">
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-black w-full font-medium"
              variant="default"
            >
              Sign in
            </Button>
          </Link>
          <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">
            New customer?{' '}
            <Link
              href="/UserCreation/login"
              className="text-blue-600 hover:text-orange-600 hover:underline"
            >
              Start here.
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
