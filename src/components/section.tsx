import Animated from './animated';

export default function Section({
  children,
  title,
  childStyles,
  fullScreen = true,
  id,
  sectionStyles,
}: {
  children: React.ReactNode;
  title?: string;
  childStyles?: string;
  fullScreen?: boolean;
  id: string;
  sectionStyles?: string;
}) {
  return (
    <section
      className={`grid items-center justify-center overflow-hidden ${
        fullScreen ? 'min-h-screen' : ''
      } py-10 ${sectionStyles ?? ''}`}
      id={id}
    >
      {title && (
        <div className='relative mx-auto md:w-4/5 row-span-1'>
          <h1 className='text-2xl sm:text-3xl md:divider text-bold overflow-wrap break-words whitespace-normal text-center tracking-widest italic'>
            {title}
          </h1>
        </div>
      )}
      <Animated className={`flex flex-col${childStyles ?? ''}`} key={id}>
        {children}
      </Animated>
    </section>
  );
}
