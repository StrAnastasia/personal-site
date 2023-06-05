import { FC, useState } from 'react';
import MainScreenIcon from 'shared/main-screen-icon';
import Attex from '.';
import asModal from 'shared/hooks/as-modal';
import Image from 'next/image';
import logo from './Union.png';

const AttexModal = asModal(Attex);

interface ExnodeIconProps {
  showDescription?: boolean;
  size?: string;
  footer?: boolean;
  search?: boolean;
  click: string;
  setClick: (a: string) => void;
}

const AttexIcon: FC<ExnodeIconProps> = ({
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
      <AttexModal title={'Attex'} open={open} onClose={() => setOpen(false)} />

      <MainScreenIcon
        onDoubleClick={() => setOpen(true)}
        footer={footer}
        search={search}
        showDescription={showDescription}
        size={size}
        icon={
          <Image
            alt='attexImage'
            width={size === 'big' ? 40 : 30}
            height={size === 'big' ? 40 : 30}
            src={logo}
          />
        }
        description={'Attex'}
        click={click}
        setClick={setClick}
      />
    </>
  );
};

export default AttexIcon;
