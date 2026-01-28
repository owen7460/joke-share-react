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
        <div
          key={item.joke_id}
          className="bg-white/05 backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/30 p-4"
        >
          <DescriptionList>
            <DescriptionTerm>
              <span className="text-black/80">Joke Content</span>
            </DescriptionTerm>
            <DescriptionDetails className="text-lg">
              {item.content.includes('?') ? (
                <div className="space-y-2">
                  <p className=" text-white/80 font-semibold">
                    {item.content.split('?')[0]}?
                  </p>
                  <p className="text-white/80">
                    -- {item.content.split('?')[1].trim()}
                  </p>
                </div>
              ) : (
                <p>{item.content}</p>
              )}
            </DescriptionDetails>

            <DescriptionTerm>
              <span className="text-black/80">Created At</span>
            </DescriptionTerm>
            <DescriptionDetails>
              <p className="text-white/80">
                {dayjs(item.joke_created_at).fromNow()}
              </p>
            </DescriptionDetails>

            <DescriptionTerm>
              <span className="text-black/80">Likes</span>
            </DescriptionTerm>
            <DescriptionDetails>
              <p className="text-white/80">{item.like_count}</p>
            </DescriptionDetails>
          </DescriptionList>
        </div>
      ))}
    </div>
  )
}

export default Jokes
