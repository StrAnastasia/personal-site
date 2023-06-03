import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AnyOtherPage: NextPage = () => {
  const { push } = useRouter();
  useEffect(() => {
    push('/');
  }, []);
  return <></>;
};

export default AnyOtherPage;
