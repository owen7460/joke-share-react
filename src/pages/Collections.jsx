import useJokesStore from '@/stores/jokesStore'
import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDetails,
} from '@/components/description-list'
import { Button } from '@/components/button'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { toast } from 'react-toastify'

dayjs.extend(relativeTime)

function Collections() {
  const jokes = useJokesStore(state => state.jokes)
  const removeJoke = useJokesStore(state => state.removeJoke)

  if (jokes.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-full">
        <p className="animate-pulse text-white text-2xl">
          No jokes collected yet 🤣
        </p>
      </div>
    )
  }

  const handleRemoveJoke = id => {
    removeJoke(id)

    toast.success(`the joke has been removed`)
  }

  return (
    <>
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
                {' '}
                <Button onClick={() => handleRemoveJoke(item.joke_id)}>
                  Remove this joke
                </Button>
              </DescriptionDetails>
            </DescriptionList>
          </div>
        ))}
      </div>
    </>
  )
}

export default Collections
