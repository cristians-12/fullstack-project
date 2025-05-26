import { create } from 'zustand'
import type { UserType } from '../../types/user/type';

type Cart = {
    hasToken: boolean
    inc?: () => void
    setNoToken: () => void;
    setHasToken: () => void;
    user: null | UserType;
    setUser: (user: UserType) => void;
}

export const userStore = create<Cart>()((set) => ({
    hasToken: false,
    user: null,
    setNoToken: () => set(() => ({ hasToken: false })),
    setHasToken: () => set(() => ({ hasToken: true })),
    setUser: (user: UserType) => set(() => ({ user })),
}))
