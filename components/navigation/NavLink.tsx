import { FC, ReactChild } from 'react';
import Link from 'next/link';

export const NavLink: FC<{ url: string; children: ReactChild }> = ({
  url,
  children,
}) => {
  return (
    <Link href={url}>
      <a className="nav-link">{children}</a>
    </Link>
  );
};
