import { FC, ReactChild } from 'react';

export const NavLink: FC<{ url: string; children: ReactChild }> = ({
  url,
  children,
}) => (
  <a href={url} className="nav-link">
    {children}
  </a>
);
