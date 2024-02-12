import { FC } from 'react';
import styled from '@emotion/styled';
import Search from './buttons/search';
import OnOffButton from './buttons/on-off-button';
import FooterButtonWrapper from 'shared/footer-button-wrapper';
import useGetFeatures from 'shared/hooks/use-get-features';
import Language from './buttons/language-component';

interface FooterProps {
  click: string;
  setClick: (a: string) => void;
  turnOff: () => void;
}

const Footer: FC<FooterProps> = (clickProps) => {
  const features = useGetFeatures(clickProps);

  return (
    <BackGround>
      <LeftSide>
        <OnOffButton {...clickProps} />
        <Search {...clickProps} />
        <Icons>
          {features?.map(({ footerIcon }, id) => (
            <FooterButtonWrapper rightBorder key={id}>
              {footerIcon}
            </FooterButtonWrapper>
          ))}
        </Icons>
      </LeftSide>
      <RightSide>
        <FooterButtonWrapper leftBorder>
          <Language {...clickProps} />
        </FooterButtonWrapper>
      </RightSide>
    </BackGround>
  );
};

export default Footer;

const BackGround = styled.div`
  position: fixed;
  bottom: 0;

  background: #ffb52b;
  min-width: 100vw;
  width: 100vw;
  max-width: 100vw;
  height: 60px;
  border-top: #da6a00 solid 3px;
  display: flex;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
`;

const Icons = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  > div {
    padding: 16px;
  }
`;
