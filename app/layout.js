import GlobalLayout from './layout/global-layout'

import './globals.css'

export const metadata = {
  title: 'Quicktakes',
  description: 'Quicktakes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <GlobalLayout children={children} />
      </body>
    </html>
  )
}
