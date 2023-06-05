import { FC } from 'react';
import '../game.css';
import bubble2 from './images/bubble_2.png';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

const MmAndSong: FC<{
  chooseaction: () => void;
  visibleOrNot: { [a: string]: string };
  mirmorestate: string;
}> = ({ chooseaction, visibleOrNot, mirmorestate }) => {
  const { t } = useTranslation();
  const pixelsize = 2;

  const backgroundcrowdplacetop = 210;
  const backgroundcrowdplaceleft = 850;

  return (
    <>
      <Bubble
        visibility={visibleOrNot.vissneg}
        url={bubble2.src}
        pixelsize={pixelsize}
        top={backgroundcrowdplacetop}
        left={backgroundcrowdplaceleft}
      >
        <div>{t('MiniGameSongOne')}</div>
      </Bubble>
      <Crowd
        pixelsize={pixelsize}
        url={mirmorestate}
        top={backgroundcrowdplacetop}
        left={backgroundcrowdplaceleft}
        onClick={chooseaction}
      ></Crowd>
    </>
  );
};

export default MmAndSong;

const Bubble = styled.div<{
  visibility: string;
  url: string;
  pixelsize: number;
  top: number;
  left: number;
}>`
  transform: rotate(180deg);
  z-index: 2;
  background-size: 100% 100%;
  visibility: ${({ visibility }) => visibility};
  background-image: ${({ url }) => `url(${url})`};
  position: absolute;
  width: ${({ pixelsize }) => `${pixelsize * 60}px`};
  height: ${({ pixelsize }) => `${pixelsize * 46}px`};
  top: ${({ top }) => `${top - 90}px`};
  left: ${({ left }) => `${left + 90}px`};
  padding: 20px 10px 10px 10px;
  > div {
    transform: rotate(180deg);
  }
`;

const Crowd = styled.div<{
  pixelsize: number;
  url: string;
  top: number;
  left: number;
}>`
  position: absolute;
  width: ${({ pixelsize }) => `${pixelsize * 118}px`};
  height: ${({ pixelsize }) => `${pixelsize * 66}px`};
  background-image: ${({ url }) => `url(${url})`};
  background-size: 100%;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
`;
