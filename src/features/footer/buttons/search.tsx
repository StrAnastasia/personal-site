import { FC, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import FooterButtonWrapper from 'shared/footer-button-wrapper';
import { IconListSearch } from '@tabler/icons-react';
import useGetFeatures, { ClickProps, FeatureType } from 'shared/hooks/use-get-features';
import { useTranslation } from 'react-i18next';
import './no-scrollbar.css';

const Search: FC<ClickProps> = (clickProps) => {
  const features = useGetFeatures(clickProps);
  const [filterString, setFilterString] = useState('');
  const { t } = useTranslation();

  const InputRef = useRef<HTMLInputElement>(null);

  const filteredFeatures = useMemo(() => {
    return [...features].filter((el: FeatureType) => {
      const adjustedFilterString = filterString
        ?.replace(' ', '')
        ?.replace('-', '')
        ?.toLowerCase();
      const adjustedLabel = el.label?.replace(' ', '')?.replace('-', '')?.toLowerCase();
      return adjustedLabel.includes(adjustedFilterString);
    });
  }, [filterString, features]);

  return (
    <RelativeComponent
      onClick={() => {
        clickProps?.setClick('search');
        InputRef?.current?.focus();
      }}
    >
      <MenuListWrapper
        className='no-scrollbar'
        opened={clickProps.click.includes('search')}
      >
        {filteredFeatures.map(({ searchButton }, id) => (
          <MenuListItem key={id}>{searchButton}</MenuListItem>
        ))}
      </MenuListWrapper>
      <FooterButtonWrapper rightBorder>
        <IconListSearch color='black' />
        {/* <IconListSearch color='#da6a00' /> */}
        <StyledInput
          ref={InputRef}
          placeholder={t('search') || ''}
          value={filterString}
          onChange={({ target }) => setFilterString(target?.value)}
        />
      </FooterButtonWrapper>
    </RelativeComponent>
  );
};

export default Search;

const RelativeComponent = styled.div`
  position: relative;
`;

const MenuListWrapper = styled.div<{ opened: boolean }>`
  display: ${({ opened }) => (opened ? 'block' : 'none')};
  position: absolute;

  background: white;
  // background: #c9acce;
  border: black solid 2px;
  // border: #da6a00 solid 2px;
  border-radius: 4px;
  width: calc(100% + 2px);
  height: 250px;
  top: -250px;
  left: -2px;
  padding: 12px;
  overflow: scroll;
`;

const MenuListItem = styled.div`
  display: flex;
  border-bottom: rgb(0 0 0 / 30%) solid 2px;
  /* border-bottom: rgb(120 88 128 / 50%) solid 2px; */
`;

const StyledInput = styled.input`
  width: 10vw;
  outline: none;
  border: none;
  border-radius: 24px;
  height: 24px;
  margin-left: 8px;
  font-size: 16px;
  cursor: pointer;
  border: black 2px solid;
  padding: 16px;
  @media (max-width: 768px) {
    width: 30vw;
  }
`;
