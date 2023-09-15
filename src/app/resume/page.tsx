'use client';

import Footer from '@/sections/footer';
import Image from 'next/image';
import Contact from './contact';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

export default function Resume() {
  return (
    <main className='flex min-h-screen min-w-full flex-col prose relative bg-base-100'>
      <div
        className='grid gap-4 grid-cols-1 py-4 my-24 mx-auto rounded-md drop-shadow-lg min-h-full bg-base-200 lg:w-resumeDesktop lg:h-resumeDesktop w-resumeSmall h-full'
        style={{
          gridTemplateRows: `10rem 1fr`,
        }}
      >
        <div className='grid relative w-full  sm:grid-cols-4 grid-cols-1'>
          <div className='col-span-1 align-middle justify-center hidden md:grid'>
            <Image
              src='/images/nrs2.jpeg'
              alt='Narin Rico Sundarabhaya'
              width={140}
              height={110}
              className='rounded-md'
            />
          </div>
          <div className='p-4 align-middle col-span-3 grid h-full justify-center'>
            <div className='h-max my-auto'>
              <h1 className='text-2xl mb-0  text-neutral-content'>
                Narin Sundarabhaya
              </h1>
              <h2 className='text-sm my-0 text-neutral-content'>
                Full-Stack Developer
              </h2>
              <p className='text-xs mb-0 text-neutral-content hidden sm:grid'>
                Versatile Senior Software Engineer with a proven track record in
                both corporate and freelance settings. Experienced in guiding
                small businesses to market, securing funding through MVP
                development.
              </p>
            </div>
          </div>
        </div>
        <div
          className='grid gap-4 overflow-hidden   md:grid-cols-resumeBodyDesktop'
          style={{
            gridTemplateRows: `repeat(2, max-content)`,
          }}
        >
          <div>
            <Contact />
            <Skills />
            <Education />
          </div>
          <Experience />
        </div>
      </div>
      <Footer />
    </main>
  );
}
