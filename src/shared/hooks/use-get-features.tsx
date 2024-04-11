import CVIcon from 'features/CV/icon';
import ExnodeIcon from 'features/exnode/icon';
import LacoreIcon from 'features/lacore/icon';
import MedolIcon from 'features/medol/icon';
import MiniGameIcon from 'features/mini-game/icon';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return [
    {
      mainScreenIcon: <MiniGameIcon showDescription size={'big'} {...clickProps} />,
      footerIcon: <MiniGameIcon footer {...clickProps} />,
      searchButton: <MiniGameIcon search {...clickProps} />,
      label: t('miniGameLabel'),
    },
    {
      mainScreenIcon: <ExnodeIcon showDescription size={'big'} {...clickProps} />,
      footerIcon: <ExnodeIcon footer {...clickProps} />,
      searchButton: <ExnodeIcon search {...clickProps} />,
      label: 'Exnode',
    },
    // {
    //   mainScreenIcon: <AttexIcon showDescription size={'big'} {...clickProps} />,
    //   footerIcon: <AttexIcon footer {...clickProps} />,
    //   searchButton: <AttexIcon search {...clickProps} />,
    //   label: 'Attex',
    // },
    {
      mainScreenIcon: <MedolIcon showDescription size={'big'} {...clickProps} />,
      footerIcon: <MedolIcon footer {...clickProps} />,
      searchButton: <MedolIcon search {...clickProps} />,
      label: 'Medol',
    },
    {
      mainScreenIcon: <LacoreIcon showDescription size={'big'} {...clickProps} />,
      footerIcon: <LacoreIcon footer {...clickProps} />,
      searchButton: <LacoreIcon search {...clickProps} />,
      label: 'Lac`core',
    },
    {
      mainScreenIcon: <CVIcon showDescription size={'big'} {...clickProps} />,
      footerIcon: <CVIcon footer {...clickProps} />,
      searchButton: <CVIcon search {...clickProps} />,
      label: t('CVLabel'),
    },
  ];
};

export default useGetFeatures;
