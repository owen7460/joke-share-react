import { Outlet, NavLink } from 'react-router-dom'
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarSection,
} from '@/components/sidebar'
import Weather from '@/pages/Weather'

function Layout() {
  return (
    <div className="min-h-screen flex items-center justify-center  bg-linear-to-br from-amber-600 via-pink-500 to-orange-500 animated-gradient">
      <div className="w-[75vw] h-[70vh] bg-white/10 backdrop-blur-3xl rounded-4xl shadow-2xl border border-white/50 overflow-hidden flex">
        <Sidebar className="w-72 shrink-0 border-r border-white/20 bg-white/10 backdrop-blur-md">
          <SidebarBody>
            <SidebarSection className="pt-12 pl-4 space-y-2">
              <NavLink
                to="/jokes"
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 transition font-bold ${
                    isActive ? 'bg-white/80 font-semibold' : 'hover:bg-white/40'
                  }`
                }
              >
                😂 Jokes
              </NavLink>
              <NavLink
                to="/submit"
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 transition font-bold ${
                    isActive ? 'bg-white/80 font-semibold' : 'hover:bg-white/40'
                  }`
                }
              >
                📝 Submit Joke
              </NavLink>
              <NavLink
                to="/weather"
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 transition font-bold ${
                    isActive ? 'bg-white/80 font-semibold' : 'hover:bg-white/40'
                  }`
                }
              >
                🌤 Weather
              </NavLink>
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
        <main className="flex-1 bg-white/10 backdrop-blur-3xl p-17 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
