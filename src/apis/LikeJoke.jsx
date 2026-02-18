import http from '@/apis/http'

const likeJoke = async jokeId => {
  const res = await http.post(`/jokes/${jokeId}/like`)
  return res.data
}

export { likeJoke }
