import { ReactNode } from 'react';

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className='container min-h-[100vh] flex-1 w-full max-w-screen-xl mx-auto space-y-4 p-2 sm:p-4 md:p-6'>
      {children}
    </div>
  );
};
