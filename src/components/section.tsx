export default function Section({
  children,
  title,
  childStyles,
}: {
  children: React.ReactNode;
  title?: string;
  childStyles?: string;
}) {
  return (
    <section className='flex items-center justify-center min-h-screen'>
      {title && <div className='flex flex-col justify-center'>{title}</div>}
      <div className={`flex flex-col ${childStyles}`}>{children}</div>
    </section>
  );
}
