import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'ENG',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ENG: {
      translation: {
        ENG: 'ENG',
        RUS: 'RUS',
        welcome: 'Welcome!',
        loading: 'Loading',
        miniGameLabel: 'MiniGame',
        CVLabel: 'CV',
        CheckCV: 'Open CV',
        turnOff: 'Turn off',
        search: 'Search',
        CVName: 'Strygina Anastasia, Frontend Developer',
        CVEmail: 'E-mail: anastasia.s.front.dev@gmail.com',
        CVPhone: 'Phone: +998 94 044 74 01',
        AboutMyselfTitle: 'About myself',
        AboutMyself:
          'I’m a front-end developer with 3 years of experience writing in JS. I worked both in start-ups and large companies, developed both small projects (landing pages) and projects with complex architecture (bank applications), and was also the lead of a small development team. I love IT for endless opportunities to learn and develop as a specialist. Ready to communicate in English.',
        CVSkillsTitle: 'Skills: ',
        CVStackTitle: 'Stack: ',
        MySkills:
          'JS, Typescript, React, Redux Toolkit, Next.js, SSR, react-query, Mantine, Tailwind, Bootstrap, Styled Components, CSS, English - C1, Portuguese - B1. Also worked for a year according to Scrum (Jira).',
        WorkExperienceTitle: 'Work experience',
        BWGJob: 'Black Wall Group, Moscow – frontend developer',
        BWGTime: '(December 2021 - June 2023)',
        BWGExp:
          'Together with the team, we developed a crypto-exchange aggregator (https://exnode.ru), it became popular in the field and the traffic was quite high. We also finalized the draft version of the banking application (https://attex.io/welcome), added many features and successfully launched the project, which now has regular users.',
        BWGLinkOne: 'https://exnode.ru',
        BWGLinkTwo: 'https://attex.io/welcome',
        BWGStack:
          'React, Redux toolkit, Next.js, SSR, Typescript, react-query, hcaptcha, Mantine, Tailwind, Styled Components, CSS, axois, Scrum methodology (Trello and Jira).',

        MATJob: 'MyAppTop, Moscow – frontend developer',
        MATTime: '(November 2020 — December 2021)',
        MATExp:
          "Being the sole front-end developer, I was responsible for all the company's websites and created a number of websites from scratch (several landing pages, a site for buying ads for applications and sites and a web application for cloud mining). I also hosted the sites on domains.",
        MATStack: 'React, Redux toolkit, CSS, axois, email.js.',

        ElbJob: 'Elbrus Bootcamp, Moscow – fullstack developer',
        ElbTime: '(May 2020 — November 2020)',
        ElbStudyExpSubtitle: 'During my studies, I implemented two projects:',
        ElbStudyExpOne:
          'Aggregator of music concerts and events. In this project, I was the ideological inspirer and team leader, I was responsible for the backend part of the project. And also I wrote a mini-game in React from scratch.',
        ElbStudyExpTwo:
          'Application for introducing teenagers to different professions. In this project, I was fully responsible for the backend and helped my colleagues with the frontend part of the site.',
        ElbStack:
          'Express, Node.js, HBS, MongoDB, Bootstrap, Sessions and Cookies, React, Redux Toolkit, CSS, Firebase, Google Map API, Passport, JWT and Auth0, Photoshop 2020.',
        ElbWorkExpSubtitle:
          'After studying, I continued to work at the bootcamp online and offline, helping other students with learning.',

        EducationTitle: 'Education',
        EducationInfo:
          'August 2018 – November 2020 Moscow State Linguistic University – aldente-Bachelor (Portuguese, English)',

        MiniGameOptOne: '> throw a coin',
        MiniGameOptTwo: '> sing along',
        MiniGameOptThree: 'or better...',
        MiniGameOptFour: '> drink beer with them',
        MiniGameFinOne: 'drinking in public?',
        MiniGameFinTwo: "here's tour fine: a smile",
        MiniGameStartAgain: 'start again',
      },
    },
    RUS: {
      translation: {
        ENG: 'АНГЛ',
        RUS: 'РУС',
        welcome: 'Добро пожаловать!',
        loading: 'Загрука',
        miniGameLabel: 'Мини-игра',
        CVLabel: 'Резюме',
        CheckCV: 'Просмотреть резюме',
        turnOff: 'Выключить',
        search: 'Поиск',

        CVName: 'Стрыгина Анастасия, Frontend Developer',
        CVPhone: 'Телефон: +998 94 044 74 01',
        AboutMyselfTitle: 'Обо мне',
        AboutMyself:
          'Фронтенд разработчик с 3 годами опыта, пишу на JS. Работала как в стартапах, так и больших корпорациях, писала как небольшие проекты (лендинги), так и проекты со сложной архитектурой (банковские прилолжеиня), также была лидом небольшой команды разработчиков. Обожаю IT за бесконечные возможности учиться и развиваться как специалисту. Готова к коммуникации на английском.',
        CVSkillsTitle: 'Навыки: ',
        MySkills:
          'JS, Typescript, React, Redux Tool Kit, Next.js, SSR, react-query, Mantine, Tailwind, Bootstrap, Styled Components, CSS, английский - C1, португальский - B1. Также год работала по методологии Scrum (Jira).',
        WorkExperienceTitle: 'Work experience',
        BWGTime: '(Декабрь 2021 - Июнь 2023)',
        BWGExp:
          'Вместе с командой разработали аггрегатор крипто-обменников (https://exnode.ru), благодаря работе с нашими маркетологами, на обоих сайтах повысилась посещаемость. А также мы доработали черновую версию банковского приложения (https://attex.io/welcome), успешно запустили проект, в котором теперь есть постоянные пользователи.',
        BWGStack:
          'React, Redux toolkit, Next.js, SSR, Typescript, react-query, hcaptcha, Mantine, Tailwind, Styled Components, CSS, axois, Scrum методологии (Trello and Jira).',
        MATTime: '(Ноябрь 2020 — Декабрь 2021)',
        MATExp:
          'Будучи единственным фронтенд разработчиком, отвечала за все сайты компании создала с нуля ряд сайтов (несколько лендингов, сайт для покупки рекламы приложений и сайтов и веб-приложение для облачного майнинга). Вместе с командой создавали для приложений бек и дизайн. А также размещала сайты на доменах.',
        ElbTime: '(Май 2020 — Ноябрь 2020)',
        ElbStudyExpSubtitle: 'Во время учебы я реализовала два проекта:',
        ElbStudyExpOne:
          'Агрегатор музыкальных концертов и мероприятий. В этом проекте я была идейным вдохновителем и тим-лидом, отвечала за бекенд часть проекта. А также я с нуля написала мини-игру на React.',
        ElbStudyExpTwo:
          'Приложение для ознакомления подростков с разными профессиями. В данном проекте я отвечала полностью за бекенд и помогала коллегам  фронтенд частью сайта.',
        ElbWorkExpSubtitle:
          'После обучения продолжила работать в буткемпе онлайн и офлайн, помогала другим студентам с обучением и выполнением заданий.',

        EducationTitle: 'Образование',
        EducationInfo:
          'Август 2018 – Ноябрь 2020 Московский Государственный Лингвистический – альденте-бакалавр (португальский, английский)',

        MiniGameOptOne: '> бросить музыкантам монетку',
        MiniGameOptTwo: '> подпеть',
        MiniGameOptThree: 'или лучше...',
        MiniGameOptFour: '> выпить c музыкантами пенного',
        MiniGameFinOne: 'распиваете в общественном месте?',
        MiniGameFinTwo: ' вам штраф: улыбочка',
        MiniGameStartAgain: 'начать заново',
      },
    },
  },
});

export default i18n;
