import { create } from 'zustand'

const useJokesStore = create(set => ({
  jokes: [],
  setJokes: jokes => set({ jokes }),
  removeJoke: id =>
    set(state => ({ jokes: state.jokes.filter(item => item.joke_id !== id) })),
}))

export default useJokesStore
