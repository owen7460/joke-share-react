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
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="flex justify-center items-center gap-24 min-h-full">
        <div>
          <h1 className="text-5xl text-white font-bold">{weather.name}</h1>
          <img
            className="w-20 mx-auto h-20"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
          />
          <p className="text-white text-2xl">{weather.weather[0].main}</p>
          <p className="text-white">{weather.weather[0].description}</p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-white">Temperature: {weather.main.temp}°C</p>
          <p className="text-white">
            Temperature max: {weather.main.temp_max}°C
          </p>
          <p className="text-white">
            Temperature min: {weather.main.temp_min}°C
          </p>
          <p className="text-white">Humidity: {weather.main.humidity}%</p>
          <p className="text-white">Feels like: {weather.main.feels_like}°C</p>
        </div>

        <div className="flex flex-col gap-2"></div>
      </div>
    </>
  )
}

export default Weather
