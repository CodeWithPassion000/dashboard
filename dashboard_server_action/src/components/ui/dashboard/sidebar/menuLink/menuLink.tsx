'use client';

import React from 'react';
import styles from './menuLink.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
  title: string;
  path: string;
  icon: React.JSX.Element;
}

interface MenuLink {
  item: MenuItem;
}

function MenuLink({ item }: MenuLink) {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname == item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}

export default MenuLink;
