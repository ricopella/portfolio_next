const styles = {
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
    className: `lg:border-r-2 border-secondary`,
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
    className: 'grid gap-2 pr-4 m-4 md:m-0',
  },
  experienceHeading: {
    className:
      'pt-2 text-2xl border-b-2 border-solid border-secondary h-8 w-full capitalize leading-3',
  },
  experienceContainer: {
    className: 'grid',
  },
  experienceFirstTitleRow: {
    className: 'grid align-middle md:grid-cols-max-max-1fr grid-cols-1',
  },
  experienceFirstTitle: {
    className: `md:after:content-['_|_'] pr-2 font-bold text-sm`,
  },
  experienceTitleLink: {
    className: 'text-sm',
  },
  experienceFirstTitleDate: {
    className: 'md:justify-self-end text-xs',
  },
  experienceUl: {
    className: 'ps-3 text-xs',
  },
};

export default styles;
