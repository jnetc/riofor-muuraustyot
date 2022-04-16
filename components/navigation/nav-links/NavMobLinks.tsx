import { FC, ReactChild, Dispatch, SetStateAction, MouseEvent } from 'react';

interface Props {
  children: ReactChild;
  open: boolean;
  handler: Dispatch<SetStateAction<boolean>>;
}

import { CloseButton } from '@Components/close-button/CloseButton';

export const NavMobLinks: FC<Props> = ({ children, open, handler }) => {
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
