import styled from '@emotion/styled';
import type { NextPage } from 'next';
import useGetFeatures from 'shared/hooks/use-get-features';

interface IndexProps {
  click: string;
  setClick: (a: string) => void;
}

const Index: NextPage<IndexProps> = ({ click, setClick }) => {
  const features = useGetFeatures({ click, setClick });
  return (
    <>
      <Notification>добавь выбор языка!!!</Notification>
      <Icons>
        {features?.map(({ mainScreenIcon }, id) => (
          <span key={id}>{mainScreenIcon}</span>
        ))}
      </Icons>
    </>
  );
};

export default Index;

const Notification = styled.div`
  background: white;
  position: absolute;
  padding: 40px;

  top: 300px;
  right: 300px;
`;

const Icons = styled.div`
  padding: 12px;
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
