import { getJokes } from '@/apis/jokes'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from '@/components/description-list'

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
    <div className="space-y-8">
      {jokes.map(item => (
        <div className="bg-white/05 backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/30 p-4">
          <DescriptionList>
            <DescriptionTerm>
              <span className="text-black/80">Joke Content</span>
            </DescriptionTerm>
            <DescriptionDetails>{item.content}</DescriptionDetails>

            <DescriptionTerm>
              <span className="text-black/80">Created At</span>
            </DescriptionTerm>
            <DescriptionDetails>
              {dayjs(item.joke_created_at).fromNow()}
            </DescriptionDetails>

            <DescriptionTerm>
              <span className="text-black/80">Likes</span>
            </DescriptionTerm>
            <DescriptionDetails>{item.like_count}</DescriptionDetails>
          </DescriptionList>
        </div>
      ))}
    </div>
  )
}

export default Jokes
