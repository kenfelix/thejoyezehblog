import './globals.css'
import Header from './header'
import Footer from './footer'
import { Separator } from "@/components/ui/separator"

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
      
      <body>
        <Header/>
        <Separator />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
