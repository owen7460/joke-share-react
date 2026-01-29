import { useState, useEffect } from 'react'
import { getWeather } from '@/apis/Weather'

function Weather() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const loadWeather = async () => {
      const res = await getWeather('Calgary')
      setWeather(res)
      // console.log(res)
    }
    loadWeather()
  }, [])

  if (!weather) {
    return (
      <>
        <div className="flex justify-center items-center min-h-full">
          <p className="animate-pulse text-white text-2xl">Loading...</p>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="flex justify-center items-center gap-14 min-h-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-9xl text-white font-bold">{weather.name}</h1>
          <div className="flex items-center gap-4">
            <img
              className="w-20 mr-auto h-20"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
            />
            <p className="text-white text-2xl">{weather.weather[0].main}</p>
            <p className="text-white text-2xl font-thin">
              {weather.weather[0].description}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-white text-2xl">
            Temperature: {weather.main.temp}°C
          </p>
          <p className="text-white text-2xl">
            Temperature max: {weather.main.temp_max}°C
          </p>
          <p className="text-white text-2xl">
            Temperature min: {weather.main.temp_min}°C
          </p>
          <p className="text-white text-2xl">
            Humidity: {weather.main.humidity}%
          </p>
          <p className="text-white text-2xl">
            Feels like: {weather.main.feels_like}°C
          </p>
        </div>

        <div className="flex flex-col gap-2"></div>
      </div>
    </>
  )
}

export default Weather
