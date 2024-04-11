import { FC, useRef, useState } from 'react';
import styled from '@emotion/styled';
import FooterButtonWrapper from 'shared/footer-button-wrapper';
import { IconListSearch } from '@tabler/icons-react';
import useGetFeatures, { FetureType } from 'shared/hooks/use-get-features';
import { useTranslation } from 'react-i18next';

interface SearchProps {
  click: string;
  setClick: (a: string) => void;
}

const Search: FC<SearchProps> = (clickProps) => {
  const features = useGetFeatures(clickProps);
  const [filterString, setFilterString] = useState('');
  const { t } = useTranslation();

  function filterItems(el: FetureType) {
    const adjustedFilterString = filterString
      ?.replace(' ', '')
      ?.replace('-', '')
      ?.toLowerCase();
    const adjustedLabel = el.label?.replace(' ', '')?.replace('-', '')?.toLowerCase();
    return adjustedLabel.includes(adjustedFilterString);
  }

  const InputRef = useRef<HTMLInputElement>(null);

  return (
    <RelativeComponent
      onClick={() => {
        clickProps?.setClick('search');
        InputRef?.current?.focus();
      }}
    >
      <MenuListWrapper opened={clickProps.click.includes('search')}>
        {features.filter(filterItems).map(({ searchButton }, id) => (
          <MenuListItem key={id}>{searchButton}</MenuListItem>
        ))}
      </MenuListWrapper>
      <FooterButtonWrapper rightBorder>
        <IconListSearch color='#da6a00' />
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

  background: #c9acce;
  border: #da6a00 solid 3px;
  border-radius: 4px;
  width: calc(100% + 3px);
  height: 250px;
  top: -250px;
  left: -3px;
  padding: 12px;
  overflow: scroll;
`;

const MenuListItem = styled.div`
  display: flex;
  border-bottom: rgb(120 88 128 / 50%) solid 3px;
`;

const StyledInput = styled.input`
  width: 10vw;
  outline: none;
  border: none;
  border-radius: 24px;
  height: 24px;
  padding: 4px 8px;
  margin-left: 8px;
  font-size: 16px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 30vw;
  }
`;
