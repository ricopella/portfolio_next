export default function Banner() {
  return (
    <div
      className='hero min-h-screen bg-no-repeat'
      id='#Home'
      style={{
        background:
          'url(https://media.giphy.com/media/Ca9TNthVXlWms/giphy.gif) center center/cover ',
      }}
    >
      <div className='hero-overlay bg-opacity-90' />

      <div className='flex flex-col mx-auto w-4/5 break-words '>
        <h1 className='text-3xl sm:text-5xl font-bold break-words mb-0 tracking-widest italic text-neutral-content'>
          Narin Rico
        </h1>
        <h1 className='text-3xl sm:text-5xl font-bold break-words mb-0 tracking-widest italic text-neutral-content'>
          Sundarabhaya
        </h1>
        <h2 className='sm:text-2xl mt-0 tracking-widest italic text-neutral-content'>
          Your Architect for the Digital World
        </h2>
      </div>
    </div>
  );
}
