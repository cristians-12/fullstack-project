import { create } from 'zustand'
import type { UserType } from '../../types/user/type';

type User = {
    hasToken: boolean
    inc?: () => void
    setNoToken: () => void;
    setHasToken: () => void;
    user: null | UserType;
    setUser: (user: UserType) => void;
}

export const userStore = create<User>()((set) => ({
    hasToken: false,
    user: null,
    setNoToken: () => set(() => ({ hasToken: false })),
    setHasToken: () => set(() => ({ hasToken: true })),
    setUser: (user: UserType) => set(() => ({ user })),
}))
