import styled from '@emotion/styled';
import { Cookie, cookies } from '../../../app/cookie';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageProps {
  click: string;
  setClick: (a: string) => void;
}

const Language: FC<LanguageProps> = ({ click, setClick }) => {
  const { t, i18n } = useTranslation();

  const lngs = [
    { code: 'ENG', label: t('ENG') },
    { code: 'RUS', label: t('RUS') },
  ];

  const handleTrans = (code: string) => {
    i18n.changeLanguage(code);
    cookies.set(Cookie.lang, code);
  };

  return (
    <SelfWritterSelect onClick={() => setClick('language')}>
      <OptionsWrapper open={click === 'language'}>
        {lngs.map(({ code, label }, id) => (
          <div key={id} onClick={() => handleTrans(code)}>
            {label}
          </div>
        ))}
      </OptionsWrapper>
      {t(i18n.language)}
    </SelfWritterSelect>
  );
};

export default Language;

const SelfWritterSelect = styled.div`
  width: 46px;
  background: transparent;
  border: none;
  outline: none;
  position: relative;
  text-align: center;

`;

const OptionsWrapper = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;

  width: 84px;
  background: #c9acce;
  border: #da6a00 3px solid;
  border-radius: 4px;
  padding: 12px 16px;
  top: -124px;
  left: -19px;
  > div {
    padding: 8px 0px;
    border-bottom: #da6a00 3px solid;
  }
`;
