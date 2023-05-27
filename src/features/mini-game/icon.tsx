import { FC, memo, useState } from 'react';
import MainScreenIcon from 'shared/main-screen-icon';
import MiniGame from '.';
import asModal from 'shared/hooks/as-modal';

const MiniGameModal = asModal(MiniGame);

interface MiniGameIconProps {
  showDescription?: boolean;
  size?: string;
  footer?: boolean;
  click: string;
  setClick: (a: string) => void;
}

const MiniGameIcon: FC<MiniGameIconProps> = ({
  showDescription = false,
  size = '',
  footer = false,
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
        showDescription={showDescription}
        size={size}
        icon={'M/G'}
        description={'Mini-game'}
        click={click}
        setClick={setClick}
      />
    </>
  );
};

export default MiniGameIcon;
