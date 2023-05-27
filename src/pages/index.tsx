import type { NextPage } from 'next';
import Head from 'next/head';

const Welcome: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Перевести криптовалюту из одной страны в другую без комиссии - ATTEX.IO
        </title>
      </Head>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Welcome;
