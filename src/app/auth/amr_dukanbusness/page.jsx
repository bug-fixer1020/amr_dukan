'use client'

import Link from 'next/link'

export default function BusinessCreationPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800">
      {/* Header / Stepper Container */}
      <div className="border-b border-neutral-200 py-6 px-[10%]">
        <div className="flex flex-col items-center">
          <Link href="/" className="text-2xl font-bold text-blue-900 mb-6">
            amr dukan
          </Link>

          {/* Stepper */}
          <div className="flex items-center space-x-4 text-sm font-medium">
            <div className="flex items-center space-x-2 text-blue-600">
              <span className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center text-xs font-bold">
                1
              </span>
              <span>Create account</span>
            </div>
            <div className="w-12 h-[1px] bg-neutral-300"></div>
            <div className="flex items-center space-x-2 text-neutral-400">
              <span className="w-6 h-6 rounded-full border-2 border-neutral-300 flex items-center justify-center text-xs font-bold">
                2
              </span>
              <span>Business details</span>
            </div>
            <div className="w-12 h-[1px] bg-neutral-300"></div>
            <div className="flex items-center space-x-2 text-neutral-400">
              <span className="w-6 h-6 rounded-full border-2 border-neutral-300 flex items-center justify-center text-xs font-bold">
                3
              </span>
              <span>Finish</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Two Column Layout */}
      <main className="max-w-6xl mx-auto py-12 px-6 flex flex-col md:flex-row gap-16">
        {/* Left Side: Form */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-4 leading-tight">
            Let create your free Amr-dukan Business account
          </h1>
          <p className="text-sm mb-6 text-neutral-600">
            Enter an email. Work email preferred.
          </p>

          <form className="space-y-4 max-w-sm">
            <div>
              <label
                htmlFor="business-email"
                className="block text-xs font-bold mb-1"
              >
                Email
              </label>
              <input
                id="business-email"
                type="email"
                className="w-full px-3 py-2 border border-neutral-400 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Work email"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-neutral-900 font-medium py-2 rounded shadow-sm transition-all active:scale-[0.98]"
            >
              Get started
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center space-x-1">
            <span className="text-xs text-neutral-600">
              Already an Amazon Business customer?
            </span>
            <Link
              href="/auth/login"
              className="text-xs text-blue-600 hover:text-orange-600 hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>

        {/* Right Side: Benefits */}
        <div className="md:w-1/2 bg-neutral-50 p-8 rounded-xl border border-neutral-100">
          <h2 className="text-lg font-bold mb-6">
            Added value for every type of organization
          </h2>

          <div className="space-y-8">
            {/* Benefit 1 */}
            <div className="flex gap-4">
              <div className="mt-1">
                <svg
                  className="w-6 h-6 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1 uppercase tracking-tight">
                  Buy more, save more
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  From commerce to education, save on over 60 million products
                  when you buy two or more.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex gap-4">
              <div className="mt-1">
                <svg
                  className="w-6 h-6 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1 uppercase tracking-tight">
                  Connect your people
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Create groups, share payment methods, and manage supplies
                  across locations.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex gap-4">
              <div className="mt-1">
                <svg
                  className="w-6 h-6 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1 uppercase tracking-tight text-blue-700">
                  Get fast, FREE shipping with Business Prime
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Just one Business Prime membership covers unlimited free
                  shipping on eligible orders for your entire organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-neutral-200 py-8 text-center text-xs text-neutral-500">
        <div className="space-x-4 mb-2">
          <Link href="#" className="hover:text-blue-600 underline">
            Conditions of Use
          </Link>
          <Link href="#" className="hover:text-blue-600 underline">
            Privacy Notice
          </Link>
          <Link href="#" className="hover:text-blue-600 underline">
            Help
          </Link>
        </div>
        <p>© 2026, Amr dukan, Inc. or its affiliates</p>
      </footer>
    </div>
  )
}
