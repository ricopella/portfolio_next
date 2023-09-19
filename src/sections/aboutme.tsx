import Section from '@/components/section';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <Section
      title='About Me'
      id='AboutMe'
      sectionStyles='bg-base-200'
      fullScreen={false}
    >
      <div className='mx-auto w-4/5 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 h-full align-middle'>
        <div className='grid col-span-1 lg:col-span-1 justify-center'>
          <Image
            src='/images/nrs.jpg'
            alt='Narin Rico Sundarabhaya'
            width={300}
            height={300}
            className=' rounded-md shadow-xl'
          />
        </div>

        <div className='grid gap-4 col-span-1 lg:col-span-2'>
          <p className='normal-case'>
            {`I create results-driven digital experiences in the lively realms of web development and design. I design beautiful online shops and data-driven platforms for businesses with utility in mind. I use React for its dynamic possibilities, but my toolset is continually changing to stay current.`}
          </p>
          <p className='normal-case'>
            {`Based in Los Angeles and Bangkok, I've had the opportunity to work with a wide range of customers while learning about global digital trends and subtleties. Away from the computer, my days are spent experimenting with plant-based meals, listening to music, and rooting for New England sports teams. Music has always been a love of mine. I've been telling stories through music since I was a teenager, with my turntables and drum machine as regular friends. My DJ group, Music Please, even had its origins in a radio show that aired for an incredible 7 years.`}
          </p>
          <p className='normal-case'>
            {`My approach to digital experience creation is creative and systematic. If you need creativity and technological expertise, I can help you create the right digital tale.`}
          </p>
        </div>
      </div>
    </Section>
  );
}
