import { create } from "zustand";

interface EditModalStore {
    isOpen: boolean;
    onOpen: () => void;
    OnClose: () => void;
};


const useEditModal = create<EditModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    OnClose: () => set({ isOpen: false }),
}))

export default useEditModal;