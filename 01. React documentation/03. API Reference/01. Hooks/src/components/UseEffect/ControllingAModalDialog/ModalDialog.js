import { useEffect, useRef } from 'react';
import styles from './ModalDialog.module.css';

export default function ModalDialog({ isOpen, children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const dialog = ref.current;
    dialog.showModal();

    return () => {
      dialog.close();
    };
  }, [isOpen]);

  return (
    <dialog className={styles.dialog} ref={ref}>
      {children}
    </dialog>
  );
}
