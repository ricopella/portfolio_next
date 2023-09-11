import Section from '@/components/section';

const LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nsundara/',
  },
  {
    name: 'Email',
    url: 'mailto:nrs710@gmail.com',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ricopella',
  },
];

export default function Contact() {
  return (
    <Section title='Contact' fullScreen={false}>
      <div className='mx-auto w-4/5 grid gap-6'>
        <p>
          Whether you&apos;re a company looking to add to your team, a business
          owner looking build an app or website with a freelance web developer,
          or a developer looking to collaborate on a project, or just wanting to
          say hi and see a picture of my dog, shoot me an{' '}
          <a href='mailto:nrs710@gmail.com'>email</a> and let&apos;s build
          something great together!
        </p>

        <div className={`grid grid-cols-3 gap-4`}>
          {LINKS.map((link) => (
            <div key={link.name} className='grid justify-center'>
              <a className='w-max' href={link.url}>
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
