import styled from '@emotion/styled';
import { FC } from 'react';

const Attex: FC = () => {
  return (
    <IframeWrapper>
      <iframe src='https://attex.io/welcome' title='attex' />
      <Loading>Загрузка...</Loading>
    </IframeWrapper>
  );
};

export default Attex;

const IframeWrapper = styled.div`
  position: relative;
  height: 100%;
  background: #4e7a7a;
  > iframe {
    border: none;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 15;
  }
`;

const Loading = styled.p`
  color: white;
  margin: 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
