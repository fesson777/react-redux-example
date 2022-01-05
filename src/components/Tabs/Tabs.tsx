import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

import type { TabValue } from './types';
import { TabsContext } from './context';
import styles from './Tabs.module.scss';

interface TabsProps extends Omit<CommonProps, 'onChange'> {
  vertical?: boolean;
  value?: TabValue;
  defaultValue?: TabValue;
  onChange: (value: TabValue) => void;
}

export default function Tab(props: TabsProps) {
  const { children, vertical = false, value, defaultValue, onChange } = props;

  const initValue = useRef(value || defaultValue);

  const [currentValue, setCurrentValue] = useState<TabValue | undefined>(
    initValue.current
  );

  useEffect(() => {
    if (value && value !== currentValue) {
      setCurrentValue(value);
    }
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (currentValue && currentValue !== value) {
      onChange(currentValue);
    }
  }, [currentValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <TabsContext.Provider
      value={{ value: currentValue, setValue: setCurrentValue }}
    >
      <div className={clsx(styles.root, { [styles.vertical]: vertical })}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}
