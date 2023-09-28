import AboutMe from '@/sections/aboutme';
import Banner from '@/sections/banner';
import Contact from '@/sections/contact';
import Expertise from '@/sections/expertise';
import dynamic from 'next/dynamic';
import Timeline from '../sections/timelines';
const Timezones = dynamic(() => import('@/components/timezones'), {
  ssr: false,
}); // fix server client time mismatch

export default function Home() {
  return (
    <>
      <Timezones />
      <Banner />
      <Expertise />
      <AboutMe />
      <Timeline />
      <Contact />
    </>
  );
}
