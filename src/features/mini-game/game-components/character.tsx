import '../game.css';
import { FC, ReactNode } from 'react';

const Character: FC<{
  children: ReactNode;
  fromTop: number;
  fromLeft: number;
  characterSprite: string;
}> = ({ children, fromTop, fromLeft, characterSprite }) => {
  const pixelsize = 2;

  const wrapper = {
    zIndex: 1,
    width: pixelsize * 30 + 'px',
    height: pixelsize * 30 + 'px',
    position: 'absolute',
  };
  const character = {
    position: 'absolute',
    backgroundImage: `url(${characterSprite})`,
    backgroundSize: '100%',
    width: pixelsize * 30 + 'px',
    height: '77px',
    top: fromTop + 'px',
    left: fromLeft + 'px',
  };

  return (
    <>
      {/* @ts-ignore */}
      <div style={{ ...wrapper }}>
        {/* @ts-ignore */}
        <div style={{ ...character }} />
        {children}
      </div>
    </>
  );
};

export default Character;
