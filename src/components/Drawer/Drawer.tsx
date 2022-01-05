import { useRef, useState, useEffect, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { css } from '@emotion/css';
import ClickAwayListener from 'components/ClickAwayListener';
import styles from './Drawer.module.scss';

// function getClass(w: number)

interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  alignment?: 'right' | 'left' | 'bottom';
  onClose?: () => void;
}

export default function Drawer(props: DrawerProps) {
  const {
    open,
    alignment = 'right',
    className,
    children,
    onClose,
    ...other
  } = props;

  const rootRef = useRef<HTMLDivElement>(null);

  const [closeClasName, setCloseClassName] = useState('');

  useEffect(() => {
    const node = rootRef.current;

    if (node) {
      if (open) {
        //
      } else {
        if (alignment === 'right') {
          const w = node.clientWidth;
          setCloseClassName(
            css`
              transform: translateX(${w}px);
            `
          );
        }
      }
    }
  }, [open]);

  function closeDrawer() {
    const node = rootRef.current;

    if (node) {
      if (alignment === 'right') {
        const w = node.clientWidth;
        setCloseClassName(
          css`
            transform: translateX(${w}px);
          `
        );
      }
    }
  }

  function handleClose() {
    closeDrawer();
    if (onClose) {
      onClose();
    }
  }

  if (!open) {
    return null;
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div
        ref={rootRef}
        className={clsx(
          styles.root,
          styles[`alignment-${alignment}`],
          closeClasName,
          { [styles.open]: open },
          className
        )}
        {...other}
      >
        {children}
      </div>
    </ClickAwayListener>
  );
}
