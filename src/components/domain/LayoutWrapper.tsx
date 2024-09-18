'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <div
      className={`flex h-[calc(100vh_-_72px)] flex-col justify-evenly ${pathname !== '/proyects' ? 'items-center' : ''}`}
    >
      {children}
    </div>
  );
};

export default LayoutWrapper;
