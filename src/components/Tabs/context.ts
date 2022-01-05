import { createContext } from 'react';
import type { TabValue } from './types';

interface ITabsContext {
  value: TabValue | undefined;
  setValue: (value: TabValue) => void;
}

export const TabsContext = createContext<ITabsContext>({
  value: undefined,
  setValue: () => undefined,
});
