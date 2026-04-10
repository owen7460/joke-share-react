import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useJokesStore = create(
  persist(
    set => ({
      jokes: [],
      setJokes: jokes => set({ jokes }),
      removeJoke: id =>
        set(state => ({
          jokes: state.jokes.filter(item => item.joke_id !== id),
        })),
    }),
    {
      name: 'jokes-storage',
    }
  )
)
export default useJokesStore
