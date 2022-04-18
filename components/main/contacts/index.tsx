import { createPortal } from 'react-dom';
// Hook
import { useStore } from '@Hooks/useStore';
import { useContacts } from '@Hooks/useContacts';
import { useHideScrollbar } from '@Hooks/useHideScrollbar';
// Style
import styles from './contacts.module.css';
// Component
import { CloseButton } from '@Components/close-button/CloseButton';

export const Contacts = () => {
  const { data } = useStore();
  const {
    contacts: { active },
    openContacts,
  } = useContacts();

  useHideScrollbar(active);

  const close = () => openContacts({ active: false });
  return active
    ? createPortal(
        <dialog className={`modal ${styles.module}`} open={active}>
          <CloseButton handler={close} />
          Opened
        </dialog>,
        document.getElementById('portal-contacts') as HTMLDivElement
      )
    : null;
};
