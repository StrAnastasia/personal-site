import { FC, useState } from 'react';
import MainScreenIcon from 'shared/main-screen-icon';
import MiniGame from '.';
import asModal from 'shared/hooks/as-modal';
import Image from 'next/image';
import Logo from './game-components/images/logo.png';

const MiniGameModal = asModal(MiniGame);

interface MiniGameIconProps {
  showDescription?: boolean;
  size?: string;
  footer?: boolean;
  search?: boolean;
  click: string;
  setClick: (a: string) => void;
}

const MiniGameIcon: FC<MiniGameIconProps> = ({
  showDescription = false,
  size = '',
  footer = false,
  search = false,
  click,
  setClick,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MiniGameModal title={'mini-game'} open={open} onClose={() => setOpen(false)} />

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
        description={'Mini-game'}
        click={click}
        setClick={setClick}
      />
    </>
  );
};

export default MiniGameIcon;
