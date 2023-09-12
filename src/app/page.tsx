import AboutMe from '@/sections/aboutme';
import Banner from '@/sections/banner';
import Contact from '@/sections/contact';
import Footer from '@/sections/footer';
import WorkHistory from '@/sections/workhistory';

export default function Home() {
  return (
    <main className='flex min-h-screen min-w-full flex-col prose'>
      <Banner />
      <AboutMe />
      <WorkHistory />
      <Contact />
      <Footer />
    </main>
  );
}
