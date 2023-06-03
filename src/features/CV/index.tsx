import styled from '@emotion/styled';
import Image from 'next/image';
import { FC } from 'react';
import photo from './IMG_9698.jpg';
import "./cv.css"

const CV: FC = () => {
  const showPicture = true;
  return (
    <CVWrapper>
      <RealPaddings className='noscrollbar'>
        <FlexDiv flex={showPicture}>
          <span>
            <NameTitle>Strygina Anastasia, Frontend Developer</NameTitle>
            <Title>E-mail: anastasia.s.front.dev@gmail.com</Title>
            <Title>Phone: +998 94 044 74 01</Title>
            <RedTitle>About myself</RedTitle>
            <Text>
              I’m a front-end developer with 3 years of experience writing in JS. I worked
              both in start-ups and large companies, developed both small projects
              (landing pages) and projects with complex architecture (bank applications),
              and was also the lead of a small development team. I love IT for endless
              opportunities to learn and develop as a specialist. Ready to communicate in
              English.
            </Text>
            <br />
            <br />
            <Text>
              Skills: JS, Typescript, React, Redux Toolkit, Next.js, SSR, react-query,
              Mantine, Tailwind, Bootstrap, Styled Components, CSS, English - C1. Also
              worked for a year according to Scrum (Jira).
            </Text>
          </span>
          {showPicture && (
            <Image alt='myphoto' src={photo} width={384 / 1.5} height={576 / 1.5} />
          )}
        </FlexDiv>
        <RedTitle>Work experience</RedTitle>
        <BoldText>
          Black Wall Group, Moscow – frontend developer
          <SmallText>(December 2021 - present)</SmallText>
        </BoldText>
        <br />
        <br />
        <Text>
          Together with the team, we developed a crypto-exchange aggregator
          (https://exnode.ru), it became popular in the field and the traffic was quite
          high. We also finalized the draft version of the banking application
          (https://attex.io/welcome), added many features and successfully launched the
          project, which now has regular users.
        </Text>
        <br />
        <br />
        <Text>
          <BoldText>Stack:</BoldText> React, Redux toolkit, Next.js, SSR, Typescript,
          react-query, hcaptcha, Mantine, Tailwind, Styled Components, CSS, axois, Scrum
          methodologies (Trello and Jira)
        </Text>
        <br />
        <br />
        <br />
        <BoldText>
          MyAppTop, Moscow – frontend developer{' '}
          <SmallText>(November 2020 — December 2021)</SmallText>
        </BoldText>
        <br />
        <br />
        <Text>
          Being the sole front-end developer, I was responsible for all the company's
          websites and created a number of websites from scratch (several landing pages, a
          site for buying ads for applications and sites and a web application for cloud
          mining). I also hosted the sites on domains
        </Text>
        <br />
        <br />
        <Text>
          <BoldText>Stack:</BoldText> React, Redux toolkit, CSS, axois, email.js
        </Text>
        <br />
        <br />
        <br />
        <BoldText>
          Elbrus Bootcamp, Moscow – fullstack developer
          <SmallText>(May 2020 — November 2020)</SmallText>
        </BoldText>
        <br />
        <br />
        <Text>During my studies, I implemented two projects:</Text>
        <br />
        <br />
        <ol>
          <li>
            <Text>
              Aggregator of music concerts and events. In this project, I was the
              ideological inspirer and team leader, I was responsible for the backend part
              of the project. And also I wrote a mini-game in React from scratch
            </Text>
            <br />
            <br />
          </li>
          <li>
            <Text>
              Application for introducing teenagers to different professions. In this
              project, I was fully responsible for the backend and helped my colleagues
              with the frontend part of the site
            </Text>
          </li>
        </ol>
        <br />
        <br />
        <Text>
          <BoldText>Stack:</BoldText> Express, Node.js, HBS, MongoDB, Bootstrap, Sessions
          and Cookies, React, Redux Toolkit, CSS, Firebase, Google Map API, Passport, JWT
          and Auth0, Photoshop 2020
        </Text>
        <br />
        <br />
        <Text>
          After studying, I continued to work at the bootcamp online and offline, helping
          other students with learning
        </Text>
        <br />
        <br />
        <br />
        <RedTitle>Education</RedTitle>
        August 2018 –November 2020 Moscow State Linguistic University – aldente-Bachelor
        (Portuguese, English)
      </RealPaddings>
    </CVWrapper>
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
`;

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
