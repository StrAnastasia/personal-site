import styled from '@emotion/styled';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Aifory: FC = () => {
  const { t } = useTranslation();
  return (
    <IframeWrapper>
      <iframe src='https://aifory.pro/#start' title='aifory' />
      <Loading>{t('loading')}...</Loading>
    </IframeWrapper>
  );
};

export default Aifory;

const IframeWrapper = styled.div`
  position: relative;
  height: 100%;
  background: #222;
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
