import styled from '@emotion/styled';
import { FC, MouseEventHandler, ReactNode, useState } from 'react';

interface MainScreenIconProps {
  showDescription?: boolean;
  size?: string;
  icon: ReactNode;
  footer: boolean;
  description: string;
  click: string;
  setClick: (a: string) => void;
  onDoubleClick: (e: MouseEvent) => void;
}

const MainScreenIcon: FC<MainScreenIconProps> = ({
  showDescription = false,
  size = '',
  icon,
  description,
  footer = false,
  click,
  setClick,
  onDoubleClick,
}) => {
  return (
    <Icon
      footer={footer}
      clicked={click === description + (footer ? 'footer' : '')}
      onClick={() => {
        setClick(description + (footer ? 'footer' : ''))
      }}
      // @ts-ignore
      onDoubleClick={(e) => onDoubleClick(e)}
    >
      <PseudoImage size={size}>{icon}</PseudoImage>
      {showDescription && <Description>{description}</Description>}
    </Icon>
  );
};

export default MainScreenIcon;

const Icon = styled.button<{ clicked: boolean; footer: boolean }>`
  border: none;
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${({ clicked }) => (clicked ? 'rgb(0 0 0 / 25%)' : 'transparent')};
  padding: ${({ footer }) => (footer ? '0px 16px' : '24px 20px')};
  margin: ${({ footer }) => (footer ? '0px' : '0px 20px 9px 0px')};
  height: ${({ footer }) => (footer ? '90%' : 'max-content')};
`;

const PseudoImage = styled.p<{ size: string }>`
  width: max-content;
  // width: ${({ size }) => (size === 'big' ? '72px' : '24px')};
  font-size: ${({ size }) => (size === 'big' ? '32px' : '16px')};
  margin: 0px;
`;

const Description = styled.p`
  width: max-content;
  margin: 0px;
  margin-top: 12px;
  font-size: 12px;
`;
