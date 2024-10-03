import styled from '@emotion/styled';
import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Exnode: FC = () => {
  const { t } = useTranslation();
  return (
    <IframeWrapper>
      <div>
        <div>
          <Link replace href='https://exnode.ru' target='_blank'>
            exnode.ru
          </Link>
        </div>
      </div>
      {/* <iframe src='https://exnode.ru' title='exnode' /> */}
      {/* <Loading>{t('loading')}...</Loading> */}
    </IframeWrapper>
  );
};

export default Exnode;

const IframeWrapper = styled.div`
  position: relative;
  height: 100%;
  background: white;
  /* background: #2d74ff; */
  > div {
    border: none;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 15;
    /* color: #2d74ff; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div > div {
    background: white;
    padding: 16px;
    border-radius: 4px;
    cursor: pointer;
    a {
      color: #2d74ff;
    }
  }

  > div > div:hover {
    background: #d8e5ff;
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
