import { createElement, forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';
import { HTMLAttributes } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref
) {
  const { className, ...other } = props;

  return createElement('input', {
    ref,
    className: clsx(styles.root, className),
    ...other,
  });
});

export default Input;
