import { forwardRef } from 'react';
import Input from 'components/Input';
import styles from './TextField.module.scss';
import clsx from 'clsx';

const TextField = forwardRef(function TextField(props, ref) {
  const {
    label,
    placeholder,
    value,
    className,
    helperText,
    error,
    inputProps,
    onChange,
    ...otherTextFieldProps
  } = props;

  const { className: inputClassName, ...otherInputProps } = inputProps;

  return (
    <div
      ref={ref}
      className={clsx(styles.root, { [styles.error]: error }, className)}
      {...otherTextFieldProps}
    >
      <span className={styles.label}>{label}</span>
      <Input
        value={value}
        className={clsx(styles.input, inputClassName)}
        placeholder={placeholder}
        onChange={onChange}
        {...otherInputProps}
      />
      <span className={styles.helper}>{helperText}</span>
    </div>
  );
});

export default TextField;
