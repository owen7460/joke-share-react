import { getJokes } from '@/apis/jokes'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from '@/components/description-list'
import { Button } from '@/components/button'
import { likeJoke } from '@/apis/likeJoke'
import { toast } from 'react-toastify'

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

  const handleLikeJoke = async jokeId => {
    setJokes(prev =>
      prev.map(item =>
        item.joke_id === jokeId
          ? { ...item, like_count: item.like_count + 1 }
          : item
      )
    )
    try {
      const res = await likeJoke(jokeId)
      toast.success(`${res.message} 🙈`)
    } catch (error) {
      toast.error('Joke like failed')
      setJokes(prev =>
        prev.map(item =>
          item.joke_id === jokeId
            ? { ...item, like_count: item.like_count - 1 }
            : item
        )
      )
      throw new Error('like joke error', error)
    }
  }

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
              <p className="text-black/80">
                Likes:{' '}
                <span className="text-orange-600 text-xl font-bold">
                  {item.like_count}
                </span>
              </p>
            </DescriptionTerm>
            <DescriptionDetails className="flex gap-6">
              <Button
                color="white"
                outline
                onClick={() => handleLikeJoke(item.joke_id)}
              >
                <span className="text-orange-600">Like this joke ❤️</span>
              </Button>
              <Button color="orange">Collect this joke ⭐️</Button>
            </DescriptionDetails>
          </DescriptionList>
        </div>
      ))}
    </div>
  )
}

export default Jokes
