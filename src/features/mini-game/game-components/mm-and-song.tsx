import { FC } from 'react';
import '../game.css';
import bubble1 from './images/bubble_1.png';

const MmAndSong: FC<{
  chooseaction: () => void;
  visibleOrNot: { [a: string]: string };
  mirmorestate: string;
}> = ({ chooseaction, visibleOrNot, mirmorestate }) => {
  const pixelsize = 2;

  const backgroundcrowdplacetop = 210;
  const backgroundcrowdplaceleft = 850;

  const crowdstyle = {
    position: 'absolute',
    width: `${pixelsize * 118}px`,
    height: `${pixelsize * 66}px`,
    top: `${backgroundcrowdplacetop}px`,
    left: `${backgroundcrowdplaceleft}px`,
    backgroundImage: `url(${mirmorestate})`,
    backgroundSize: '100%',
  };
  const bubble1style = {
    zIndex: '2',
    backgroundSize: '100%',
    visibility: `${visibleOrNot.vissneg}`,
    backgroundImage: `url(${bubble1.src})`,
    position: 'absolute',
    width: `${pixelsize * 60}px`,
    height: `${pixelsize * 36}px`,
    top: `${backgroundcrowdplacetop - 70}px`,
    left: `${backgroundcrowdplaceleft + 90}px`,
    fontSize: '12px',
  };

  return (
    <>
      {/* @ts-ignore */}
      <div style={bubble1style}></div>
      {/* @ts-ignore */}
      <div className='crowd' style={crowdstyle} onClick={chooseaction}></div>
    </>
  );
};

export default MmAndSong;
