import { FC } from 'react';
import '../game.css';
import policeman from './images/policeman.png';

const MisterPoliceman: FC<{ policemanState: any; fromTop: number }> = ({
  policemanState,
  fromTop,
}) => {
  const pixelsize = 2;

  const policemanStyle = {
    position: 'absolute',
    backgroundImage: `url(${policeman.src})`,
    backgroundSize: '100%',
    width: `${pixelsize * 30}px`,
    height: `77px`,
    top: `${fromTop}px`,
    left: `${policemanState}px`,
  };

  {/* @ts-ignore */}
  return <div className='character_spritesheet pixel-art' style={policemanStyle}></div>;
};

export default MisterPoliceman;
