import { FC } from 'react';
import '../game.css';
import bubble5 from './images/pixil-frame-0.png';
import buttonpng from './images/button.png';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

const Modals: FC<{
  visibleOrNot: { [a: string]: string };
  reset: () => void;
}> = ({ visibleOrNot, reset }) => {
  const { t } = useTranslation();
  let pixelsize = 2;

  const modalstyle = {
    visibility: `${visibleOrNot.modalvis}`,
    zIndex: '3',
    backgroundSize: '100%',
    backgroundImage: `url(${bubble5.src})`,
    position: 'fixed',
    width: `${pixelsize * 150}px`,
    height: `${pixelsize * 108}px`,
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    padding: '46px 16px 16px 16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  return (
    <>
      {/* @ts-ignore */}
      <div style={{ ...modalstyle }}>
        <div
          style={{
            fontWeight: 'bolder',
            fontFamily: 'var(--bs-font-sans-serif)',
            fontSize: '18px',
          }}
        >
          {t('MiniGameFinOne')}
          <br />
          {t('MiniGameFinTwo')}
        </div>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <div
            onClick={reset}
            style={{
              width: '150px',
              height: '40px',
              backgroundImage: `url(${buttonpng.src})`,
              backgroundSize: '100% 100%',
              padding: '4px 8px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ButtonText>{t('MiniGameStartAgain')}</ButtonText>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;

const ButtonText = styled.div`
  color: white;
  width: 100%;
  text-align: center;
`;
