// store/userSlice.js
import {create} from 'zustand';

export const useUserStore = create((set) => ({
    id: null,
    name: '',
    email: '',
    setId: (id) => set({ id }),
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
}));
