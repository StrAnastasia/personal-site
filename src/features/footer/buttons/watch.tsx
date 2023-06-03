import styled from '@emotion/styled';
import { FC, useEffect, useState } from 'react';

const Watch: FC = () => {
  const [today, setToday] = useState('');

  var intervalID: NodeJS.Timeout;
  async function getData() {
    const date = new Date().toISOString()?.split('T')?.[0]?.split('-');
    const time = new Date().toISOString()?.split('T')?.[1]?.slice(0, 8);
    setToday(date[2] + '.' + date[1] + '.' + date[0] + ', ' + time);
  }

  function startInterval() {
    intervalID = setInterval(getData, 1000);
  }

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalID);
  }, []);

  return <WatchDiv>{today}</WatchDiv>;
};

export default Watch;

const WatchDiv = styled.div`
  width: 190px;
`;
