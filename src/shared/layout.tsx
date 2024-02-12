import React, { FC, ReactNode, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Footer from 'features/footer';
import OnOffHellos from 'features/on-off-hellos';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [click, setClick] = useState('');

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        // @ts-ignore
        click,
        setClick: (string: string) => {
          setClick((prev) => (prev === string ? '' : string));
        },
      });
    }
    return child;
  });

  useEffect(() => {
    document.addEventListener('click', (e) => {
      e.stopPropagation();
      const element = e.target as HTMLElement;
      if (typeof element?.closest('button')?.className === 'string') {
        if (element?.closest('button')?.className?.includes('cross')) {
          setClick('');
        }
      }
      if (typeof element?.className === 'string') {
        if (element?.className?.includes('MainScreen')) setClick('');
      }
    });
  }, []);

  const [isOn, setisOn] = useState(false);
  const [hello, setHello] = useState(false);
  const [showElements, setShowElements] = useState(true);
  const [firstTime, setFirstTime] = useState(true);

  return (
    <>
      {showElements && (
        <OnOffHellos
          isOn={isOn}
          setisOn={setisOn}
          hello={hello}
          setHello={setHello}
          setShowElements={setShowElements}
          firstTime={firstTime}
          setFirstTime={setFirstTime}
        />
      )}

      {isOn && (
        <BackGround>
          <MainScreen className='MainScreen'>{childrenWithProps}</MainScreen>

          <Footer
            turnOff={() => {
              setShowElements(true);
              setTimeout(() => {
                setisOn(false);
              }, 1);
            }}
            click={click}
            setClick={(string) => {
              setClick((prev) =>
                string.includes('onnoff') || string.includes('search')
                  ? string
                  : prev === string
                  ? ''
                  : string
              );
            }}
          />
        </BackGround>
      )}
    </>
  );
};

export default Layout;

const BackGround = styled.div`
  background: #e8ebeb;
  min-width: 100vw;
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`;

const MainScreen = styled.div`
  width: 100%;
  min-height: 100vh;
`;
