import { FC, useState } from 'react';
import MainScreenIcon from 'shared/main-screen-icon';
import Aifory from '.';
import asModal from 'shared/hooks/as-modal';
import Image from 'next/image';
import logo from './aifory.favicon.png';
import { IconProps } from 'shared/hooks/use-get-features';

const AiforyModal = asModal(Aifory);


const AiforyIcon: FC<IconProps> = ({
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
      <AiforyModal title={'Aifory'} open={open} onClose={() => setOpen(false)} />

      <MainScreenIcon
        onDoubleClick={() => setOpen(true)}
        footer={footer}
        search={search}
        showDescription={showDescription}
        size={size}
        icon={
          <Image
            alt='aiforyImage'
            width={size === 'big' ? 40 : 30}
            height={size === 'big' ? 40 : 30}
            src={logo}
          />
        }
        description={'Aifory'}
        click={click}
        setClick={setClick}
      />
    </>
  );
};

export default AiforyIcon;
