import {create} from 'zustand';

export const useUserStore = create((set) => ({
    userId: null,
    userName: '',
    userEmail: '',
    setId: (id) => set({ userId:id }),
    setName: (name) => set({ userName:name }),
    setEmail: (email) => set({ userEmail:email }),
}));
