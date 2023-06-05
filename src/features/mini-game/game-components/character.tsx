import styled from '@emotion/styled';
import '../game.css';
import { FC, ReactNode } from 'react';

const Character: FC<{
  children: ReactNode;
  fromTop: number;
  fromLeft: number;
  characterSprite: string;
}> = ({ children, fromTop, fromLeft, characterSprite }) => {
  const pixelsize = 2;

  const character = {
    top: fromTop + 'px',
    left: fromLeft + 'px',
  };

  return (
    <>
      <CharWrapper pixelsize={pixelsize}>
        <Char pixelsize={pixelsize} url={characterSprite} style={{ ...character }} />
        {children}
      </CharWrapper>
    </>
  );
};

export default Character;

const CharWrapper = styled.div<{
  pixelsize: number;
}>`
  z-index: 1;
  width: ${({ pixelsize }) => pixelsize * 30 + 'px'};
  height: ${({ pixelsize }) => pixelsize * 30 + 'px'};
  position: absolute;
`;

const Char = styled.div<{
  pixelsize: number;
  url: string;
}>`
  position: absolute;
  background-image: ${({ url }) => `url(${url})`};
  background-size: 100% 100%;
  width: ${({ pixelsize }) => `${pixelsize * 30}px`};
  height: 77px;
`;
