import { FC } from 'react';

export const CloseButton: FC<{ handler: () => void }> = ({ handler }) => {
  return (
    <button
      type="button"
      className="close-btn"
      aria-label="close menu button"
      onClick={handler}
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
  );
};
