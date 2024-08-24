import '@styles/style.scss';
import { ReactNode } from 'react';
import { StoreProvider } from '@layouts/providers/storeProvider.tsx';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="container">
        <h1>PET PROJECT</h1>
        <p>пет-проект</p>
      </div>

      <main>
        <StoreProvider>{children}</StoreProvider>
      </main>
    </>
  );
};

export default DefaultLayout;
