import { create } from 'zustand'

interface AppState {
  theme: 'dark' | 'light'
  loading: boolean
  setTheme: (theme: 'dark' | 'light') => void
  setLoading: (loading: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'dark',
  loading: false,
  setTheme: (theme) => set({ theme }),
  setLoading: (loading) => set({ loading }),
}))