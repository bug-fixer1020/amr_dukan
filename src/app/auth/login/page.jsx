'use client'

import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center py-8 px-4 font-sans text-neutral-800">
      {/* Brand Logo / Title */}
      <Link href="/" className="group">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-6 transition-transform group-hover:scale-105 duration-300">
          amr dokan
        </h1>
      </Link>

      {/* Main Form Card */}
      <div className="w-full max-w-[360px] bg-white border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-neutral-900">
          Sign In
        </h2>
        <p className="text-sm font-medium mb-1">Sign in or create account</p>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="auth-input"
              className="block text-xs font-bold mb-1 ml-0.5"
            >
              Enter mobile number or email
            </label>
            <input
              id="auth-input"
              type="text"
              className="w-full px-3 py-2 border border-neutral-400 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder:text-neutral-400"
              placeholder="Email or phone number"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 text-neutral-900 font-medium py-2 rounded shadow-sm hover:shadow active:scale-[0.98] transition-all cursor-pointer"
          >
            Continue
          </button>
        </form>

        <p className="mt-4 text-xs leading-relaxed text-neutral-600">
          By continuing, you agree to Amr dokan
          <Link
            href="#"
            className="text-blue-600 hover:text-amber-600 hover:underline mx-1"
          >
            Condition of Use
          </Link>{' '}
          and{' '}
          <Link
            href="#"
            className="text-blue-600 hover:text-amber-600 hover:underline ml-1"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <div className="mt-6 flex items-center space-x-1 group cursor-pointer w-fit">
          <svg
            className="w-2.5 h-2.5 text-neutral-400 group-hover:rotate-90 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-xs text-blue-600 hover:text-amber-600 hover:underline">
            Need Help?
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-[360px] flex items-center my-6">
        <hr className="flex-grow border-neutral-200" />
        <span className="px-3 text-xs text-neutral-400 bg-neutral-50">
          New to Amr dokan?
        </span>
        <hr className="flex-grow border-neutral-200" />
      </div>

      {/* Business Account Button */}
      <div className="w-full max-w-[360px]">
        <Link
          href="/auth/amr_dukanbusness"
          className="w-full flex justify-center items-center bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 py-2 rounded text-sm font-medium shadow-sm transition-all hover:border-neutral-400 active:scale-[0.98]"
        >
          Create a free business account
        </Link>
      </div>

      {/* Footer Info */}
      <div className="mt-8 text-xs text-neutral-500 space-x-4">
        <Link href="#" className="hover:text-amber-600 hover:underline">
          Conditions of Use
        </Link>
        <Link href="#" className="hover:text-amber-600 hover:underline">
          Privacy Notice
        </Link>
        <Link href="#" className="hover:text-amber-600 hover:underline">
          Help
        </Link>
      </div>
      <p className="mt-3 text-[10px] text-neutral-400">
        © 2026, Amr dokan, Inc. or its affiliates
      </p>
    </div>
  )
}
