"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Headings from '@/Headings'
import Footer from '@/Footer'
import Menu from '@/Menu'
import "bootstrap/dist/css/bootstrap.css"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Headings/>
        <Menu/>
        {children} 
        <Footer/>
        </body>
      
        
    </html>
  )
}
