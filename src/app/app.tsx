import { FC, ReactNode, useEffect } from 'react';
import Layout from 'shared/layout';
import './i18n';
import { useTranslation } from 'react-i18next';
import { Cookie, cookies } from './cookie';

interface AppLayoutProps {
  children: ReactNode;
}

export const App: FC<AppLayoutProps> = ({ children }) => {
  const { i18n } = useTranslation();

  const storedLang = cookies.get(Cookie.lang);

  useEffect(() => {
    if (!storedLang) {
      cookies.set(Cookie.lang, i18n.language);
    } else {
      i18n.changeLanguage(storedLang);
    }
  }, [storedLang, i18n.language]);

  return (
      <Layout>{children}</Layout>
  );
};
