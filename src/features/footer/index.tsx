import { FC } from 'react';
import styled from '@emotion/styled';
import Search from './buttons/search';
import OnOffButton from './buttons/on-off-button';
import FooterButtonWrapper from 'shared/footer-button-wrapper';
import useGetFeatures from 'shared/hooks/use-get-features';
import Watch from './buttons/watch';

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
        {features?.map(({ footerIcon }, id) => (
          <FooterButtonWrapper rightBorder key={id}>
            {footerIcon}
          </FooterButtonWrapper>
        ))}
      </LeftSide>
      <RightSide>
        <FooterButtonWrapper leftBorder>
          <Watch />
        </FooterButtonWrapper>
      </RightSide>
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
  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  > div {
    padding: 16px;
  }
`;
