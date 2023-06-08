import { FC, useState } from 'react';
import MainScreenIcon from 'shared/main-screen-icon';
import Medol from '.';
import asModal from 'shared/hooks/as-modal';
import Image from 'next/image';
import logo from './medol.png';
import styled from '@emotion/styled';

const MedolModal = asModal(Medol);

interface MedolIconProps {
  showDescription?: boolean;
  size?: string;
  footer?: boolean;
  search?: boolean;
  click: string;
  setClick: (a: string) => void;
}

const MedolIcon: FC<MedolIconProps> = ({
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
      <MedolModal bigger title={'Medol'} open={open} onClose={() => setOpen(false)} />

      <MainScreenIcon
        onDoubleClick={() => setOpen(true)}
        footer={footer}
        search={search}
        showDescription={showDescription}
        size={size}
        icon={
          <ImageWrapper big={size === 'big'}>
            <Image
              alt='medolImage'
              width={size === 'big' ? 180 : 120}
              height={size === 'big' ? 40 : 30}
              src={logo}
            />
          </ImageWrapper>
        }
        description={'Medol'}
        click={click}
        setClick={setClick}
      />
    </>
  );
};

export default MedolIcon;

const ImageWrapper = styled.div<{ big: boolean }>`
  width: ${(({big}) => big ? "80px" : "55px")};
  overflow: hidden;
`;
