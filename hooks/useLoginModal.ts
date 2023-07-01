import { create } from "zustand";

interface LoginModalStore {
    isOpen: boolean;
    onOpen: () => void;
    OnClose: () => void;
};


const useLoginModal = create<LoginModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    OnClose: () => set({ isOpen: false }),
}))

export default useLoginModal;