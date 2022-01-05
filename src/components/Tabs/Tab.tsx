import { useContext, MouseEvent } from 'react';
import clsx from 'clsx';

import { TabsContext } from './context';
import type { TabValue } from './types';
import styles from './Tabs.module.scss';

interface TabProps extends CommonProps {
  label: string;
  value: TabValue;
}

export default function Tab(props: TabProps) {
  const { value, label, className, onClick, ...other } = props;

  const ctx = useContext(TabsContext);

  function handleTabClick(e: MouseEvent<HTMLDivElement>) {
    ctx.setValue(value);
    if (onClick) onClick(e);
  }

  return (
    <div
      className={clsx(
        styles.tab,
        { [styles.active]: ctx.value === value },
        className
      )}
      onClick={handleTabClick}
      {...other}
    >
      <span className={styles.tab_label}>{label}</span>
    </div>
  );
}
