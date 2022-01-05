import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error';
  size?: 'small' | 'normal' | 'large';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref
) {
  const {
    children,
    className,
    disabled,
    variant = 'contained',
    color = 'primary',
    size = 'normal',
    ...rest
  } = props;

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={clsx(
        styles.root,
        {
          [styles.contained]: variant === 'contained',
          [styles.outlined]: variant === 'outlined',
          [styles.text]: variant === 'text',
          [styles.primary]: color === 'primary',
          [styles.secondary]: color === 'secondary',
          [styles.error]: color === 'error',
          [styles.small]: size === 'small',
          [styles.large]: size === 'large',
          [styles.disabled]: disabled,
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
