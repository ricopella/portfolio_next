import Animated from '@/components/animated';
import Section from '@/components/section';

const STYLES = {
  container: `mx-auto w-4/5 grid gap-6 mt-4`,
  link: `link link-primary`,
};

export default function Contact() {
  return (
    <Section
      title='Contact'
      fullScreen={false}
      id='Contact'
      sectionStyles='bg-base-200'
    >
      <Animated className={STYLES.container}>
        <p className='normal-case'>
          Whether you&apos;re a company looking to add to your team, a business
          owner looking to build an app or website with a freelance web
          developer, a developer looking to collaborate on a project, or just
          want to say hello, send me an{' '}
          <a className={STYLES.link} href='mailto:nrs710@gmail.com'>
            email
          </a>{' '}
          and let&apos;s build something great together!
        </p>
      </Animated>
    </Section>
  );
}
