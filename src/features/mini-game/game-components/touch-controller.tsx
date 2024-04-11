import styled from '@emotion/styled';
import {
  IconArrowBigDown,
  IconArrowBigLeft,
  IconArrowBigRight,
  IconArrowBigUp,
} from '@tabler/icons-react';
import { FC } from 'react';

const TouchController: FC<{
  walkHandler: (keyCode: number) => void;
}> = ({ walkHandler }) => {

  return (
    <ControllerWrapper>
      <Button
        onTouchStart={(e) => {
          e.stopPropagation();
          walkHandler(38);
        }}
      >
        <IconArrowBigUp />
      </Button>
      <FlexDiv>
        <Button
          onTouchStart={(e) => {
            e.stopPropagation();
            walkHandler(37);
          }}
        >
          <IconArrowBigLeft />
        </Button>
        <Button
          onTouchStart={(e) => {
            e.stopPropagation();
            walkHandler(39);
          }}
        >
          <IconArrowBigRight />
        </Button>
      </FlexDiv>
      <Button
        onTouchStart={(e) => {
          e.stopPropagation();
          walkHandler(40);
        }}
      >
        <IconArrowBigDown />
      </Button>
    </ControllerWrapper>
  );
};

export default TouchController;

const ControllerWrapper = styled.div`
  display: none;
  @media (max-width: 1024px) {
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  gap: 46px;
`;

const Button = styled.button`
  border: none;
  background: #e34e52;
  width: 46px;
  height: 46px;
  color: white;
  cursor: pointer;
`;
