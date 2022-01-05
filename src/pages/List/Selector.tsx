import styles from './List.module.scss';
import { ChangeEvent } from 'react';
import { DataType } from 'store/list/types';

interface SelectorProps {
  onChange: (value: DataType) => void;
}

export default function Selector(props: SelectorProps) {
  const { onChange } = props;

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    onChange(value as DataType);
  }

  return (
    <div className={styles.selector}>
      <select
        className="form-select"
        aria-label="Default select example"
        id="select"
        defaultValue={''}
        onChange={handleChange}
      >
        <option value="">Choose what you need?</option>
        <option value="posts">Get POSTS</option>
        <option value="users">Get Users</option>
      </select>
    </div>
  );
}
