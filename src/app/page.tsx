import AboutMe from '@/sections/aboutme';
import Banner from '@/sections/banner';
import Contact from '@/sections/contact';
import WorkHistory from '@/sections/workhistory';
import '@/styles/global.css';

export default function Home() {
  return (
    <main className='flex min-h-screen min-w-full flex-col items-center justify-between p-24'>
      <Banner />
      <AboutMe />
      <WorkHistory />
      <Contact />
    </main>
  );
}
