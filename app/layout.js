import { Inter } from 'next/font/google'
import './globals.css'
import Header from './component/header'
import Footer from './component/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quicktakes',
  description: 'Quicktakes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
