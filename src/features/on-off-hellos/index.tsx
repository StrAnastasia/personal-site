import React, { FC, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { createPortal } from 'react-dom';

interface OnOffHellosProps {
  isOn: boolean;
  setisOn: (a: boolean) => void;
  hello: boolean;
  setHello: (a: boolean) => void;
  setShowElements: (a: boolean) => void;
  firstTime: boolean;
  setFirstTime: (a: boolean) => void;
}

const OnOffHellos: FC<OnOffHellosProps> = ({
  isOn,
  setisOn,
  hello,
  setHello,
  setShowElements,
  firstTime,
  setFirstTime,
}) => {
  let externalRef = useRef<HTMLElement>();
  useEffect(() => {
    externalRef.current = document.body;
  }, []);

  function turnItOn(e: any) {
    e.stopPropagation();
    if (e.keyCode) {
      setTimeout(() => {
        setHello(true);
      }, 1500);
      setTimeout(() => {
        setisOn(true);
        setHello(false);
      }, 3000);
      setTimeout(() => {
        setShowElements(false);
      }, 4000);
    }
  }

  useEffect(() => {
    if (firstTime && !isOn) {
      setFirstTime(false);
      setisOn(false);
      setTimeout(() => {
        setHello(true);
      }, 2000);
      setTimeout(() => {
        setisOn(true);
        setHello(false);
      }, 4000);
      setTimeout(() => {
        setShowElements(false);
      }, 5000);
    }

    if (!isOn && !firstTime) {
      const OffScreen = document.querySelector('.OffScreen');
      if (OffScreen) {
        document.addEventListener('keydown', turnItOn);
      }
    }
    return () => removeEventListener('keydown', turnItOn)

  }, [isOn, firstTime]);

  return (
    <>
      {externalRef.current &&
        createPortal(
          <OffScreen off={!isOn} className='OffScreen' />,
          externalRef.current
        )}

      {externalRef.current &&
        createPortal(
          <SecondHelloDiv hello={hello}>Добро пожаловать!</SecondHelloDiv>,
          externalRef.current
        )}
    </>
  );
};

export default OnOffHellos;

const OffScreen = styled.div<{ off: boolean }>`
  position: absolute;
  background: ${({ off }) => (off ? 'black' : 'transparent')};
  z-index: ${({ off }) => (off ? '100' : '-1')};
  transition: 0.5s;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

const SecondHelloDiv = styled.div<{ hello: boolean }>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  opacity: ${({ hello }) => (hello ? '1' : '0')};
  transition: 0.5s;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: white;
`;
