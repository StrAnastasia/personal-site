import { FC, ReactNode, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import FooterButtonWrapper from 'shared/footer-button-wrapper';
import CVIcon from 'features/CV/icon';
import OffSiteIcon from 'features/off-site/icon';
import { IconInfoTriangle } from '@tabler/icons-react';
import { ClickProps } from 'shared/hooks/use-get-features';

interface OnOffButtonProps extends ClickProps {
  turnOff: () => void;
}

const OnOffButton: FC<OnOffButtonProps> = ({ click, setClick, turnOff }) => {
  const [open, setOpen] = useState(false);

  const cb = useCallback(() => {
    turnOff();
    setClick('');
  }, []);

  return (
    <>
      <RelativeWrapper>
        <List opened={click.includes('onoff')}>
          <ListItem
            clicked={click === 'onoffCV'}
            onClick={() => setClick('onoffCV')}
            onDoubleClick={() => setOpen(true)}
          >
            <CVIcon onOffMenu open={open} setOpen={setOpen} />
          </ListItem>
          <ListItem
            clicked={click === 'onoffOFF'}
            onClick={cb}
            // onClick={() => setClick('onoffOFF')}
            // onDoubleClick={turnOff}
          >
            <OffSiteIcon />
          </ListItem>
        </List>
        <FooterButtonWrapper rightBorder onClick={() => setClick('onoff')}>
          <IconInfoTriangle color='black' />
          {/* <IconInfoTriangle color='#da6a00' /> */}
        </FooterButtonWrapper>
      </RelativeWrapper>
    </>
  );
};

export default OnOffButton;

const RelativeWrapper = styled.div`
  position: relative;
`;

const List = styled.ul<{ opened: boolean }>`
  display: ${({ opened }) => (opened ? 'block' : 'none')};
  position: absolute;

  background: white;
  // background: #c9acce;
  border: black solid 2px;
  // border: #da6a00 solid 2px;
  border-radius: 4px;
  width: 305px;
  height: 300px;
  top: -300px;
  left: 1px;
  padding: 12px;
  margin: 0px;
  list-style-type: none;
`;

const ListItem = styled.li<{ clicked: boolean; children: ReactNode }>`
  > div {
    background: ${({ clicked }) => (clicked ? 'rgb(0 0 0 / 25%)' : 'transparent')};
    display: flex;
    align-items: center;
    padding: 8px 0px;
    border-bottom: rgb(0 0 0 / 30%) solid 2px;
    // border-bottom: rgb(120 88 128 / 50%) solid 2px;
    cursor: pointer;
  }
  > div > svg {
    margin-right: 8px;
  }
`;

// const Icon = styled.div`
//   background: #da6a00;
//   width: 24px;
//   height: 24px;
// `;
