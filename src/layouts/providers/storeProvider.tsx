import { observer } from 'mobx-react-lite';
import { ReactNode, createContext } from 'react';
import { rootStore } from '@plugins/mobx/stores';

export const StoreContext = createContext(rootStore);

export const StoreProvider = observer(
  ({ children }: { children: ReactNode }) => {
    return (
      <StoreContext.Provider value={rootStore}>
        {children}
      </StoreContext.Provider>
    );
  },
);
