'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        toast.error('Invalid credentials')
      } else {
        toast.success('Signed in successfully')
        router.push('/')
        router.refresh()
      }
    } catch (error) {
      toast.error('An error occurred during sign in')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-8 pb-12">
      {/* Logo */}
      <Link href="/">
        <div className="text-3xl font-bold mb-6 text-black">
          Amr <span className="text-orange-500">Dokan</span>
        </div>
      </Link>

      {/* Login Card */}
      <div className="w-full max-w-[350px] border border-gray-300 rounded-lg p-6 flex flex-col">
        <h1 className="text-[28px] font-normal mb-4 text-black">Sign in</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-black" htmlFor="email">
              Email or mobile phone number
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-700 rounded-sm py-1 px-2 focus:ring-1 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all text-black"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <label
                className="text-sm font-bold text-black"
                htmlFor="password"
              >
                Password
              </label>
              <Link
                href="#"
                className="text-xs text-blue-600 hover:text-orange-600 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-700 rounded-sm py-1 px-2 focus:ring-1 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all text-black"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-b from-[#f7dfa1] to-[#f0c14b] border border-[#a88734] hover:from-[#f5d78e] hover:to-[#eeb933] py-1.5 rounded-sm shadow-sm text-sm text-black font-normal mt-2 active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <p className="text-xs text-black mt-4 leading-relaxed">
          By continuing, you agree to Amr Dokan's{' '}
          <Link
            href="#"
            className="text-blue-600 hover:text-orange-600 hover:underline"
          >
            Conditions of Use
          </Link>{' '}
          and{' '}
          <Link
            href="#"
            className="text-blue-600 hover:text-orange-600 hover:underline"
          >
            Privacy Notice
          </Link>
          .
        </p>

        <div className="mt-6 border-t border-gray-200 pt-3">
          <Link
            href="#"
            className="text-xs text-blue-600 hover:text-orange-600 hover:underline flex items-center gap-1 group"
          >
            <span className="text-gray-400 group-hover:text-orange-600">▶</span>{' '}
            Need help?
          </Link>
        </div>
      </div>

      {/* New to Section */}
      <div className="w-full max-w-[350px] mt-6">
        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-xs">
            New to Amr Dokan?
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <Link
          href="/UserCreation/amrdukanbussiness"
          className="w-full block text-center bg-linear-to-b from-[#f7f8fa] to-[#e7e9ec] border border-[#adb1b8] hover:bg-gradient-to-b hover:from-[#e7e9ec] hover:to-[#d8dadd] py-1.5 rounded-sm shadow-sm text-sm text-black font-normal active:scale-[0.98] transition-all"
        >
          Amr Dokan business
        </Link>
      </div>

      {/* Footer Links */}
      <div className="mt-12 w-full max-w-[600px] border-t border-gray-100 pt-4 flex flex-col items-center">
        <div className="flex gap-6 text-[11px] text-blue-600 mb-2">
          <Link href="#" className="hover:text-orange-600 hover:underline">
            Conditions of Use
          </Link>
          <Link href="#" className="hover:text-orange-600 hover:underline">
            Privacy Notice
          </Link>
          <Link href="#" className="hover:text-orange-600 hover:underline">
            Help
          </Link>
        </div>
        <p className="text-[11px] text-gray-500">
          © 2021-2024, AmrDokan.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  )
}
