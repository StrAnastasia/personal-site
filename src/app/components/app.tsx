import { FC, ReactNode } from 'react';
import '../config';

interface AppLayoutProps {
  children: ReactNode;
}

export const App: FC<AppLayoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Layout: FC<AppLayoutProps> = ({ children }) => <span>{children}</span>;
