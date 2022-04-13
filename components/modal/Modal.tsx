import { FC, ReactChild } from 'react';
// Hook
import { useModal } from '@Hooks/useModal';
import styles from './modal.module.css';
const Modal: FC<{ children: ReactChild }> = ({ children }) => {
  const { modal, openModal } = useModal();

  const openMobileMenu = () => openModal({ active: false, data: null });

  return (
    <div className={`${styles.module} ${modal.active && styles.open}`}>
      <button
        type="button"
        className="close-btn"
        aria-label="close menu button"
        onClick={openMobileMenu}
      >
        <svg viewBox="0 0 13 13">
          <path
            d="M11.2437 11.5905L1.24365 1.59048M11.2437 1.59045L1.24371 11.5905"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {children}
    </div>
  );
};
export default Modal;
