import { FC, useState } from 'react';
import MainScreenIcon from 'shared/main-screen-icon';
import MiniGame from '.';
import asModal from 'shared/hooks/as-modal';
import Image from 'next/image';
import Logo from './game-components/images/logo.png';
import { useTranslation } from 'react-i18next';
import { IconProps } from 'shared/hooks/use-get-features';

const MiniGameModal = asModal(MiniGame);

const MiniGameIcon: FC<IconProps> = ({
  showDescription = false,
  size = '',
  footer = false,
  search = false,
  click,
  setClick,
}) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <MiniGameModal
        title={t('miniGameLabel') || ''}
        open={open}
        onClose={() => setOpen(false)}
      />

      <MainScreenIcon
        onDoubleClick={() => setOpen(true)}
        footer={footer}
        search={search}
        showDescription={showDescription}
        size={size}
        icon={
          <Image
            alt='mminigameLogo'
            width={size === 'big' ? 40 : 30}
            height={size === 'big' ? 40 : 30}
            src={Logo}
          />
        }
        description={t('miniGameLabel')}
        click={click}
        setClick={setClick}
      />
    </>
  );
};

export default MiniGameIcon;
