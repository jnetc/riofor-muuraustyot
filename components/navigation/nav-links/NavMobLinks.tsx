import { FC, MouseEvent } from 'react';
// Type
import { NavMobLinksProps } from '@Types';
// Component
import { CloseButton } from '@Components/close-button/CloseButton';

export const NavMobLinks: FC<NavMobLinksProps> = ({
  children,
  open,
  handler,
}) => {
  const clickOnLink = (event: MouseEvent<HTMLElement>) => {
    const el = event.target as HTMLElement;
    if (el.tagName !== 'A') return;
    handler(false);
  };

  const close = () => handler(false);

  return (
    <dialog
      className="modal modal-navigation"
      open={open}
      onClick={clickOnLink}
    >
      <CloseButton handler={close} />
      {children}
    </dialog>
  );
};
