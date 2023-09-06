export default function Section({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <section className='flex min-h-screen flex-col'>
      {title && <div className='flex flex-col justify-center'>{title}</div>}
      {children}
    </section>
  );
}
