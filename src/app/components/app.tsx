import { FC, ReactNode } from 'react';
import Layout from 'shared/layout';

interface AppLayoutProps {
  children: ReactNode;
}

export const App: FC<AppLayoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};
