'use client'

import { useState } from 'react'
import { createSupabaseBrowser } from '@/lib/supabase/browser'
import { BarChart2 } from 'lucide-react'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)

  async function handleGoogleLogin() {
    setLoading(true)
    const supabase = createSupabaseBrowser()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
      },
    })
  }

  return (
    <div className="flex h-screen bg-slate-950">
      {/* Left panel — animated gradient mesh */}
      <div className="hidden lg:flex lg:w-2/3 relative overflow-hidden items-center justify-center">
        {/* Animated blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl animate-blob-1" />
          <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-violet-600/25 blur-3xl animate-blob-2" />
          <div className="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-blob-3" />
          <div className="absolute bottom-1/3 right-1/3 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl animate-blob-1" style={{ animationDelay: '2s' }} />
        </div>

        {/* Brand overlay */}
        <div className="relative z-10 text-center px-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BarChart2 className="h-12 w-12 text-indigo-400" />
            <h1 className="text-4xl font-bold text-white">Marketing Dashboard</h1>
          </div>
          <p className="text-lg text-slate-300 max-w-md mx-auto">
            Unified analytics for your marketing stack — GA4, Search Console, Semrush, and more.
          </p>
        </div>
      </div>

      {/* Right panel — sign-in form */}
      <div className="w-full lg:w-1/3 flex items-center justify-center p-8 bg-slate-900 border-l border-slate-800">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <BarChart2 className="h-8 w-8 text-indigo-400" />
            <span className="text-xl font-bold text-white">Marketing Dashboard</span>
          </div>

          <h2 className="text-2xl font-semibold text-white mb-2">Sign in</h2>
          <p className="text-slate-400 mb-8">to continue to your dashboard</p>

          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 rounded-lg border border-slate-700 bg-white px-4 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <GoogleIcon />
            {loading ? 'Redirecting...' : 'Continue with Google'}
          </button>

          <p className="mt-8 text-xs text-slate-500 text-center">
            Only authorized team members can access this dashboard.
          </p>
        </div>
      </div>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
        fill="#34A853"
      />
      <path
        d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
        fill="#EA4335"
      />
    </svg>
  )
}
