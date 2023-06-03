import store from 'features/store';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import Layout from 'shared/layout';

interface AppLayoutProps {
  children: ReactNode;
}

export const App: FC<AppLayoutProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <Layout>{children}</Layout>
    </Provider>
  );
};
