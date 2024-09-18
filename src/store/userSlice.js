// store/userSlice.js
import {create} from 'zustand';

export const useUserStore = create((set) => ({
    userid: null,
    username: '',
    useremail: '',
    setId: (id) => set({ id }),
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
}));
