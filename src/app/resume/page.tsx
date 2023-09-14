'use client';

const STYLES = {
  contactRowItem: {
    className: `grid px-4 gap-2 text-xs`,
    inline: {
      gridTemplateColumns: `max-content 1fr`,
    },
  },
  contactRowKey: {
    className: `my-0`,
  },
  contactRowValue: {
    className: `my-0 justify-self-end`,
  },
  infoColumnContainer: {
    className: `border-r-2 border-secondary`,
  },
  infoColumnHeading: {
    className: `bg-secondary h-8 w-5/6 pl-4 leading-8`,
  },
  skillsContainer: {
    className: `grid grid-row-auto p-4 pb-0 gap-1`,
  },
  skillRow: {
    className: `grid gap-2 border-b-2 border-secondary`,
    style: {
      gridTemplateColumns: `1fr max-content`,
    },
  },
  skillValue: {
    className: 'grid gap-1 align-middle',
    style: {
      gridTemplateColumns: `repeat(5, max-content)`,
    },
  },
  skillName: {
    className: '',
  },
  experienceBody: {
    className: 'grid gap-2 pr-4',
  },
  experienceHeading: {
    className:
      'pt-2 text-2xl border-b-2 border-solid border-secondary h-8 w-full capitalize leading-3',
  },
  experienceContainer: {
    className: 'grid',
  },
  experienceFirstTitleRow: {
    className: 'grid',
    style: {
      gridTemplateColumns: 'max-content max-content 1fr',
    },
  },
  experienceFirstTitle: {
    className: `after:content-['_|_'] pr-2 font-bold text-sm`,
  },
  experienceTitleLink: {
    className: 'text-sm',
  },
  experienceFirstTitleDate: {
    className: 'justify-self-end text-xs',
  },
  experienceUl: {
    className: 'ps-3 text-xs',
  },
};

const Contact = () => {
  return (
    <div className={STYLES.infoColumnContainer.className}>
      <h4 className={STYLES.infoColumnHeading.className}>CONTACT</h4>
      <div className='flex flex-col gap-2'>
        <div
          className={STYLES.contactRowItem.className}
          style={STYLES.contactRowItem.inline}
        >
          <p className={STYLES.contactRowKey.className}>Location:</p>
          <p className={STYLES.contactRowValue.className}>Los Angeles, CA</p>
        </div>
        <div
          className={STYLES.contactRowItem.className}
          style={STYLES.contactRowItem.inline}
        >
          <p className={STYLES.contactRowKey.className}>Phone:</p>
          <a
            href='tel:+14242618290'
            target='_blank'
            rel='noopener noreferrer'
            className={STYLES.contactRowValue.className}
          >
            424-261-8290
          </a>
        </div>
        <div
          className={STYLES.contactRowItem.className}
          style={STYLES.contactRowItem.inline}
        >
          <p className={STYLES.contactRowKey.className}>Email:</p>
          <a
            href='mailto=narinsun2020@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className={STYLES.contactRowValue.className}
          >
            nrs710@gmail.com
          </a>
        </div>
        <div
          className={STYLES.contactRowItem.className}
          style={STYLES.contactRowItem.inline}
        >
          <p className={STYLES.contactRowKey.className}>Github:</p>
          <a
            href='https://github.com/ricopella'
            target='_blank'
            rel='noopener noreferrer'
            className={STYLES.contactRowValue.className}
          >
            @ricopella
          </a>
        </div>
        <div
          className={STYLES.contactRowItem.className}
          style={STYLES.contactRowItem.inline}
        >
          <p className={STYLES.contactRowKey.className}>LinkedIn:</p>
          <a
            href='https://www.linkedin.com/in/nsundara/'
            target='_blank'
            rel='noopener noreferrer'
            className={STYLES.contactRowValue.className}
          >
            @nsundara
          </a>
        </div>
      </div>
    </div>
  );
};

const SKILLS = [
  {
    name: 'React',
    level: 5,
  },
  {
    name: 'TypeScript',
    level: 5,
  },
  {
    name: 'CSS',
    level: 5,
  },
  {
    name: 'Node',
    level: 4,
  },
  {
    name: 'GraphQL',
    level: 4,
  },
  {
    name: 'SQL',
    level: 4,
  },
  {
    name: 'Express',
    level: 4,
  },
];

const Star = () => {
  return (
    <div className='flex flex-row-reverse items-center'>
      <svg
        width='12'
        height='12'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
        ></path>
      </svg>
    </div>
  );
};

const Skills = () => {
  return (
    <div className={STYLES.infoColumnContainer.className}>
      <h4 className={STYLES.infoColumnHeading.className}>SKILLS</h4>
      <div className={STYLES.skillsContainer.className}>
        {SKILLS.map((skill) => (
          <div key={skill.name} {...STYLES.skillRow}>
            <div {...STYLES.skillValue}>
              {[...new Array(skill.level)].map((_, y) => (
                <Star key={`skill_star_${skill.name}_${y}}`} />
              ))}
            </div>
            <div className={STYLES.skillName.className}>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className={STYLES.infoColumnContainer.className}>
      <h4 className={STYLES.infoColumnHeading.className}>Education</h4>
      <div className='grid px-4'>
        <div className='grid'>
          <h4 className='font-bold border-b-2 border-solid border-secondary mt-0'>
            UCLA Extension
          </h4>
          <p className='text-sm mb-0'>
            Full-Stack Web Development Certification
          </p>
          <i className='text-sm'>2017</i>
        </div>

        <div className='grid'>
          <h4 className='font-bold border-b-2 border-solid border-secondary'>
            Johnson & Wales University
          </h4>
          <p className='text-sm mb-0'>Bachelor of Arts</p>
          <i className='text-sm'>2015-2009</i>
          <p className='text-xs mb-0'>+ GPA 3.8 of 4.0</p>
        </div>

        <div className='grid'>
          <h4 className='font-bold border-b-2 border-solid border-secondary'>
            Scrum Alliance
          </h4>
          <p className='text-sm mb-0'>Certified Scrum Master</p>
          <i className='text-sm'>2018</i>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div {...STYLES.experienceBody}>
      <h4 {...STYLES.experienceHeading}>Experience</h4>
      <div {...STYLES.experienceContainer}>
        <div>
          <div {...STYLES.experienceFirstTitleRow}>
            <div {...STYLES.experienceFirstTitle}>Co-Owner / Developer</div>
            <a
              href='https://polyhedronprojects.com'
              target='_blank'
              rel='noopener noreferrer'
              {...STYLES.experienceTitleLink}
            >
              Polyhedron Projects, LLC
            </a>
            <i {...STYLES.experienceFirstTitleDate}>2017 - Present</i>
          </div>
          <ul {...STYLES.experienceUl}>
            <li>
              Video Chat Application: Developed a Twilio-based video chat MVP
              hosted on Vercel, aiding a client in securing initial funding.
            </li>
            <li>
              3D Web App Revamp: Collaborated on enhancing a 3D architectural
              tool; introducing responsiveness, account features, and
              streamlined code via custom hooks.
            </li>
            <li>
              API & E-commerce Integration: Built an inventory & sales API
              linked with major platforms like Jet.com and Amazon; skillfully
              managed weekly sprints and a six-member team.
            </li>
            <li>
              Shopify Stores Creation: Customized e-commerce sites for diverse
              sectors, ensuring seamless client transition post-launch.
            </li>
            <li>
              Custom Website Solutions: Delivered tailored sites on platforms
              like Wix, embedding features such as custom calendars and
              automated booking services.
            </li>
          </ul>
        </div>
        <div>
          <div {...STYLES.experienceFirstTitleRow}>
            <div {...STYLES.experienceFirstTitle}>Software Engineer III</div>
            <a
              href='https://alpha.io'
              target='_blank'
              rel='noopener noreferrer'
              {...STYLES.experienceTitleLink}
            >
              Alpha.io Inc
            </a>
            <i {...STYLES.experienceFirstTitleDate}>June 2020 - Sept 2023</i>
          </div>
          <ul {...STYLES.experienceUl}>
            <li>
              Innovative Features: Added integration with OpenAI for specialized
              features, like AI-assisted SQL syntax error correction &
              TypeChat-powered user prompt conversions.
            </li>
            <li>
              TypeScript Conversion: Transformed the frontend (React) & backend
              (Node.JS) to TypeScript, bolstering code stability & readability.
            </li>
            <li>
              API Integrations & OAuth Implementation: Integrated Slack, Google
              Ads, Sheets, BigQuery, Facebook Marketing, Snowflake & more.
              Executed full OAuth flow, enhancing security & authorization.
            </li>
            <li>
              Client-Specific Development & Optimization: Developed NextJS sites
              for top clients, boosting conversions from thousands of daily
              visits; implemented weekly A+B tests across devices to optimize
              user experience.
            </li>
            <li>
              Analytics: Incorporated segment.com, enabling comprehensive
              tracking of page views, user segmentation, and event activities.
            </li>
            <li>Promoted from Software Engineer II to III in 2021.</li>
          </ul>
        </div>

        <div>
          <div {...STYLES.experienceFirstTitleRow}>
            <div {...STYLES.experienceFirstTitle}>Frontend Developer II</div>
            <a
              href='https://fan.ai'
              target='_blank'
              rel='noopener noreferrer'
              {...STYLES.experienceTitleLink}
            >
              FanAI Inc.
            </a>
            <i {...STYLES.experienceFirstTitleDate}>Dec 2017 - June 2020</i>
          </div>
          <ul {...STYLES.experienceUl}>
            <li>
              Created data visualizations and dashboards built with Redux &
              Highcharts. Examples: social following & interactions (twitter &
              twitch), demographics, purchase behaviors, and cookie tracking
              analytics.
            </li>
            <li>
              Converted desktop only application to mobile friendly and fully
              responsive using React-Responsive and CSS Grid, added animations
              for page changes and user interactions using Framer-Motion.
            </li>
            <li>
              Improved UX by reducing network calls by 80% with in-browser
              caching.
            </li>
            <li>Promoted from Frontend Developer I to II in 2019.</li>
          </ul>
        </div>

        <div>
          <div {...STYLES.experienceFirstTitleRow}>
            <div {...STYLES.experienceFirstTitle}>Teacher Assistant</div>
            <a
              href='https://fan.ai'
              target='_blank'
              rel='noopener noreferrer'
              {...STYLES.experienceTitleLink}
            >
              UCLA Extension
            </a>
            <i {...STYLES.experienceFirstTitleDate}>Sept 2017 - Dec 2017</i>
          </div>
          <div {...STYLES.experienceFirstTitleRow}>
            <div {...STYLES.experienceFirstTitle}>Sr. Client Manager</div>
            <a
              href='https://fan.ai'
              target='_blank'
              rel='noopener noreferrer'
              {...STYLES.experienceTitleLink}
            >
              Kforce, Inc.
            </a>
            <i {...STYLES.experienceFirstTitleDate}>Aug 2015 - Oct 2017</i>
          </div>
          <div {...STYLES.experienceFirstTitleRow}>
            <div {...STYLES.experienceFirstTitle}>
              Vice President, Sales & Project Management
            </div>
            <a
              href='https://fan.ai'
              target='_blank'
              rel='noopener noreferrer'
              {...STYLES.experienceTitleLink}
            >
              PSE Agency
            </a>
            <i {...STYLES.experienceFirstTitleDate}>July 2009 - Aug 2015</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Resume() {
  return (
    <main className='flex min-h-screen min-w-full flex-col prose relative'>
      <div
        className='grid gap-4 grid-cols-1 py-4 my-24 mx-auto rounded-md drop-shadow-lg min-h-full'
        style={{
          height: `297mm`,
          width: `210mm`,
          backgroundColor: `rgb(55, 55, 55)`,
          gridTemplateRows: `10rem 1fr`,
        }}
      >
        HEADER COMING SOON
        <div
          className='grid gap-4 overflow-hidden'
          style={{
            gridTemplateColumns: `13.5rem 1fr`,
            gridTemplateRows: `repeat(2, max-content)`,
          }}
        >
          <div>
            <Contact />
            <Skills />
            <Education />
          </div>
          <Experience />
        </div>
      </div>
    </main>
  );
}
