import http from '@/apis/http'

const submitJoke = async content => {
  const res = await http.post('/jokes', { content })
  return res.data
}

export { submitJoke }
