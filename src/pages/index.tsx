import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { useEffect, useMemo, useState } from 'react';
import useGetFeatures from 'shared/hooks/use-get-features';

interface IndexProps {
  click: string;
  setClick: (a: string) => void;
}

const Index: NextPage<IndexProps> = ({ click, setClick }) => {
  const features = useGetFeatures({ click, setClick });

  const [showMedol, setShowMedol] = useState(true);

  const shownFeatures = useMemo(
    () => features.filter((feature) => (showMedol ? true : feature.label !== 'Medol')),
    [showMedol]
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1450 && showMedol) setShowMedol(false);
      if (!showMedol) setShowMedol(true);
    });
  }, [showMedol]);

  return (
    <Icons>
      {shownFeatures?.map(({ mainScreenIcon }, id) => (
        <span key={id}>{mainScreenIcon}</span>
      ))}
    </Icons>
  );
};

export default Index;

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
  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;
