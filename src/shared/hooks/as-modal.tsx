import { useRef, memo, FC, ReactNode, ReactElement, useState } from 'react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { IconSquare, IconX } from '@tabler/icons-react';

enum modalSizes {
  small = 'small',
  big = 'big',
}

const Modal = memo(({ open, onClose, title, bigger = false, children }: AsModalProps) => {
  let ref = useRef<HTMLDivElement>(null);
  let externalRef = useRef<HTMLElement>();
  const [windowSize, setWindowSize] = useState(
    bigger ? modalSizes?.big : modalSizes?.small
  );
  useEffect(() => {
    externalRef.current = document.body;
  }, []);
  return (
    <>
      {open &&
        externalRef.current &&
        createPortal(
          <ModalGreatwrapper windowSize={windowSize}>
            <ModalWrapper windowSize={windowSize} ref={ref}>
              <ModalHeader
                title={title || ''}
                setWindowSize={setWindowSize}
                onClose={onClose}
              />
              <ModalBody>{children}</ModalBody>
            </ModalWrapper>
          </ModalGreatwrapper>,
          externalRef.current
        )}
    </>
  );
});

interface AsModalProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
  bigger?: boolean;
  title?: string;
  disableWrapper?: boolean;
  closeAfterOutsideClick?: boolean;
}

interface ComponentProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

Modal.displayName = 'ModalOverlay';

const asModal: (
  Component: FC
) => ({
  title,
  bigger,
  open,
  onClose,
  children,
  disableWrapper,
}: AsModalProps) => ReactElement = (Component: FC<ComponentProps>) => {
  return ({ open, onClose, title, bigger, children, disableWrapper }) => (
    <Modal {...{ open, onClose, title, bigger, disableWrapper }}>
      <Component {...{ open, onClose }}>{children}</Component>
    </Modal>
  );
};

export default asModal;

interface ModalHeaderPropd {
  onClose: () => void;
  setWindowSize: (a: (prev: string) => modalSizes) => void;
  title: string;
}

const ModalHeader: FC<ModalHeaderPropd> = ({ onClose, setWindowSize, title }) => {
  useEffect(() => {
    if (title === 'Medol') setWindowSize(() => modalSizes.big)

    return () => setWindowSize(() => modalSizes.small);
  }, []);
  return (
    <ModalHeaderContainer>
      <p>{title}</p>
      <div>
        <HideOnPhoneButton>
          <p>___</p>
        </HideOnPhoneButton>
        <button
          disabled={title === 'Medol'}
          onClick={() =>
            setWindowSize((prev) =>
              prev === modalSizes?.small ? modalSizes?.big : modalSizes?.small
            )
          }
        >
          <IconSquare width={20} />
        </button>
        <button onClick={onClose} className='cross'>
          <IconX width={20} />
        </button>
      </div>
    </ModalHeaderContainer>
  );
};

const ModalHeaderContainer = styled.div`
  background: white;
  /* background: #68904d; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  border-bottom: black 2px solid;
  /* border-bottom: #14471e 2px solid; */
  > div {
    display: flex;
  }
  > div > button {
    width: 36px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    border-left: black 2px solid;
    /* border-left: #14471e 2px solid; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    p {
      font-weight: 600;
      margin: 0px;
    }
  }
  > p {
    margin: 0px;
    padding: 4px 0px 4px 4px;
    font-weight: 700;
  }
`;

const HideOnPhoneButton = styled.button`
  @media (max-width: 768px) {
    display: none !important;
  }
`;

const ModalWrapper = styled.div<{ windowSize: string }>`
  z-index: 40;
  border: black 2px solid;
  // border: #14471e 2px solid;
  border-radius: ${({ windowSize }) => (windowSize === modalSizes?.small ? '4px' : '0')};
  width: ${({ windowSize }) => (windowSize === modalSizes?.small ? '640px' : '100vw')};
  height: ${({ windowSize }) =>
    windowSize === modalSizes?.small ? '576px' : 'calc(100vh - 58px)'};
  overflow: hidden;
  @media (max-width: 768px) {
    width: ${({ windowSize }) => (windowSize === modalSizes?.small ? '90vw' : '100vw')};
    height: ${({ windowSize }) =>
      windowSize === modalSizes?.small ? '60vh' : 'calc(100vh - 58px)'};
  }
`;

const ModalGreatwrapper = styled.div<{ windowSize: string }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${({ windowSize }) => (windowSize === modalSizes?.small ? '50%' : '0')};
  left: 50%;
  transform: ${({ windowSize }) =>
    windowSize === modalSizes?.small
      ? 'translateX(-50%) translateY(-50%)'
      : 'translateX(-50%) translateY(0)'};

  @media (max-width: 1024px) {
    top: ${({ windowSize }) => (windowSize === modalSizes?.small ? '50%' : '0')};
    left: ${({ windowSize }) => (windowSize === modalSizes?.small ? '50%' : '0')};
    transform: ${({ windowSize }) =>
      windowSize === modalSizes?.small
        ? 'translateX(-50%) translateY(-50%);'
        : 'translateX(0%) translateY(0%);'};
    max-height: 100vh;
  }
`;

const ModalBody = styled.div`
  height: calc(100% - 32px);
  overflow: hidden;
`;
