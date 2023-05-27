import React, { FC, ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import Footer from 'features/footer';

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

  return (
    <BackGround>
      <MainScreen>{childrenWithProps}</MainScreen>

      <Footer
        click={click}
        setClick={(string) => {
          setClick((prev) => (prev === string ? '' : string));
        }}
      />
    </BackGround>
  );
};

export default Layout;

const BackGround = styled.div`
  background: #80c5c5;
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
  min-height: calc(100vh - 60px);
  height: calc(100vh - 60px);
  max-height: calc(100vh - 60px);
`;
