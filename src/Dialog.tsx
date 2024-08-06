import { ReactNode, useRef } from 'react';
import styles from './dialog.module.scss';

type ModalProps = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  anchor?: 'top' | 'right' | 'bottom' | 'left';
  allowClosing?: boolean;
};
export const Dialog = ({
  children,
  open,
  onClose,
  anchor = 'bottom',
  allowClosing = true,
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  if (!dialogRef.current?.open && open) {
    openModal();
  }

  if (dialogRef.current?.open && !open) {
    closeModal();
  }

  return (
    <dialog
      className={styles.dialog}
      ref={dialogRef}
      data-anchor={anchor}
      onClose={onClose}
      onCancel={(event) => !allowClosing && event.preventDefault()}
    >
      <button type='button' onClick={closeModal} className={styles.close}>
        x
      </button>

      {children}
    </dialog>
  );
};
