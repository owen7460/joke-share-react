import { Outlet } from 'react-router-dom'
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarSection,
} from '@/components/sidebar'

function Layout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-500 via-pink-500 to-orange-500">
      <div className="w-[75vw] h-[70vh] bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 overflow-hidden flex">
        <Sidebar className="w-72 shrink-0 border-r border-white/20 bg-white/10 backdrop-blur-md">
          <SidebarBody>
            <SidebarSection className="pt-12 pl-4">
              <SidebarItem href="/jokes">😂 Jokes</SidebarItem>
              <SidebarItem href="/submit">📝 Submit Joke</SidebarItem>
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
        <main className="flex-1 bg-white/10 backdrop-blur-md p-22 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
