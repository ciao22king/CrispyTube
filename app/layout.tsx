import type { Metadata } from 'next'
import './globals.css'
import { MaterialWebLoader } from '@/components/material-web-loader'

export const metadata: Metadata = { title: 'CrispyTube — Watch something worth sharing', description: 'A fresh home for videos you actually want to watch.' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0" rel="stylesheet" /></head><body><MaterialWebLoader />{children}</body></html>
}
