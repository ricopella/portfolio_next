export default function Section({
  children,
  title,
  childStyles,
  fullScreen = true,
  id,
}: {
  children: React.ReactNode;
  title?: string;
  childStyles?: string;
  fullScreen?: boolean;
  id: string;
}) {
  return (
    <section
      className={`grid items-center justify-center ${
        fullScreen ? 'min-h-screen' : ''
      } grid-rows-4`}
      id={id}
    >
      {title && (
        <div className='relative mx-auto w-4/5 row-span-1'>
          <h1 className='text-3xl divider text-bold break-words'>{title}</h1>
        </div>
      )}
      <div className={`flex flex-col row-span-3 ${childStyles}`}>
        {children}
      </div>
    </section>
  );
}
