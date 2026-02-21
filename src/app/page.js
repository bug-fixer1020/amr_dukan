import Image from 'next/image'
import Navbar from './navbar/page'
import HeroSection from './(AllPages)/herosection/page'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mx-[150px] items-center justify-center">
        <HeroSection />
      </div>
    </div>
  )
}
