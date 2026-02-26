'use client'

import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function BusinessSignupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      {/* Header with Logo */}
      <div className="mb-8 text-center">
        <Link href="/">
          <h1 className="text-3xl font-bold text-black">
            Amr <span className="text-orange-500">Dokan</span>{' '}
            <span className="text-blue-600">Business</span>
          </h1>
        </Link>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side: Value Proposition */}
        <div className="flex flex-col gap-6 py-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Reshape the way you buy for work
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Business-only pricing</h3>
                <p className="text-gray-600">
                  Unlock discounts on over 50 million items and get price breaks
                  on multi-unit purchases.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Fast, FREE shipping</h3>
                <p className="text-gray-600">
                  Get FREE shipping on millions of eligible items for your
                  business.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Flexible payment options</h3>
                <p className="text-gray-600">
                  Buy now and pay later with convenient credit and purchasing
                  cards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Signup Form */}
        <Card className="shadow-lg border-gray-200">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold">
              Create your free business account
            </CardTitle>
            <CardDescription>
              Free for a limited time. No hidden fees.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <div className="space-y-1">
                <label className="text-sm font-bold" htmlFor="businessEmail">
                  Your work email
                </label>
                <input
                  type="email"
                  id="businessEmail"
                  placeholder="name@company.com"
                  className="w-full border border-gray-400 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold" htmlFor="fullName">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full border border-gray-400 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold" htmlFor="password">
                  Create a password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="At least 6 characters"
                  className="w-full border border-gray-400 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <Button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-black font-medium py-6 text-lg mt-2">
                Continue
              </Button>
            </form>

            <div className="mt-6 text-center text-xs text-gray-500 border-t pt-4">
              By creating a business account, you agree to the{' '}
              <Link href="#" className="underline hover:text-blue-600">
                Amr Dokan Business Terms and Conditions
              </Link>
              .
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm">
                Already have a business account?{' '}
                <Link
                  href="/UserCreation/login"
                  className="text-blue-600 hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="mt-20 max-w-4xl w-full border-t pt-8 text-center text-sm text-gray-500">
        <div className="flex justify-center gap-8 mb-4">
          <Link href="#" className="hover:underline">
            Conditions of Use
          </Link>
          <Link href="#" className="hover:underline">
            Privacy Notice
          </Link>
          <Link href="#" className="hover:underline">
            Help
          </Link>
        </div>
        <p>© 1996–2024, AmrDokan.com, Inc. or its affiliates</p>
      </footer>
    </div>
  )
}
