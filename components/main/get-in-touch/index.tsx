import { createPortal } from 'react-dom';
// Hook
import { useStore } from '@Hooks/useStore';
import { useModal } from '@Hooks/useModal';
// Style
import styles from './getintouch.module.css';
// Component
import { CloseButton } from '@Components/close-button/CloseButton';

export const GetInTouch = () => {
  const { data } = useStore();
  const {
    modal: { active },
    openModal,
  } = useModal();

  const close = () => openModal({ active: false });
  return active
    ? createPortal(
        <dialog className={`modal ${styles.module}`} open={active}>
          <CloseButton handler={close} />
          Opened
        </dialog>,
        document.getElementById('portal-contact') as HTMLDivElement
      )
    : null;
};
