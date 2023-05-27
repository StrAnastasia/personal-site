import styled from '@emotion/styled';
import MiniGameIcon from 'features/mini-game/icon';
import type { NextPage } from 'next';

interface IndexProps {
  click: string;
  setClick: (a: string) => void;
}

const Index: NextPage<IndexProps> = ({ click, setClick }) => {
  return (
    <Icons>
      <MiniGameIcon
        click={click}
        setClick={setClick}
        showDescription
        size={'big'}
      />
    </Icons>
  );
};

export default Index;

const Icons = styled.div`
  padding: 24px;
  height: max-content;
  max-height: 100%;
  width: max-content;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  > * {
    flex: 1 1 80px;
  }
`;
