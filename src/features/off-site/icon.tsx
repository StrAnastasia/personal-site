import { FC } from 'react';
import { IconOctagonOff } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

const OffSiteIcon: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <IconOctagonOff color='#785880' />
      {t('turnOff')}
    </div>
  );
};

export default OffSiteIcon;
