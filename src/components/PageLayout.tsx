
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-white">
      <div className="pt-28 md:pt-32 pb-16">
        {children}
      </div>
    </div>
  );
};
