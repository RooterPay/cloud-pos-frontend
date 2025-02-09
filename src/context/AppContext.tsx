'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocalStorage } from 'react-use';
import { Store } from '../../types';

interface AppContextProps {
  stores: Store[];
  activeStore: Store | undefined;
  setStoreId: (storeId: string) => void;
  clear: () => void;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const testShops = [
    {
      id: '123',
      name: 'Shop 1',
      location: 'Valletta',
    },
    {
      id: '456',
      name: 'Shop 2',
      location: 'St. Julians',
    },
  ];
  const [stores, setStores] = useState<Store[]>(testShops);
  const [activeStore, setActiveStore] = useState<Store>();
  const [storeId, setStoreId, clear] = useLocalStorage('storeId', '');

  useEffect(() => {
    if (storeId) {
      setActiveStore(stores.find((store) => storeId === store.id));
    } else {
      setActiveStore(undefined);
    }
  }, [storeId]);

  const values = useMemo(
    () => ({
      stores,
      activeStore,
      setStoreId,
      clear,
    }),
    [stores, activeStore]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppContext');
  }
  return context;
};
