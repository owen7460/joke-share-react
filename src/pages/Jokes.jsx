import { getJokes } from '@/apis/jokes'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const Jokes = () => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    const loadJokes = async () => {
      try {
        const res = await getJokes()
        setJokes(res)
      } catch (error) {
        throw new Error('fetch channel error', error)
      }
    }
    loadJokes()
  }, [])

  return (
    <>
      <h2>Jokes</h2>
      <ul>
        {jokes.map(item => (
          <li key={item.joke_id}>
            {item.content} --{' '}
            <span>{dayjs(item.joke_created_at).fromNow()}</span> --
            <span>like count: {item.like_count}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Jokes
