import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className='navbar'>All the countries in the world</nav>
        {children}
        </body>
    </html>
  )
}
