import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

const FooterButtonWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <Border>{children}</Border>;
};

export default FooterButtonWrapper;

const Border = styled.div`
  border-right: #785880 solid 3px;
  width: max-content;
  height: 100%;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
