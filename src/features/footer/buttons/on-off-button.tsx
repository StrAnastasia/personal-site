import { FC } from 'react';
import styled from '@emotion/styled';
import FooterButtonWrapper from 'shared/footer-button-wrapper';

const OnOffButton: FC = () => {
  return (
    <FooterButtonWrapper>
      <Icon />
    </FooterButtonWrapper>
  );
};

export default OnOffButton;

const Icon = styled.div`
  background: #785880;
  width: 24px;
  height: 24px;
`;
