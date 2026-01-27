import http from '@/apis/http'

const getJokes = async () => {
  const res = await http.get('/jokes')
  return res.data
}

export { getJokes }
