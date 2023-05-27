import { FC } from 'react';
import styled from '@emotion/styled';
import Search from './buttons/search';
import OnOffButton from './buttons/on-off-button';
import FooterButtonWrapper from 'shared/footer-button-wrapper';
import MiniGameIcon from 'features/mini-game/icon';

interface FooterProps {
  click: string;
  setClick: (a:  string) => void;
}

const Footer: FC<FooterProps> = (iconProps) => {
  return (
    <BackGround>
      <OnOffButton />
      <Search />
      <FooterButtonWrapper>
        <MiniGameIcon footer {...iconProps} />
      </FooterButtonWrapper>
    </BackGround>
  );
};

export default Footer;

const BackGround = styled.div`
  background: #c9acce;
  min-width: 100vw;
  width: 100vw;
  max-width: 100vw;
  height: 60px;
  border-top: #785880 solid 3px;
  display: flex;
`;
