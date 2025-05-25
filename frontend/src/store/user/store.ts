import { create } from 'zustand'

type User = {
    hasToken: boolean
    inc?: () => void
    setNoToken: () => void;
    setHasToken: () => void;
}

export const userStore = create<User>()((set) => ({
    hasToken: false,
    setNoToken: () => set((state) => ({ hasToken: false })),
    setHasToken: () => set((state) => ({ hasToken: true}))
}))
