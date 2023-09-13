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
    inline: {
      gridTemplateColumns: `1fr max-content`,
    },
  },
  skillValue: {
    className: 'grid grid-cols-5 gap-1 align-middle',
  },
  skillName: {
    className: '',
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

const Skills = () => {
  return (
    <div className={STYLES.infoColumnContainer.className}>
      <h4 className={STYLES.infoColumnHeading.className}>SKILLS</h4>
      <div className={STYLES.skillsContainer.className}>
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className={STYLES.skillRow.className}
            style={STYLES.skillRow.inline}
          >
            <div className={STYLES.skillValue.className}>
              {[...new Array(skill.level)].map((_, y) => (
                <div key={`skill_star_${skill.name}_${y}}`}>X</div>
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
        <div>Heading</div>
        <div
          className='grid gap-4 '
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
          <div>Second</div>
        </div>
      </div>
    </main>
  );
}
