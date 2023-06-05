import { FC, ReactNode } from 'react';
import '../game.css';
import BlackMap from './images/MAP.png';
import styled from '@emotion/styled';

const Map: FC<{ children: ReactNode; fromTop: number; fromLeft: number }> = ({
  children,
  fromTop,
  fromLeft,
}) => {
  let pixelsize = 2;
  const mapstyle = {
    top: fromTop + 'px',
    left: fromLeft + 'px',
  };

  return (
    <MapComponent url={BlackMap.src} pixelsize={pixelsize} style={{ ...mapstyle }}>
      {children}
    </MapComponent>
  );
};

export default Map;

const MapComponent = styled.div<{
  url: string;
  pixelsize: number;
}>`
  image-rendering: pixelated;
  background-image: ${({ url }) => `url(${url})`};
  background-size: 100%;
  width: ${({ pixelsize }) => `${pixelsize * 16 * 39}px`};
  height: ${({ pixelsize }) => `${pixelsize * 10.67 * 30}px`};
  position: relative;
`;
