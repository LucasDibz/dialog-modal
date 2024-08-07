import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
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

  const isOpen = dialogRef.current?.open;

  console.log({ open, isOpen });

  if (!isOpen && open) {
    console.log('Open');
    dialogRef.current?.showModal();
  }

  const closeModal = () => {
    if (!allowClosing) {
      console.log('Closing modal blocked');
      return;
    }

    console.log('Close modal');
    dialogRef.current?.close();
    onClose();
  };

  return createPortal(
    <dialog
      className={styles.dialog}
      ref={dialogRef}
      onClick={(event) => event.currentTarget === event.target && closeModal()}
      onCancel={(e) => (allowClosing ? closeModal() : e.preventDefault())}
      data-anchor={anchor}
    >
      <button
        type='button'
        onClick={closeModal}
        className={styles.close}
        disabled={!allowClosing}
        aria-disabled={!allowClosing}
      >
        x
      </button>

      {children}
    </dialog>,
    document.body,
  );
};
