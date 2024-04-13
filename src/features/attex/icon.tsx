import { FC, useState } from 'react';
import MainScreenIcon from 'shared/main-screen-icon';
import Attex from '.';
import asModal from 'shared/hooks/as-modal';
import Image from 'next/image';
import logo from './Union.png';
import { IconProps } from 'shared/hooks/use-get-features';

const AttexModal = asModal(Attex);


const AttexIcon: FC<IconProps> = ({
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
