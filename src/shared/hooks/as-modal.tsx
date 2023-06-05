import { useRef, memo, FC, ReactNode, ReactElement, useState } from 'react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { IconSquare, IconX } from '@tabler/icons-react';

enum modalSizes {
  small = 'small',
  big = 'big',
}

const Modal = memo(({ open, onClose, title, children }: AsModalProps) => {
  let ref = useRef<HTMLDivElement>(null);
  let externalRef = useRef<HTMLElement>();
  const [windowSize, setWindowSize] = useState(modalSizes?.small);
  useEffect(() => {
    externalRef.current = document.body;
  }, []);
  return (
    <>
      {open &&
        externalRef.current &&
        createPortal(
          <ModalGreatwrapper>
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
  open,
  onClose,
  children,
  disableWrapper,
}: AsModalProps) => ReactElement = (Component: FC<ComponentProps>) => {
  return ({ open, onClose, title, children, disableWrapper }) => (
    <Modal {...{ open, onClose, title, disableWrapper }}>
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
  return (
    <ModalHeaderContainer>
      <p>{title}</p>
      <div>
        <HideOnPhoneButton>
          <p>___</p>
        </HideOnPhoneButton>
        <button
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
  background: #cbd225;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  border-bottom: #276039 2px solid;
  > div {
    display: flex;
  }
  > div > button {
    width: 36px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    border-left: #276039 2px solid;
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
  }
`;

const HideOnPhoneButton = styled.button`
  @media (max-width: 765px) {
    display: none !important; 
  }
`;

const ModalWrapper = styled.div<{ windowSize: string }>`
  z-index: 40;
  border: #276039 2px solid;
  border-radius: 4px;
  width: ${({ windowSize }) => (windowSize === modalSizes?.small ? '640px' : '100vw')};
  height: ${({ windowSize }) => (windowSize === modalSizes?.small ? '576px' : '100vh')};
  overflow: hidden;
  @media (max-width: 765px) {
    width: ${({ windowSize }) => (windowSize === modalSizes?.small ? '90vw' : '100vw')};
    height: ${({ windowSize }) => (windowSize === modalSizes?.small ? '60vh' : '100vh')};
  }
`;

const ModalGreatwrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const ModalBody = styled.div`
  height: calc(100% - 32px);
  overflow: hidden;
`;
