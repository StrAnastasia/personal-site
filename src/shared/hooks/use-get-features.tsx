import CVIcon from 'features/CV/icon';
import AttexIcon from 'features/attex/icon';
import ExnodeIcon from 'features/exnode/icon';
import MiniGameIcon from 'features/mini-game/icon';
import { ReactNode } from 'react';

interface UseGetFeaturesProps {
  click: string;
  setClick: (a: string) => void;
}

export interface FetureType {
  mainScreenIcon: ReactNode;
  footerIcon: ReactNode;
  searchButton: ReactNode;
  label: string;
}

const useGetFeatures: (a: UseGetFeaturesProps) => FetureType[] = (clickProps) => {
  return [
    {
      mainScreenIcon: <MiniGameIcon showDescription size={'big'} {...clickProps} />,
      footerIcon: <MiniGameIcon footer {...clickProps} />,
      searchButton: <MiniGameIcon search {...clickProps} />,
      label: 'MiniGame',
    },
    {
      mainScreenIcon: <ExnodeIcon showDescription size={'big'} {...clickProps} />,
      footerIcon: <ExnodeIcon footer {...clickProps} />,
      searchButton: <ExnodeIcon search {...clickProps} />,
      label: 'Exnode',
    },
    {
      mainScreenIcon: <AttexIcon showDescription size={'big'} {...clickProps} />,
      footerIcon: <AttexIcon footer {...clickProps} />,
      searchButton: <AttexIcon search {...clickProps} />,
      label: 'Attex',
    },
    {
      mainScreenIcon: <CVIcon showDescription size={'big'} {...clickProps} />,
      footerIcon: <CVIcon footer {...clickProps} />,
      searchButton: <CVIcon search {...clickProps} />,
      label: 'CV',
    },
  ];
};

export default useGetFeatures;
