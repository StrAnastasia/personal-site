import { FC } from 'react';
import '../game.css';
import Pers1 from './images/SPRITESHEET_1.png';
import mirmore from './images/mirmore.png';
import bubble2 from './images/bubble_2.png';
import bubble3 from './images/bubble_3.png';
import bubble4 from './images/bubble_4.png';
import perspet from './images/SPRITESHEET_1_pet.png';
import mirmoreput from './images/mirmore_put.png';
import { useTranslation } from 'react-i18next';

const InteractiveBubbles: FC<{
  setSprite: any;
  setmirmorestate: any;
  setPolicemanState: any;
  fromTop: number;
  fromLeft: number;
  visibleOrNot: { [a: string]: string };
  hideAllOrNot: (a?: string[]) => void;
}> = ({
  setSprite,
  setmirmorestate,
  setPolicemanState,
  fromTop,
  fromLeft,
  hideAllOrNot,
  visibleOrNot,
}) => {
  const { t } = useTranslation();
  const pixelsize = 2;

  const bubble2style = {
    backgroundSize: '100% 100%',
    backgroundImage: `url(${bubble2.src})`,
    visibility: `${visibleOrNot.vis}`,
    position: 'absolute',
    width: `${pixelsize * 60}px`,
    height: `${pixelsize * 47}px`,
    top: `${fromTop + 80}px`,
    left: `${fromLeft - 30}px`,
    fontSize: '12px',
  };

  const maystyle = {
    backgroundSize: '100% 100%',
    width: `${pixelsize * 60}px`,
    height: `${pixelsize * 35}px`,
    top: `${fromTop - 70}px`,
    left: `${fromLeft - 100}px`,
    position: 'absolute',
    visibility: `${visibleOrNot.vismay}`,
    backgroundImage: `url(${bubble3.src})`,
  };

  function mayvisible() {
    if (visibleOrNot.vismay === '') {
      hideAllOrNot();
    } else {
      hideAllOrNot(['vismay']);
    }
  }

  function moneyfunc() {
    if (visibleOrNot.moneyvis === '') {
      setSprite(Pers1);
      setmirmorestate(mirmore);
      hideAllOrNot(['vissneg']);
    } else {
      hideAllOrNot(['moneyvis']);
    }
  }

  function pivkofunc() {
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
      {/* @ts-ignore */}
      <div style={{ ...maystyle }}></div>
      {/* @ts-ignore */}
      <div style={{ ...bubble2style }}>
        <div
          style={{
            zIndex: '2',
            fontWeight: 'bolder',
            fontFamily: 'var(--bs-font-sans-serif)',
            height: '100%',
            padding: '20px 0px 20px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div onClick={moneyfunc}>{t('MiniGameOptOne')}</div>
          <div onClick={mayvisible}>{t('MiniGameOptTwo')}</div>
        </div>
        <div
          style={{
            zIndex: '3',
            position: 'absolute',
            // @ts-ignore
            visibility: `${visibleOrNot.visili}`,
            fontSize: '10px',
            top: '11vh',
            left: '-2.8vw',
            fontWeight: 'bolder',
            fontFamily: 'var(--bs-font-sans-serif)',
            backgroundImage: `url(${bubble4.src})`,
            backgroundSize: '100% 100%',
            height: '60px',
            width: '170px',
            padding: '20px 10px 10px 68px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{}}>
            <div>{t('MiniGameOptThree')}</div>
          </div>
        </div>
        <div
          onClick={pivkofunc}
          style={{
            zIndex: '4',
            position: 'absolute',
            // @ts-ignore
            visibility: `${visibleOrNot.vispivo}`,
            top: '18vh',
            left: '0vw',
            fontWeight: 'bolder',
            fontFamily: 'var(--bs-font-sans-serif)',
            backgroundImage: `url(${bubble2.src})`,
            backgroundSize: '100%',
            width: `${pixelsize * 60}px`,
            height: `${pixelsize * 50}px`,
            padding: '14px 10px 10px 20px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {t('MiniGameOptFour')}
        </div>
      </div>
    </>
  );
};

export default InteractiveBubbles;
