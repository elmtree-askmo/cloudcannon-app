// import mixpanel from 'mixpanel-browser'

import { Inter } from 'next/font/google'
import Header from './component/header'
import Footer from './component/footer'

// import { MIXPANEL_ID } from './global/global';

import './globals.css'
const inter = Inter({ subsets: ['latin'] })

// mixpanel.init(MIXPANEL_ID, {debug: false});

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
