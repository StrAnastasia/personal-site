import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';
import { IconProps } from './hooks/use-get-features';

interface MainScreenIconProps extends IconProps {
  icon: ReactNode;
  description: string;
  onDoubleClick: (e: MouseEvent) => void;
}

const MainScreenIcon: FC<MainScreenIconProps> = ({
  showDescription = false,
  size = '',
  icon,
  description,
  footer = false,
  search = false,
  click,
  setClick,
  onDoubleClick,
}) => {
  return (
    <ClickableDiv
      search={search}
      footer={footer}
      onClick={() => {
        setClick(description + (footer ? 'footer' : search ? 'search' : 'noth'));
      }}
      // @ts-ignore
      onDoubleClick={(e) => onDoubleClick(e)}
      clicked={click === description + (footer ? 'footer' : search ? 'search' : 'noth')}
    >
      <Icon search={search}>
        <PseudoImage size={size}>{icon}</PseudoImage>
        {showDescription && <Description>{description}</Description>}
      </Icon>
      <Description search={search}>{search ? description : ''}</Description>
    </ClickableDiv>
  );
};

export default MainScreenIcon;

const ClickableDiv = styled.div<{ clicked: boolean; search: boolean; footer: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${({ search }) => (search ? 'start' : 'center')};
  background: ${({ clicked }) => (clicked ? 'rgb(0 0 0 / 25%)' : 'transparent')};
  width: ${({ search }) => (search ? '100%' : 'max-content')};
  padding: ${({ search, footer }) =>
    search ? '8px 0px' : footer ? '10px 0px' : '24px 20px'};
  margin: ${({ footer, search }) => (footer || search ? '0px' : '0px 20px 9px 0px')};
  height: ${({ footer, search }) => (footer || search ? '90%' : 'max-content')};
`;

const Icon = styled.button<{ search: boolean }>`
  background: transparent;
  border: none;
  width: ${({ search }) => (search ? '54px' : 'max-content')};
  height: ${({ search }) => (search ? '30px' : 'max-content')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const PseudoImage = styled.p<{ size: string }>`
  width: ${({ size }) => (size === 'big' ? '72px' : 'max-content')};
  font-size: ${({ size }) => (size === 'big' ? '32px' : '16px')};
  margin: 0px;
`;

const Description = styled.p<{ search?: boolean }>`
  width: max-content;
  margin: 0px;
  margin-top: ${({ search }) => (search ? '0px' : '12px')};
  font-size: 12px;
`;
