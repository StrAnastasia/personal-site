import { FC } from 'react';
import styled from '@emotion/styled';
import FooterButtonWrapper from 'shared/footer-button-wrapper';

const Search: FC = () => {
  return (
    <FooterButtonWrapper>
      <Icon />
      <StyledInput placeholder='Search' />
    </FooterButtonWrapper>
  );
};

export default Search;

const Icon = styled.div`
  background: #785880;
  width: 24px;
  height: 24px;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  border-radius: 24px;
  height: 24px;
  padding: 4px 8px;
  margin-left: 8px;
  font-size: 16px;
  cursor: pointer;
`;
