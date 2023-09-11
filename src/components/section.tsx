export default function Section({
  children,
  title,
  childStyles,
  fullScreen = true,
}: {
  children: React.ReactNode;
  title?: string;
  childStyles?: string;
  fullScreen?: boolean;
}) {
  return (
    <section
      className={`flex items-center justify-center ${
        fullScreen ? 'min-h-screen' : ''
      } flex-col`}
    >
      {title && (
        <div className='relative mx-auto w-4/5'>
          <h1 className='text-3xl flex flex-col justify-center text-bold after:content[""] after:absolute after:border after:border-white after:left-0 after:w-full after:border-extra-color after:h-0 relative z-10 after:z-0 background-main pr-6 w-fit'>
            {title}
          </h1>
        </div>
      )}
      <div className={`flex flex-col ${childStyles}`}>{children}</div>
    </section>
  );
}
