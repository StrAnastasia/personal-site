import { FC } from 'react';
import '../game.css';
import policeman from './images/policeman.png';
import styled from '@emotion/styled';

const MisterPoliceman: FC<{ policemanState: number; fromTop: number }> = ({
  policemanState,
  fromTop,
}) => {
  const pixelsize = 2;

  return (
    <PoliceMan
      url={policeman.src}
      pixelsize={pixelsize}
      top={fromTop}
      left={policemanState}
    ></PoliceMan>
  );
};

export default MisterPoliceman;

const PoliceMan = styled.div<{
  url: string;
  pixelsize: number;
  top: number;
  left: number;
}>`
  position: absolute;
  background-image: ${({ url }) => `url(${url})`};
  width: ${({ pixelsize }) => `${pixelsize * 30}px`};
  height: 77px;
  background-size: 100%;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
`;
