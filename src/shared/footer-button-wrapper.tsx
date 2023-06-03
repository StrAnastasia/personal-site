import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

const FooterButtonWrapper: FC<{
  children: ReactNode;
  onClick?: () => void;
  rightBorder?: boolean;
  leftBorder?: boolean;
}> = ({ children, onClick, rightBorder = false, leftBorder = false }) => {
  if (onClick)
    return (
      <Border rightBorder={rightBorder} leftBorder={leftBorder} onClick={onClick}>
        {children}
      </Border>
    );

  return (
    <Border rightBorder={rightBorder} leftBorder={leftBorder}>
      {children}
    </Border>
  );
};

export default FooterButtonWrapper;

const Border = styled.div<{
  rightBorder: boolean;
  leftBorder: boolean;
}>`
  border-right: ${({ rightBorder }) => (rightBorder ? '#785880 solid 3px' : 'none')};
  border-left: ${({ leftBorder }) => (leftBorder ? '#785880 solid 3px' : 'none')};

  width: max-content;
  height: 100%;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;
