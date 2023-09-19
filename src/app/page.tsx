import Timezones from '@/components/timezones';
import AboutMe from '@/sections/aboutme';
import Banner from '@/sections/banner';
import Contact from '@/sections/contact';
import Expertise from '@/sections/expertise';
import Timeline from '../sections/timelines';

export default function Home() {
  return (
    <>
      <Timezones />
      <Banner />
      <Expertise />
      <AboutMe />
      {/* <WorkHistory /> */}
      <Timeline />
      <Contact />
    </>
  );
}
