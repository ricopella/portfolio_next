import Animated from './animated';

const STYLES = {
  section: `grid items-center justify-center overflow-hidden py-10`,
  sectionChildrenContainer: `flex flex-col`,
  title: `text-2xl sm:text-3xl md:divider text-bold overflow-wrap break-words whitespace-normal text-center tracking-widest italic`,
  titleContainer: `relative mx-auto md:w-4/5 row-span-1`,
};

export default function Section({
  children,
  childStyles,
  fullScreen = true,
  id,
  sectionStyles,
  title,
}: {
  children: React.ReactNode;
  childStyles?: string;
  fullScreen?: boolean;
  id: string;
  sectionStyles?: string;
  title?: string;
}) {
  return (
    <section
      className={`${STYLES.section} ${fullScreen ? 'min-h-screen' : ''} ${
        sectionStyles ?? ''
      }`}
      id={id}
    >
      {title && (
        <div className={STYLES.titleContainer}>
          <h1 className={STYLES.title}>{title}</h1>
        </div>
      )}
      <Animated
        className={`${STYLES.sectionChildrenContainer} ${childStyles ?? ''}`}
        key={id}
      >
        {children}
      </Animated>
    </section>
  );
}
