import Section from '@/components/section';

export default function Contact() {
  return (
    <Section
      title='Contact'
      fullScreen={false}
      id='Contact'
      sectionStyles='bg-base-200'
    >
      <div className='mx-auto w-4/5 grid gap-6 mt-4'>
        <p>
          Whether you&apos;re a company looking to add to your team, a business
          owner looking to build an app or website with a freelance web
          developer, a developer looking to collaborate on a project, or just
          want to say hello, send me an{' '}
          <a className='link link-primary' href='mailto:nrs710@gmail.com'>
            email
          </a>{' '}
          and let&apos;s build something great together!
        </p>
      </div>
    </Section>
  );
}
