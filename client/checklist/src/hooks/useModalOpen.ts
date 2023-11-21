import { useState } from "react";

export function useModalOpen() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }

    return{
        handleOpenModal,
        isModalOpen,
    }
}

