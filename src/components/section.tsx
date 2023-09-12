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
          <h1 className='text-3xl divider text-bold break-words'>{title}</h1>
        </div>
      )}
      <div className={`flex flex-col ${childStyles}`}>{children}</div>
    </section>
  );
}
