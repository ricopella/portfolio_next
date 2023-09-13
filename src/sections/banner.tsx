export default function Banner() {
  return (
    <div
      className='hero min-h-screen bg-no-repeat'
      style={{
        background: 'url(/images/bg.webp) center center/cover',
      }}
    >
      <div className='hero-overlay bg-opacity-60' />

      <div className='flex flex-col mx-auto w-4/5 break-words'>
        <h1 className='text-3xl sm:text-5xl font-bold break-words mb-0 tracking-widest italic'>
          Narin Rico
        </h1>
        <h1 className='text-3xl sm:text-5xl font-bold break-words mb-0 tracking-widest italic'>
          Sundarabhaya
        </h1>
        <h2 className='sm:text-2xl mt-0 tracking-widest italic'>
          I build things for the web
        </h2>
      </div>
    </div>
  );
}
