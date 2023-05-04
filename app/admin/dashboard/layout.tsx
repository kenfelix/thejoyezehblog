

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className='h-screen w-full'>
        <div >
          {children}
        </div>
      </body>
    </html>
  )
}
