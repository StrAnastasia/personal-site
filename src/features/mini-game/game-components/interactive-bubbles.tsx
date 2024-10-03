import { FC } from 'react';
import '../game.css';
import Pers1 from './images/SPRITESHEET_1.png';
import mirmore from './images/mirmore.png';
import bubble2 from './images/bubble_2.png';
import bubble4 from './images/bubble_4.png';
import perspet from './images/SPRITESHEET_1_pet.png';
import mirmoreput from './images/mirmore_put.png';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { StaticImageData } from 'next/image';

const InteractiveBubbles: FC<{
  setSprite: (a: StaticImageData) => void;
  setmirmorestate: (a: StaticImageData) => void;
  setPolicemanState: (a: number) => void;
  fromTop: number;
  fromLeft: number;
  visibleOrNot: { [a: string]: string };
  hideAllOrNot: (a?: string[]) => void;
  canClick: boolean;
}> = ({
  setSprite,
  setmirmorestate,
  setPolicemanState,
  fromTop,
  fromLeft,
  hideAllOrNot,
  visibleOrNot,
  canClick,
}) => {
  const { t } = useTranslation();
  const pixelsize = 2;

  function mayvisible() {
    if (!canClick) return;
    if (visibleOrNot.vismay === '') {
      hideAllOrNot();
    } else {
      hideAllOrNot(['vismay']);
    }
  }

  function moneyfunc() {
    if (!canClick) return;
    if (visibleOrNot.moneyvis === '') {
      setSprite(Pers1);
      setmirmorestate(mirmore);
      hideAllOrNot(['vissneg']);
    } else {
      hideAllOrNot(['moneyvis']);
    }
  }

  function pivkofunc() {
    if (!canClick) return;
    setSprite(perspet);
    setmirmorestate(mirmoreput);
    hideAllOrNot();

    setPolicemanState(fromLeft - 100);
    setTimeout(() => {
      modalfunc();
    }, 2000);
  }

  function modalfunc() {
    hideAllOrNot(['modalvis']);
  }

  return (
    <>
      <InMay
        pixelsize={pixelsize}
        top={fromTop}
        left={fromLeft}
        visibility={visibleOrNot.vismay}
        url={bubble4.src}
      >
        <div>{t('MiniGameSongTwo')}</div>
      </InMay>
      <BubbleWrapper top={fromTop} left={fromLeft}>
        <BubbleOne pixelsize={pixelsize} url={bubble2.src} visibility={visibleOrNot.vis}>
          <div onClick={moneyfunc}>{t('MiniGameOptOne')}</div>
          <div onClick={mayvisible}>{t('MiniGameOptTwo')}</div>
        </BubbleOne>
        <BubbleTwo visibility={visibleOrNot.visili} url={bubble4.src}>
          <div>{t('MiniGameOptThree')}</div>
        </BubbleTwo>
        <BubbleThree
          visibility={visibleOrNot.vispivo}
          url={bubble2.src}
          pixelsize={pixelsize}
          onClick={pivkofunc}
        >
          {t('MiniGameOptFour')}
        </BubbleThree>
      </BubbleWrapper>
    </>
  );
};

export default InteractiveBubbles;

const InMay = styled.div<{
  pixelsize: number;
  url: string;
  visibility: string;
  top: number;
  left: number;
}>`
  transform: rotate(180deg);
  background-size: 100% 100%;
  width: ${({ pixelsize }) => `${pixelsize * 100}px`};
  height: ${({ pixelsize }) => `${pixelsize * 35}px`};
  position: absolute;
  visibility: ${({ visibility }) => visibility};
  background-image: ${({ url }) => `url(${url})`};
  top: ${({ top }) => `${top - 75}px`};
  left: ${({ left }) => `${left - 70}px`};
  padding: 30px 50px;
  > div {
    transform: rotate(180deg);
  }
`;

const BubbleWrapper = styled.div<{
  top: number;
  left: number;
}>`
  font-size: 12px;
  position: absolute;
  top: ${({ top }) => `${top + 80}px`};
  left: ${({ left }) => `${left - 30}px`};
`;

const BubbleOne = styled.div<{
  visibility: string;
  url: string;
  pixelsize: number;
}>`
  visibility: ${({ visibility }) => visibility};
  background-image: ${({ url }) => `url(${url})`};
  width: ${({ pixelsize }) => `${pixelsize * 60}px`};
  height: ${({ pixelsize }) => `${pixelsize * 47}px`};
  background-size: 100% 100%;
  z-index: 2;
  font-weight: bolder;
  padding: 24px 0px 20px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const BubbleTwo = styled.div<{
  visibility: string;
  url: string;
}>`
  z-index: 3;
  position: absolute;
  visibility: ${({ visibility }) => visibility};
  background-image: ${({ url }) => `url(${url})`};
  font-size: 10px;
  top: 11vh;
  left: -2.8vw;
  font-weight: bolder;
  background-size: 100% 100%;
  height: 60px;
  width: 170px;
  padding: 20px 10px 10px 68px;
  display: flex;
  align-items: center;
`;

const BubbleThree = styled.div<{
  visibility: string;
  url: string;
  pixelsize: number;
}>`
  z-index: 4;
  position: absolute;
  visibility: ${({ visibility }) => visibility};
  background-image: ${({ url }) => `url(${url})`};
  top: 18vh;
  left: 0vw;
  font-weight: bolder;
  background-size: 100% 100%;
  width: ${({ pixelsize }) => `${pixelsize * 60}px`};
  height: ${({ pixelsize }) => `${pixelsize * 50}px`};
  padding: 10px 10px 10px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
