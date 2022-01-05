import { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Menu.module.scss';

interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  vertical?: boolean;
}

export default function Menu(props: MenuProps) {
  const { children, vertical = true, className, ...other } = props;
  return (
    <ul
      className={clsx(
        styles.root,
        {
          [styles.vertical]: vertical,
        },
        className
      )}
      {...other}
    >
      {children}
    </ul>
  );
}
