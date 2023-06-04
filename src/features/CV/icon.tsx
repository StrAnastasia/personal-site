import { FC, useState } from 'react';
import CV from '.';
import asModal from 'shared/hooks/as-modal';
import { IconFileInfo } from '@tabler/icons-react';
import MainScreenIcon from 'shared/main-screen-icon';
import { useTranslation } from 'react-i18next';

const CVModal = asModal(CV);

interface CVIconProps {
  onOffMenu?: boolean;
  open?: boolean;
  setOpen?: (a: boolean) => void;
  showDescription?: boolean;
  size?: string;
  footer?: boolean;
  search?: boolean;
  click?: string;
  setClick?: (a: string) => void;
}

const CVIcon: FC<CVIconProps> = ({
  onOffMenu = false,

  open,
  setOpen,
  showDescription = false,
  size = '',
  footer = false,
  search = false,
  click,
  setClick = (f) => f,
}) => {
  const [openFromOnOffMenu, setOpenFromOnOffMenu] = useState(false);
  const { t } = useTranslation();

  return (
    <div>
      {onOffMenu ? (
        <>
          <CVModal title={'CV'} open={open || false} onClose={() => setOpen?.(false)} />
          <IconFileInfo color='#785880' />
          {t('CheckCV')}
        </>
      ) : (
        <>
          <CVModal
            title={t('CVLabel') || ''}
            open={openFromOnOffMenu || false}
            onClose={() => setOpenFromOnOffMenu?.(false)}
          />
          <MainScreenIcon
            onDoubleClick={() => setOpenFromOnOffMenu?.(true)}
            footer={footer}
            search={search}
            showDescription={showDescription}
            size={size}
            icon={<IconFileInfo size={size === 'big' ? 40 : 30} color='#785880' />}
            description={t('CVLabel') || ''}
            click={click || ''}
            setClick={setClick}
          />
        </>
      )}
    </div>
  );
};

export default CVIcon;
