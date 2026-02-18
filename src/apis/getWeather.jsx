import axios from 'axios'

const getWeather = async city => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=91f05e4330f6e85cab273b8b1ad8bb71&units=metric`
    )
    return res.data
  } catch (error) {
    throw new Error('Failed to fetch weather data', error)
  }
}

export { getWeather }
