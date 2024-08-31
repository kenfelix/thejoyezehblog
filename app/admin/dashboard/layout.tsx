import SideBar from "@/components/sidenav"
import AdminHeader from "./header"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className='h-screen w-full bg-white'>
        <div className="h-full w-full flex flex-row">
          {/* side bar */}
          <div className="bg-white h-full w-[5%] flex flex-col px-1 py-5 items-center">
              <SideBar/>
          </div>
          {/* main */}
          <div className="bg-gray-50 h-full w-[95%] flex flex-col p-2">
            {/* header */}
            <div className="bg-gray-50 w-full h-[10%] px-10">
              <AdminHeader/>
            </div>
            {/* content */}
            <div className="bg-white w-full h-[90%] flex flex-row gap-4 rounded-xl">
              <div className="bg-white h-full w-full rounded-xl p-6">
                {children}
              </div>
              {/* statistics */}
              <div className="w-full h-full p-6"></div>
            </div>
          </div>
          
        </div>
      </body>
    </html>
  )
}
