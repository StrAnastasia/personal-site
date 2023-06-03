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

const MiniGame: FC = () => {
  let pixelsize = 2;
  let speed = 7;

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
  const [policemanState, setPolicemanState] = useState('-1000');

  const [isLoading, setIsLoading] = useState(true);

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

  function hideAllOrNot(exceptions: string[] = [''], onlyAdd: boolean = false) {
    const visFields: { [a: string]: string } = {};
    exceptions?.forEach((el) => (visFields[el] = ''));
    let result = {};

    if (onlyAdd) {
      Object.entries(visibleOrNot)?.forEach(([key, value]) =>
        value === '' ? (visFields[key] = '') : null
      );
      result = { ...visFields };
    } else {
      result = {
        vis: 'hidden',
        vismay: 'hidden',
        visili: 'hidden',
        vispivo: 'hidden',
        vissneg: 'hidden',
        moneyvis: 'hidden',
        modalvis: 'hidden',
        ...visFields,
      };
    }
    setVisibleOrNot(result);
  }

  const styleofallthegame = {
    '--pixel-size': `${pixelsize}px`,
    '--grid-cell': `${pixelsize * 16}px`,
    '--bg': 'black',
  };

  const camerastyle = {
    imageRendering: 'pixelated',
    width: `${pixelsize * 320}px`,
    height: `${pixelsize * 288}px`,
    overflow: 'hidden',
    background: 'lightgray',
    position: 'relative',
  };

  function chooseaction() {
    if (visibleOrNot.vis === '') {
      hideAllOrNot(['vissneg']);
    } else {
      hideAllOrNot(['vis', 'vissneg'], true);
      setTimeout(() => {
        hideAllOrNot(['visili'], true);
      }, 2000);
      setTimeout(() => {
        hideAllOrNot(['vispivo'], true);
      }, 3000);
    }
  }

  const walkHandler = (e: any) => {
    e.stopPropagation();
    switch (e.keyCode) {
      case 65:
      case 37:
        setCharPos((prev) => ({ ...prev, fromLeft: prev.fromLeft - speed }));
        setMapPos((prev) => ({ ...prev, fromLeft: prev.fromLeft + speed }));
        setSprite(Pers13);
        hideAllOrNot(['vissneg']);
        break;
      case 87:
      case 38:
        setCharPos((prev) => ({ ...prev, fromTop: prev.fromTop - speed }));
        setMapPos((prev) => ({ ...prev, fromTop: prev.fromTop + speed }));
        setSprite(Pers9);
        hideAllOrNot(['vissneg']);
        break;
      case 68:
      case 39:
        setCharPos((prev) => ({ ...prev, fromLeft: prev.fromLeft + speed }));
        setMapPos((prev) => ({ ...prev, fromLeft: prev.fromLeft - speed }));
        setSprite(Pers5);
        hideAllOrNot(['vissneg']);
        break;
      case 83:
      case 40:
        setCharPos((prev) => ({ ...prev, fromTop: prev.fromTop + speed }));
        setMapPos((prev) => ({ ...prev, fromTop: prev.fromTop - speed }));
        setSprite(Pers1);
        hideAllOrNot(['vissneg']);
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    const gamediv = document.querySelector('.gamediv');
    if (gamediv) document.addEventListener('keydown', walkHandler);
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

  function reset() {
    setIsLoading(true);
    setTimeout(() => {
      setMapPos({ fromTop: 0, fromLeft: 0 });
      setCharPos({ fromTop: 170, fromLeft: 260 });
      hideAllOrNot();
      setSprite(Pers1);
      setmirmorestate(mirmore);
      setPolicemanState('-1000');
    }, 1000);
  }

  useEffect(() => {
    return () => reset();
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} setIsLoading={setIsLoading} />
      {/* @ts-ignore */}
      <div className='gamediv' style={{ ...styleofallthegame }}>
        <Modals reset={reset} visibleOrNot={visibleOrNot} />
        {/* @ts-ignore */}
        <div className='camera' style={{ ...camerastyle }}>
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
              />
            </Character>
          </Map>
        </div>
      </div>
    </>
  );
};

export default MiniGame;
