import { HTMLAttributes } from 'react';
import styles from './Menu.module.scss';
import clsx from 'clsx';

interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  active: boolean;
  disabled?: boolean;
}

export default function MenuItem(props: MenuItemProps) {
  const { children, className, active, disabled, ...other } = props;
  return (
    <li
      className={clsx(
        styles.item,
        {
          [styles.active]: active,
          [styles.disabled]: disabled,
        },
        className
      )}
      {...other}
    >
      {children}
    </li>
  );
}
