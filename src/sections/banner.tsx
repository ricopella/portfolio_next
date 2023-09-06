import Section from '@/components/section';

export default function Banner() {
  return (
    <Section childStyles='mx-auto w-4/5'>
      <h2 className='text-2xl'>Hi, my name is</h2>
      <h1 className='text-5xl font-bold break-words'>
        Narin Rico Sundarabhaya
      </h1>
      <h2 className='text-2xl'>I build things for the web</h2>
    </Section>
  );
}
