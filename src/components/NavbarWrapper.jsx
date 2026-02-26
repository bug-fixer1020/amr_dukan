'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/app/navbar/page'

export default function NavbarWrapper() {
  const pathname = usePathname()

  // Define routes where you want to HIDE the navbar
  const hideNavbarRoutes = [
    '/UserCreation/login',
    '/UserCreation/amrdukanbussiness',
  ]

  // Check if current path starts with any of the restricted routes
  const shouldHide = hideNavbarRoutes.some((route) =>
    pathname.startsWith(route),
  )

  if (shouldHide) {
    return null
  }

  return <Navbar />
}
