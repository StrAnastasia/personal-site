import { FC, useState } from 'react';
import MainScreenIcon from 'shared/main-screen-icon';
import Lacore from '.';
import asModal from 'shared/hooks/as-modal';
import { LacoreLogoIcon } from './lacore-logo';
import { IconProps } from 'shared/hooks/use-get-features';

const LacoreModal = asModal(Lacore);

const LacoreIcon: FC<IconProps> = ({
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
      <LacoreModal title={'Lacore'} open={open} onClose={() => setOpen(false)} />

      <MainScreenIcon
        onDoubleClick={() => setOpen(true)}
        footer={footer}
        search={search}
        showDescription={showDescription}
        size={size}
        icon={
          <LacoreLogoIcon
            width={size === 'big' ? 40 : 30}
            height={size === 'big' ? 40 : 30}
          />
        }
        description={'Lacore'}
        click={click}
        setClick={setClick}
      />
    </>
  );
};

export default LacoreIcon;
