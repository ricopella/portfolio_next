const styles = {
  container: {
    className: `prose grid gap-4 grid-cols-1 py-4 my-24 mx-auto rounded-md drop-shadow-lg bg-base-200 lg:w-resumeDesktop lg:max-w-resumeDesktop lg:h-resumeDesktop w-resumeSmall max-w-resumeSmall`,
    style: {
      gridTemplateRows: `8rem 1fr`,
    },
  },
  heading: {
    className: `grid relative w-full  sm:grid-cols-4 grid-cols-1`,
  },
  headingImage: {
    className: `col-span-1 align-middle justify-center hidden md:grid`,
  },
  headingContent: {
    className: `p-4 align-middle col-span-3 grid h-full justify-center`,
  },
  headingInner: {
    className: `h-max my-auto`,
  },
  headingTitle: {
    className: `text-2xl mb-0 forrest:text-neutral-content`,
  },
  headingSubtitle: {
    className: `text-sm my-0 forrest:text-neutral-content`,
  },
  headingDescription: {
    className: `text-xs mb-0 forrest:text-neutral-content hidden sm:grid`,
  },
  columnOne: {
    className: `grid gap-4 overflow-hidden md:grid-cols-resumeBodyDesktop grid-rows-max-2`,
  },
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
    className: `lg:border-r-2 border-primary`,
  },
  infoColumnHeading: {
    className: `bg-primary h-8 w-5/6 pl-4 leading-8`,
  },
  skillsContainer: {
    className: `grid grid-row-auto p-4 pb-0 gap-1`,
  },
  skillRow: {
    className: `grid gap-2 border-b-2 border-primary`,
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
      'pt-2 text-2xl border-b-2 border-solid border-primary h-8 w-full capitalize leading-3',
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
    className: 'ps-3 text-xs list-disc',
  },
  educationBody: {
    className: 'grid px-4',
  },
  educationItem: {
    className: 'grid',
  },
  educationTitle: {
    className: `font-bold border-b-2 border-solid border-primary mt-0`,
  },
  educationType: {
    className: 'text-sm mb-0',
  },
  educationYear: {
    className: 'text-xs',
  },
};

export default styles;
