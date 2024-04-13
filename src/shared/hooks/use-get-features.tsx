import CVIcon from 'features/CV/icon';
import ExnodeIcon from 'features/exnode/icon';
import LacoreIcon from 'features/lacore/icon';
import MedolIcon from 'features/medol/icon';
import MiniGameIcon from 'features/mini-game/icon';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface ClickProps {
  click: string;
  setClick: (a: string) => void;
}

export interface IconProps extends ClickProps {
  showDescription?: boolean;
  size?: string;
  footer?: boolean;
  search?: boolean;
}

export interface FetureType {
  mainScreenIcon: ReactNode;
  footerIcon: ReactNode;
  searchButton: ReactNode;
  label: string;
}

const useGetFeatures: (a: ClickProps) => FetureType[] = (clickProps) => {
  const { t } = useTranslation();

  const features = useMemo(
    () => [
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
    ],
    [clickProps]
  );

  const [showMedol, setShowMedol] = useState(true);

  const shownFeatures = useMemo(
    () => features.filter((feature) => showMedol || feature.label !== 'Medol'),
    [showMedol]
  );

  useEffect(() => {
    function changeVisibility() {
      if (window.innerWidth < 1450 && showMedol) setShowMedol(false);
      if (window.innerWidth >= 1450 && !showMedol) setShowMedol(true);
    }

    changeVisibility();
    window.addEventListener('resize', changeVisibility);
    return () => window.removeEventListener('resize', changeVisibility);
  }, [showMedol]);

  return shownFeatures;
};

export default useGetFeatures;
