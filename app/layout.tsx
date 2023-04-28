import './globals.css'
import Header from './header'
import Footer from './footer'


export const metadata = {
  title: 'The Joy Ezeh Blog',
  description: 'blog created by kenfelix',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className='h-screen w-full'>
        <div >
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
