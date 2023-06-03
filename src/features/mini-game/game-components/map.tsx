import { FC, ReactNode } from 'react';
import '../game.css';
import BlackMap from './images/MAP.png';

const Map: FC<{ children: ReactNode; fromTop: number; fromLeft: number }> = ({
  children,
  fromTop,
  fromLeft,
}) => {
  let pixelsize = 2;
  const mapstyle = {
    top: `${fromTop}px`,
    left: `${fromLeft}px`,
    imageRendering: 'pixelated',
    backgroundImage: `url(${BlackMap.src})`,
    backgroundSize: '100%',
    width: `${pixelsize * 16 * 39}px`,
    height: `${pixelsize * 10.67 * 30}px`,
    position: 'relative',
  };

      {/* @ts-ignore */}
  return <div style={{ ...mapstyle }}>{children}</div>;
};

export default Map;
