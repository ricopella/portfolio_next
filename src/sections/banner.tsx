const STYLES = {
  hero: {
    className: `hero min-h-screen bg-no-repeat`,
    style: {
      background:
        'url(https://media.giphy.com/media/Ca9TNthVXlWms/giphy.gif) center center/cover ',
    },
  },
  heroOverlay: {
    className: `hero-overlay bg-opacity-90`,
  },
  heroContentContainer: {
    className: `flex flex-col mx-auto w-4/5 break-words`,
  },
  heroMainHeading: {
    className: `text-3xl sm:text-5xl font-bold break-words mb-0 tracking-widest italic text-neutral-content`,
  },
  heroSubHeading: {
    className: `sm:text-2xl mt-0 tracking-widest italic text-primary`,
  },
};

export default function Banner() {
  return (
    <div id='#Home' {...STYLES.hero}>
      <div {...STYLES.heroOverlay} />
      <div {...STYLES.heroContentContainer}>
        <h1 {...STYLES.heroMainHeading}>Narin Rico</h1>
        <h1 {...STYLES.heroMainHeading}>Sundarabhaya</h1>
        <h2 {...STYLES.heroSubHeading}>Your Architect for the Digital World</h2>
      </div>
    </div>
  );
}
