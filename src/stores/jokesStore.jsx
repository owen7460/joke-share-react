import { create } from 'zustand'

const useJokesStore = create(set => ({
  jokes: [],
  setJokes: jokes => set({ jokes }),
}))

export default useJokesStore
