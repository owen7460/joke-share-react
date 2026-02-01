import { Outlet, NavLink } from 'react-router-dom'
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarSection,
  SidebarHeader,
  SidebarFooter,
} from '@/components/sidebar'
import Weather from '@/pages/Weather'
import { useState, useEffect } from 'react'
import { getWeather } from '@/apis/Weather'

function Layout() {
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    const loadWeather = async () => {
      const res = await getWeather('Calgary')
      setWeather(res)
    }
    loadWeather()
  }, [])

  if (!weather) {
    return <div>Loading...</div>
  }
  return (
    <div className="min-h-screen flex items-center justify-center  bg-linear-to-br from-amber-600 via-pink-500 to-orange-500 animated-gradient">
      <div className="w-[77vw] h-[80vh] bg-white/10 backdrop-blur-3xl rounded-4xl shadow-2xl border border-white/50 overflow-hidden flex">
        <Sidebar className="w-72 shrink-0 border-r border-white/20 bg-white/10 backdrop-blur-md">
          <SidebarHeader>
            <SidebarSection className="text-white pt-12 pl-4 space-y-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 transition font-bold ${
                    isActive
                      ? 'bg-white/40 font-semibold text-gray-700'
                      : 'hover:bg-white/40'
                  }`
                }
              >
                😂 Jokes
              </NavLink>
              <NavLink
                to="/submit"
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 transition font-bold ${
                    isActive
                      ? 'bg-white/40 font-semibold text-gray-700'
                      : 'hover:bg-white/40'
                  }`
                }
              >
                📝 Submit Joke
              </NavLink>
            </SidebarSection>
          </SidebarHeader>

          <SidebarBody>
            <SidebarSection className="text-white pl-4 space-y-2">
              <NavLink
                to="/collections"
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 transition font-bold ${isActive ? 'bg-white/40 font-semibold text-gray-700' : 'hover:bg-white/40'}`
                }
              >
                📚 Collections
              </NavLink>
            </SidebarSection>
          </SidebarBody>

          <SidebarFooter>
            <NavLink
              to="/weather"
              className="rounded-lg px-4 py-2 transition font-bold hover:bg-white/40"
            >
              {({ isActive }) => (
                <div
                  className={`flex items-center gap-3 rounded-xl py-6 p transition ${isActive ? 'bg-white/40' : ''}`}
                >
                  <img
                    className="w-12 h-12 box-shadow-lg"
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    alt={weather.weather[0].description}
                  />
                  <div className={isActive ? 'text-gray-700' : 'text-white'}>
                    <p>Calgary</p>
                    <p>
                      {weather.weather[0].main} {weather.main.temp}°C
                    </p>
                  </div>
                </div>
              )}
            </NavLink>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 bg-white/10 backdrop-blur-3xl p-26 overflow-auto mask-[linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
