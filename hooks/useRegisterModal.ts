import { create } from "zustand";

interface RegisterModalStore {
    isOpen: boolean;
    onOpen: () => void;
    OnClose: () => void;
};


const useRegisterModal = create<RegisterModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    OnClose: () => set({ isOpen: false }),
}))

export default useRegisterModal;