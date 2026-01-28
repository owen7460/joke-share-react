import { Outlet, NavLink } from 'react-router-dom'
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarSection,
} from '@/components/sidebar'

function Layout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-500 via-pink-500 to-orange-500">
      <div className="w-[75vw] h-[70vh] bg-white/10 backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/30 overflow-hidden flex">
        <Sidebar className="w-72 shrink-0 border-r border-white/20 bg-white/10 backdrop-blur-md">
          <SidebarBody>
            <SidebarSection className="pt-12 pl-4 space-y-2">
              <NavLink
                to="/jokes"
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 transition ${
                    isActive ? 'bg-white/80 font-semibold' : 'hover:bg-white/40'
                  }`
                }
              >
                😂 Jokes
              </NavLink>
              <NavLink
                to="/submit"
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 transition ${
                    isActive ? 'bg-white/80 font-semibold' : 'hover:bg-white/40'
                  }`
                }
              >
                📝 Submit Joke
              </NavLink>
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
        <main className="flex-1 bg-white/10 backdrop-blur-md p-17 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
