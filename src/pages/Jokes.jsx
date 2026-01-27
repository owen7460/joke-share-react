import { getJokes } from '@/apis/jokes'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

const Jokes = () => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    const loadJokes = async () => {
      try {
        const res = await getJokes()
        setJokes(res)
      } catch (error) {
        console.log(error)
        throw new Error('fetch channel error')
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
            <span>
              {dayjs(item.joke_created_at).format('MMM D, YYYY HH:mm')}
            </span>{' '}
            --
            <span>like count: {item.like_count}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Jokes
