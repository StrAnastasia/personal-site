import styled from '@emotion/styled';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Exnode: FC = () => {
  const { t } = useTranslation();
  return (
    <IframeWrapper>
      <iframe src='https://exnode.ru/' title='exnode' />
      <Loading>{t('loading')}...</Loading>{' '}
    </IframeWrapper>
  );
};

export default Exnode;

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
