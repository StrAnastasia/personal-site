import { FC, useEffect, useState } from 'react';
import './game.css';
import Pers1 from './game-components/images/SPRITESHEET_1.png';
import Pers5 from './game-components/images/SPRITESHEET_5.png';
import Pers9 from './game-components/images/SPRITESHEET_9.png';
import Pers13 from './game-components/images/SPRITESHEET_13.png';
import mirmore from './game-components/images/mirmore.png';
import Map from './game-components/map';
import MmAndSong from './game-components/mm-and-song';
import MisterPoliceman from './game-components/mister-policeman';
import Character from './game-components/character';
import InteractiveBubbles from './game-components/interactive-bubbles';
import Modals from './game-components/modals';
import Loading from './game-components/loading';
import styled from '@emotion/styled';
import TouchController from './game-components/touch-controller';

const MiniGame: FC = () => {
  let pixelsize = 2;
  const [speed, setSpeed] = useState(7);

  const [mapPos, setMapPos] = useState({
    fromTop: 0,
    fromLeft: 0,
  });
  const [charPos, setCharPos] = useState({
    fromTop: 0,
    fromLeft: 0,
  });
  const [spriteState, setSprite] = useState(Pers1);
  const [mirmorestate, setmirmorestate] = useState(mirmore);
  const [policemanState, setPolicemanState] = useState(-1000);

  const [isLoading, setIsLoading] = useState(true);
  const [canClick, setCanClick] = useState(true);

  const [visibleOrNot, setVisibleOrNot] = useState<{
    [a: string]: string;
  }>({
    vis: 'hidden',
    vismay: 'hidden',
    visili: 'hidden',
    vispivo: 'hidden',
    moneyvis: 'hidden',
    modalvis: 'hidden',
    vissneg: '',
  });

  function hideAllOrNot(exceptions: string[] = ['']) {
    const visFields: { [a: string]: string } = {};
    exceptions?.forEach((el) => (visFields[el] = ''));

    setVisibleOrNot({
      vis: 'hidden',
      vismay: 'hidden',
      visili: 'hidden',
      vispivo: 'hidden',
      vissneg: 'hidden',
      moneyvis: 'hidden',
      modalvis: 'hidden',
      ...visFields,
    });
  }

  var intervalIDOne: NodeJS.Timeout;
  var intervalIDTwo: NodeJS.Timeout;

  function chooseaction() {
    if (visibleOrNot.vis === '') {
      hideAllOrNot(['vissneg']);
    } else {
      setCanClick(false);
      hideAllOrNot(['vis', 'vissneg']);
      intervalIDOne = setTimeout(() => {
        hideAllOrNot(['vis', 'vissneg', 'visili']);
      }, 2000);
      intervalIDTwo = setTimeout(() => {
        hideAllOrNot(['vis', 'vissneg', 'visili', 'vispivo']);
        setCanClick(true);
      }, 3000);
    }
  }

  function stepUp() {
    setCharPos((prev) => ({ ...prev, fromTop: prev.fromTop - speed }));
    setMapPos((prev) => ({ ...prev, fromTop: prev.fromTop + speed }));
    setSprite(Pers9);
    setmirmorestate(mirmore);
    setPolicemanState(-1000);
    hideAllOrNot(['vissneg']);
  }

  function stepRight() {
    setCharPos((prev) => ({ ...prev, fromLeft: prev.fromLeft + speed }));
    setMapPos((prev) => ({ ...prev, fromLeft: prev.fromLeft - speed }));
    setSprite(Pers5);
    setmirmorestate(mirmore);
    setPolicemanState(-1000);
    hideAllOrNot(['vissneg']);
  }

  function stepDown() {
    setCharPos((prev) => ({ ...prev, fromTop: prev.fromTop + speed }));
    setMapPos((prev) => ({ ...prev, fromTop: prev.fromTop - speed }));
    setSprite(Pers1);
    setmirmorestate(mirmore);
    setPolicemanState(-1000);
    hideAllOrNot(['vissneg']);
  }

  function stepLeft() {
    setCharPos((prev) => ({ ...prev, fromLeft: prev.fromLeft - speed }));
    setMapPos((prev) => ({ ...prev, fromLeft: prev.fromLeft + speed }));
    setSprite(Pers13);
    setmirmorestate(mirmore);
    setPolicemanState(-1000);
    hideAllOrNot(['vissneg']);
  }

  const walkHandler = (keyCode: number) => {
    switch (keyCode) {
      case 65:
      case 37:
        stepLeft();
        break;
      case 87:
      case 38:
        stepUp();
        break;
      case 68:
      case 39:
        stepRight();
        break;
      case 83:
      case 40:
        stepDown();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const gamediv = document.querySelector('.gamediv');
    if (gamediv)
      document.addEventListener('keydown', (e: KeyboardEvent) => {
        e.stopPropagation();
        walkHandler(e?.keyCode);
      });
  }, []);

  useEffect(() => {
    if (charPos?.fromLeft < 3)
      setCharPos((prev) => ({ ...prev, fromLeft: prev.fromLeft + 2 }));
    if (charPos?.fromLeft > 1186)
      setCharPos((prev) => ({ ...prev, fromLeft: prev.fromLeft - 2 }));
    if (charPos?.fromTop < 78)
      setCharPos((prev) => ({ ...prev, fromTop: prev.fromTop + 2 }));
    if (charPos?.fromTop > 360)
      setCharPos((prev) => ({ ...prev, fromTop: prev.fromTop - 2 }));
  }, [charPos.fromLeft, charPos.fromTop]);

  useEffect(() => {
    if (window?.innerWidth < 765) setSpeed(42)
  }, []);

  function reset() {
    setIsLoading(true);
    setTimeout(() => {
      setMapPos({ fromTop: 0, fromLeft: 0 });
      setCharPos({ fromTop: 170, fromLeft: 260 });
      hideAllOrNot();
      setSprite(Pers1);
      setmirmorestate(mirmore);
      setPolicemanState(-1000);
    }, 1000);
  }

  useEffect(() => {
    return () => reset();
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} setIsLoading={setIsLoading} />
      <div className='gamediv'>
        <Modals reset={reset} visibleOrNot={visibleOrNot} />
        <Camera pixelsize={pixelsize}>
          <Map fromTop={mapPos.fromTop} fromLeft={mapPos.fromLeft}>
            <MmAndSong
              chooseaction={chooseaction}
              mirmorestate={mirmorestate.src}
              visibleOrNot={visibleOrNot}
            />
            <MisterPoliceman fromTop={charPos?.fromTop} policemanState={policemanState} />
            <Character
              fromTop={charPos?.fromTop}
              fromLeft={charPos?.fromLeft}
              characterSprite={spriteState.src}
            >
              <InteractiveBubbles
                fromTop={charPos?.fromTop}
                fromLeft={charPos?.fromLeft}
                setSprite={setSprite}
                setmirmorestate={setmirmorestate}
                setPolicemanState={setPolicemanState}
                hideAllOrNot={hideAllOrNot}
                visibleOrNot={visibleOrNot}
                canClick={canClick}
              />
            </Character>
          </Map>
        </Camera>
      </div>
      <TouchController walkHandler={walkHandler} />
    </>
  );
};

export default MiniGame;

const Camera = styled.div<{
  pixelsize: number;
}>`
  image-rendering: pixelated;
  width: ${({ pixelsize }) => `${pixelsize * 320}px`};
  height: ${({ pixelsize }) => `${pixelsize * 288}px`};
  overflow: hidden;
  background: lightgray;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    min-height: 400px;
  }
`;
