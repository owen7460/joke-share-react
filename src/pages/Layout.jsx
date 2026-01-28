import { Outlet, NavLink } from 'react-router-dom'
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarSection,
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
      <div className="w-[75vw] h-[70vh] bg-white/10 backdrop-blur-3xl rounded-4xl shadow-2xl border border-white/50 overflow-hidden flex">
        <Sidebar className="w-72 shrink-0 border-r border-white/20 bg-white/10 backdrop-blur-md">
          <SidebarBody>
            <div></div>
            <SidebarSection className="pt-12 pl-4 space-y-2">
              <NavLink
                to="/jokes"
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 transition font-bold ${
                    isActive ? 'bg-white/40 font-semibold' : 'hover:bg-white/40'
                  }`
                }
              >
                😂 Jokes
              </NavLink>
              <NavLink
                to="/submit"
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 transition font-bold ${
                    isActive ? 'bg-white/40 font-semibold' : 'hover:bg-white/40'
                  }`
                }
              >
                📝 Submit Joke
              </NavLink>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter>
            <NavLink
              to="/weather"
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 transition font-bold ${
                  isActive ? 'bg-white/40 font-semibold' : 'hover:bg-white/40'
                }`
              }
            >
              <img
                className="w-12 h-12"
                box-shadow-lg
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt={weather.weather[0].description}
              />
              Calgary - {weather.weather[0].main} {weather.main.temp}°C
            </NavLink>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 bg-white/10 backdrop-blur-3xl p-17 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
