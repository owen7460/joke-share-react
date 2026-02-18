import http from '@/apis/http'

const LikeJoke = async jokeId => {
  const res = await http.post(`/jokes/${jokeId}/like`)
  return res.data
}

export { LikeJoke }
