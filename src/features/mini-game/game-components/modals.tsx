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

  return (
    <>
      <Modal visibility={visibleOrNot.modalvis} url={bubble5.src} pixelsize={pixelsize}>
        <Text>
          {t('MiniGameFinOne')}
          <br />
          {t('MiniGameFinTwo')}
        </Text>
        <ButtonDiv>
          <Button url={buttonpng.src} onClick={reset}>
            <ButtonText>{t('MiniGameStartAgain')}</ButtonText>
          </Button>
        </ButtonDiv>
      </Modal>
    </>
  );
};

export default Modals;

const ButtonText = styled.div`
  color: white;
  width: 100%;
  text-align: center;
`;

const Modal = styled.div<{
  visibility: string;
  url: string;
  pixelsize: number;
}>`
  visibility: ${({ visibility }) => visibility};
  background-image: ${({ url }) => `url(${url})`};
  width: ${({ pixelsize }) => `${pixelsize * 150}px`};
  height: ${({ pixelsize }) => `${pixelsize * 108}px`};
  z-index: 3;
  background-size: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 46px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.div`
  font-weight: bolder;
  font-size: 18px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: end;
`;

const Button = styled.div<{
  url: string;
}>`
  width: 150px;
  height: 40px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: 100% 100%;
  padding: 4px 8px;
  display: flex;
  align-items: center;
`;
