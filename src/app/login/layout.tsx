import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Login - App Salão',
}

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen items-center justify-center bg-black-700 text-white-400">
      {children}
    </div>
  )
}
