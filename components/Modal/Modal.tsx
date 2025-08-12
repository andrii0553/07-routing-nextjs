"use client";

import css from "./Modal.module.css";
import { useRouter } from "next/navigation";

// Типізація пропсів для компонента Modal
interface ModalProps {
  children: React.ReactNode;
  noteId?: string; // Додаємо необов'язковий пропс для ідентифікатора нотатки
}

const Modal = ({ children, noteId }: ModalProps) => {
  const router = useRouter();

  // Функція для закриття модального вікна
  const close = () => {
    router.back(); // Використовуємо router.back() для повернення назад
  };

  return (
    <div className={css.backdrop} onClick={close}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={css.button} onClick={close}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Modal;
