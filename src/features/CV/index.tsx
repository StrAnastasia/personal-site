import styled from '@emotion/styled';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import photo from './IMG_9698.jpg';
import './cv.css';
import { useTranslation } from 'react-i18next';

const CV: FC = () => {
  const { t, i18n } = useTranslation();

  const showPicture = i18n.language === 'RUS';

  return (
    <CVWrapper>
      <RealPaddings className='noscrollbar'>
        <FlexDiv flex={showPicture}>
          <span>
            <NameTitle>{t('CVName')}</NameTitle>
            <Title>{t('CVEmail')}</Title>
            <Title>{t('CVPhone')}</Title>
            <RedTitle>{t('AboutMyselfTitle')}</RedTitle>
            <Text>{t('AboutMyself')} </Text>
            <BR two />
            <Text>
              <BoldText>{t('CVSkillsTitle')}</BoldText>
              {t('MySkills')}
            </Text>
          </span>
          {showPicture && (
            <Image alt='myphoto' src={photo} width={384 / 1.5} height={576 / 1.5} />
          )}
        </FlexDiv>
        <RedTitle>{t('WorkExperienceTitle')}</RedTitle>
        <BoldText>
          {t('BWGJob')}
          <SmallText>{t('BWGTime')}</SmallText>
        </BoldText>
        <BR two />
        <Text>
          <AddingLinks>{t('BWGExp')}</AddingLinks>
        </Text>
        <BR two />
        <Text>
          <BoldText>{t('CVStackTitle')}</BoldText> {t('BWGStack')}
        </Text>
        <BR three />
        <BoldText>
          {t('MATJob')}
          <SmallText>{t('MATTime')}</SmallText>
        </BoldText>
        <BR two />
        <Text>{t('MATExp')}</Text>
        <BR two />
        <Text>
          <BoldText>{t('CVStackTitle')}</BoldText> {t('MATStack')}
        </Text>
        <BR three />
        <BoldText>
          {t('ElbJob')}
          <SmallText>{t('ElbTime')}</SmallText>
        </BoldText>
        <BR two />
        <Text>{t('ElbStudyExpSubtitle')}</Text>
        <BR />
        <ol>
          <li>
            <Text>{t('ElbStudyExpOne')}</Text>
            <BR two />
          </li>
          <li>
            <Text>{t('ElbStudyExpTwo')}</Text>
          </li>
        </ol>
        <BR />
        <Text>
          <BoldText>{t('CVStackTitle')}</BoldText> {t('ElbStack')}
        </Text>
        <BR two />
        <Text>{t('ElbWorkExpSubtitle')}</Text>
        <BR three />
        <RedTitle>{t('EducationTitle')}</RedTitle>
        {t('EducationInfo')}
      </RealPaddings>
    </CVWrapper>
  );
};

const AddingLinks: FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  const string = String(children);
  const beforeLinks = string?.split(t('BWGLinkOne') || '')[0];
  const betweenLinks = string
    ?.split(t('BWGLinkOne') || '')[1]
    .split(t('BWGLinkTwo') || '')[0];
  const afterLinks = string
    ?.split(t('BWGLinkOne') || '')[1]
    .split(t('BWGLinkTwo') || '')[1];

  return (
    <>
      {beforeLinks}
      <a href={t('BWGLinkOne') || ''} target='_blank'>
        {t('BWGLinkOne')}
      </a>
      {betweenLinks}
      <a href={t('BWGLinkTwo') || ''} target='_blank'>
        {t('BWGLinkTwo')}
      </a>
      {afterLinks}
    </>
  );
};

const CVWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
`;

const RealPaddings = styled.div`
  padding: 24px 12px 50px;
  max-width: 1024px;
  width: 100%;
  overflow-y: scroll;
  > p {
    line-height: 20px;
  }
`;

const FlexDiv = styled.div<{ flex: boolean }>`
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  justify-content: space-between;
  > img {
    margin-left: 8px;
  }
  @media (max-width: 768px) {
    > img {
      display: none;
    }
  }
`;

const BR: FC<{ two?: boolean; three?: boolean }> = ({ two = false, three = false }) => {
  return (
    <>
      <br />
      {two && <br />}
      {three && <br />}
    </>
  );
};

const NameTitle = styled.h1``;

const Title = styled.h3``;

const RedTitle = styled.h3`
  color: red;
`;

const Text = styled.p`
  display: inline;
`;

const BoldText = styled.p`
  font-weight: bold;
  width: max-content;
  display: inline;
`;

const SmallText = styled.p`
  font-size: 14px;
  margin: 0px 0px 0px 4px;
  font-weight: normal;
  display: inline;
`;

export default CV;
